import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import { API } from '../utils/api';
import { Observable, Subject } from 'rxjs'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
@Injectable()
export class DashboardService {

  constructor(private http: Http) { }

  getTopPosts() {
    return this.http.get(`${API.statistics}`, this.jwt()).map((response: Response) => response.json());
  }

  getFollowers() {
    return this.http.get(`${API.account.followers}`, this.jwt()).map((response: Response) => response.json());
  }

  getFollowings() {
    return this.http.get(`${API.account.following}`, this.jwt()).map((response: Response) => response.json());
  }

  getlikes() {
    return this.http.get(`${API.account.likes}`, this.jwt()).map((response: Response) => response.json());
  }

  getPosts() {
    return this.http.get(`${API.account.posts}`, this.jwt()).map((response: Response) => response.json());
  }

  getTopPostsComments(id) {
    return this.http.get(`${API.media.comments}/${id}/comments`, this.jwt()).map((response: Response) => response.json());
  }

  getCompetitors() {
    return this.http.get(`${API.competitors.competitors}`, this.jwt()).map((response: Response) => response.json());
  }

  getSingleCompetitor(id) {
    return this.http.get(`${API.competitors.competitor}/${id}`, this.jwt()).map((response: Response) => response.json());
  }

  getHashtags() {
    return this.http.get(`${API.Hashtags.total}`, this.jwt()).map((response: Response) => response.json());
  }

  getSingleHashtag(id) {
    return this.http.get(`${API.Hashtags.hashtags}/${id}/total`, this.jwt()).map((response: Response) => response.json());
  }

  getSearchResults(q) {
    return this.http.get(`${API.search.usersHashtags}?q=${q}`, this.jwt()).map((response: Response) => response.json());
  }

  getAccountSettings() {
    return this.http.get(`${API.accountSettings.accountSettings}`, this.jwt()).map((response: Response) => response.json());
  }

  getPlans() {
    return this.http.get(`${API.accountSettings.plans}`, this.jwt()).map((response: Response) => response.json());
  }

  getInvoices() {
    return this.http.get(`${API.invoices}`, this.jwt()).map((response: Response) => response.json());
  }

  getUserEmail() {
    return this.http.get(`${API.Authentication.Login.me}`, this.jwt()).map((response: Response) => response.json());
  }

  changePassword(body) {
    return this.http.put(`${API.accountSettings.changePassword}`, body, this.jwt()).map((response: Response) => response.json());
  }

  upgradePlan(plan) {
    return this.http.put(`${API.accountSettings.planChange}`, plan , this.jwt()).map((response: Response) => response.json());
  }

  updateUserData(body) {
    return this.http.put(`${API.accountSettings.accountSettings}`, body, this.jwt()).map((response: Response) => response.json());
  }

  getFeeds() {
    return this.http.get(`${API.feedsApi.feedsApi}`, this.jwt()).map((response: Response) => response.json());
  }

 addFeed(name) {
    return this.http.post(`${API.feedsApi.feedsApi}`, name,  this.jwt()).map((response: Response) => response.json());
  }

 removeFeed(id) {
   return this.http.delete(`${API.feedsApi.feedsApi}/${id}`, this.jwt()).map((response: Response) => response.json());
  }

 getSearchUsers(q) {
   return this.http.get(`${API.search.users}?q=${q}`, this.jwt()).map((response: Response) => response.json());
  }

 getSearchhashtags(q) {
    return this.http.get(`${API.search.hashtags}?q=${q}`, this.jwt()).map((response: Response) => response.json());
  }

 submitAdd(id, users) {
   return this.http.put(`${API.feedsApi.feedsApi}/${id}/add-items`, users, this.jwt()).map((response: Response) => response.json());
  }

  deleteItemFeed(id, itemId, itemType) {
    return this.http.delete(`${API.feedsApi.feedsApi}/${id}/${itemId}/${itemType}`,
     this.jwt()).map((response: Response) => response.json());
  }

  getSingleFeed(id) {
    return this.http.get(`${API.feedsApi.feedsApi}/${id}`, this.jwt()).map((response: Response) => response.json());
  }
  // private helper methods
  private jwt(params?) {
    // create authorization header with jwt token
    let token = JSON.parse(localStorage.getItem('token'));
    if (token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + token });
      return new RequestOptions({ headers: headers, params: params });
    }
  }
}

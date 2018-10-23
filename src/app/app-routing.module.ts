import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/landing-page/navbar/navbar.component';
import { FeaturesComponent } from './components/landing-page/features/features.component';
import { ContactComponent } from './components/landing-page/contact/contact.component';
import { PrivacyComponent } from './components/landing-page/privacy/privacy.component';
import { TermsComponent } from './components/landing-page/terms/terms.component';
import { ResetPasswordComponent } from './components/landing-page/reset-password/reset-password.component';
import { FaqComponent } from './components/landing-page/faq/faq.component';
import { LoginComponent } from './components/landing-page/login/login.component';
import { FooterComponent } from './components/landing-page/footer/footer.component';
import { PricingComponent } from './components/landing-page/pricing/pricing.component';
import { RegisterComponent } from './components/landing-page/register/register.component';
import { ForgetPaswordComponent } from './components/landing-page/forget-pasword/forget-pasword.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AnalyticsTopPostsComponent } from './components/dashboard/analytics-top-posts/analytics-top-posts.component';
import { AuthGuard } from './guards/auth.guard';
import { FollowersComponent } from './components/dashboard/followers/followers.component';
import { FollowingsComponent } from './components/dashboard/followings/followings.component';
import { MyLikesComponent } from './components/dashboard/my-likes/my-likes.component';
import { MyPostsComponent } from './components/dashboard/my-posts/my-posts.component';
import { AnalyticsCompetitorsComponent } from './components/dashboard/analytics-competitors/analytics-competitors.component';
import { AnalyticsCompetitorComponent } from './components/dashboard/analytics-competitor/analytics-competitor.component';
import { AnalyticsHashtagComponent } from './components/dashboard/analytics-hashtag/analytics-hashtag.component';
import { AnalyticsHashtagsComponent } from './components/dashboard/analytics-hashtags/analytics-hashtags.component';
import { SearchResultsComponent } from './components/dashboard/search-results/search-results.component';
import { AccountSettingsComponent } from './components/dashboard/account-settings/account-settings.component';
import { ManageFeedsComponent } from './components/dashboard/manage-feeds/manage-feeds.component';
import { SingleFeedComponent } from './components/dashboard/single-feed/single-feed.component';

const routes: Routes = [
  { path: '', component: FeaturesComponent},
  { path: 'pricing', component: PricingComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'login', component: LoginComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forget-password', component: ForgetPaswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
  children: [
    { path: '', redirectTo: 'my-posts', pathMatch: 'full' },
    { path: 'top-posts', component: AnalyticsTopPostsComponent },
    { path: 'followers', component: FollowersComponent },
    { path: 'followings', component: FollowingsComponent },
    { path: 'my-likes', component: MyLikesComponent },
    { path: 'my-posts', component: MyPostsComponent },
    { path: 'analytics-competitors', component: AnalyticsCompetitorsComponent },
    { path: 'analytics-competitor/:id', component: AnalyticsCompetitorComponent },
    { path: 'hashtag/:id', component: AnalyticsHashtagComponent },
    { path: 'hashtags', component: AnalyticsHashtagsComponent },
    { path: 'results', component: SearchResultsComponent },
    { path: 'account-settings', component: AccountSettingsComponent },
    { path: 'manage-feeds', component: ManageFeedsComponent },
    { path: 'manage-feeds/:id', component: ManageFeedsComponent },
    { path: 'feed/:id', component: SingleFeedComponent },
  ]},

  { path: 'user/activate:token', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }

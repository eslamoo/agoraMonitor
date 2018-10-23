import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // Toggle the sublinks in the sidebar
    $('.sidebar .list h5').on('click', function () {
      $(this).parent('.list').toggleClass('active');
      $(this).next('ul').slideToggle();
    });

    // toggle sidebar
    $('.logo-menu .menu').on('click', function () {
      if ($('.page-content').hasClass('collapsed')) {

        $('.logo-menu .expand').css('display', 'block');
        $('.logo-menu .collapse').css('display', 'none');
        $('.page-content').removeClass('collapsed');
        $('.sidebar').css({ 'width': '80px', 'display': 'block' });
        $('.sidebar').addClass('collapsed');
      }else {

        $('.logo-menu .expand').css('display', 'none');
        $('.logo-menu .collapse').css('display', 'block');
        $('.page-content').addClass('collapsed');
        $('.sidebar').css({ 'width': '200px', 'display': 'block' });
        $('.sidebar').removeClass('collapsed');
      }
    });

    // toggle sub-menu links in sidebar
    $('.sub-menu-title').on('click', function () {
      $(this).next('ul').toggle();
    });

    // toggle menu in mobile screen
    $('.mobile-menu').on('click', function () {
      $('.search-menu-section').slideToggle(500);
    });

    // hide more than 3 user accounts in dropdown menu for navbar
    $('.accounts').each(function () {
      $(this).children('li').each(function (index) {
        if (index > 2) {
          $(this).css('display', 'none');
        }
      });
    });

    // expand all user accounts in dropdown menu for navbar
    $('.dropdown-item .fa').on('click', function (event) {
      event.stopPropagation();
      if ($(this).hasClass('fa-chevron-circle-up')) {
        $('.dropdown-item .fa-chevron-circle-down').fadeIn();
      }else {
        $(this).fadeOut();
      }
      $('.accounts').each(function () {
        $(this).children('li').each(function (index) {
          if (index > 2) {
            $(this).slideToggle();
          }
        });
      });
    });
    // toggle filters boxes
    const filterArea = $('.profile-details-filters .filters-area');
    $('.profile-details-filters .toggle-filters').on('click', function () {
      if (filterArea.css('display') === 'block') {
        filterArea.css('display', 'none');
        $('.profile-details-filters .show').css('display', 'block');
        $('.profile-details-filters .hide').css('display', 'none');
      }else {
        filterArea.css('display', 'block');
        $('.profile-details-filters .show').css('display', 'none');
        $('.profile-details-filters .hide').css('display', 'inline-block');
      }
    });
  }

}

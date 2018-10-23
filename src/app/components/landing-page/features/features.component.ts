import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // display faq answers
    $('.tab-pane .question').on('click', function () {
      var answer = $(this).next('.answer');
      if (answer.css('display') == 'none') {
        $(this).css('fontWeight', '700');
        answer.slideDown(200);
        $(this).children('.fa-caret-down').fadeOut(100);
        $(this).children('.fa-caret-up').fadeIn(100);
      }
      else {
        $(this).css('fontWeight', '500');
        answer.slideUp(200);
        $(this).children('.fa-caret-down').fadeIn(100);
        $(this).children('.fa-caret-up').fadeOut(100);
      }
    });
    if (window.matchMedia('(max-width: 992px)').matches) { $('.feeds .feeds-pics-wrapper').addClass('flex-last'); }
    else {
      { $('.feeds .feeds-pics-wrapper').removeClass('flex-last'); }
    }
    $(window).on('resize', function () {
      if (window.matchMedia('(max-width: 992px)').matches) { $('.feeds .feeds-pics-wrapper').addClass('flex-last'); }
      else {
        { $('.feeds .feeds-pics-wrapper').removeClass('flex-last'); }
      }
    })
  }

}

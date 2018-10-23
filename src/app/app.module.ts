import { BrowserModule } from '@angular/platform-browser';
import { NgModule , NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatSliderModule, MatCheckboxModule, MatInputModule,
  MatSelectModule, MatTabsModule, MatButtonModule, MatSnackBarModule,
  MatPaginatorModule, MatSortModule, MatProgressSpinnerModule,
  MatTooltipModule, MatTableModule, MatAutocompleteModule,
  MatChipsModule
} from '@angular/material';

// Services
import { AuthService } from './services/auth.service';
import { ContactService } from './services/contact.service';
import { PasswordsService } from './services/passwords.service';
import { DashboardService } from './services/dashboard.service';
// Guards
import { AuthGuard } from './guards/auth.guard';

import { AbstractControl } from '@angular/forms';
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
import { ObjectKeysPipe } from './pipes/object-keys.pipe';
import { TopnavComponent } from './components/dashboard/topnav/topnav.component';
import { SidenavComponent } from './components/dashboard/sidenav/sidenav.component';
import { MobileNavComponent } from './components/dashboard/mobile-nav/mobile-nav.component';
import { AnalyticsTopPostsComponent } from './components/dashboard/analytics-top-posts/analytics-top-posts.component';
import { MostLikedComponent } from './components/dashboard/analytics-top-posts/most-liked/most-liked.component';
import { MostCommentedComponent } from './components/dashboard/analytics-top-posts/most-commented/most-commented.component';
import { FollowersComponent } from './components/dashboard/followers/followers.component';
import { FollowingsComponent } from './components/dashboard/followings/followings.component';
import { MyLikesComponent } from './components/dashboard/my-likes/my-likes.component';
import { MyPostsComponent } from './components/dashboard/my-posts/my-posts.component';
import { AnalyticsCompetitorsComponent } from './components/dashboard/analytics-competitors/analytics-competitors.component';
import { ChartModule } from 'angular-highcharts';
import { AnalyticsCompetitorComponent } from './components/dashboard/analytics-competitor/analytics-competitor.component';
import { AnalyticsHashtagComponent } from './components/dashboard/analytics-hashtag/analytics-hashtag.component';
import { AnalyticsHashtagsComponent } from './components/dashboard/analytics-hashtags/analytics-hashtags.component';
import { SearchResultsComponent } from './components/dashboard/search-results/search-results.component';
import { AccountSettingsComponent } from './components/dashboard/account-settings/account-settings.component';
import { ManageFeedsComponent } from './components/dashboard/manage-feeds/manage-feeds.component';
import { SingleFeedComponent } from './components/dashboard/single-feed/single-feed.component';
import { SearchPipe } from './pipes/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FeaturesComponent,
    ContactComponent,
    PrivacyComponent,
    TermsComponent,
    ResetPasswordComponent,
    FaqComponent,
    LoginComponent,
    FooterComponent,
    PricingComponent,
    RegisterComponent,
    ForgetPaswordComponent,
    DashboardComponent,
    ObjectKeysPipe,
    TopnavComponent,
    SidenavComponent,
    MobileNavComponent,
    AnalyticsTopPostsComponent,
    MostLikedComponent,
    MostCommentedComponent,
    FollowersComponent,
    FollowingsComponent,
    MyLikesComponent,
    MyPostsComponent,
    AnalyticsCompetitorsComponent,
    AnalyticsCompetitorComponent,
    AnalyticsHashtagComponent,
    AnalyticsHashtagsComponent,
    SearchResultsComponent,
    AccountSettingsComponent,
    ManageFeedsComponent,
    SingleFeedComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    ChartModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTabsModule,
    MatTooltipModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatPaginatorModule,
    RouterModule,
],
  providers: [
    AuthService,
    AuthGuard,
    ContactService,
    PasswordsService,
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

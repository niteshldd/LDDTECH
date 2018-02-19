import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidebarModule } from 'ng-sidebar';
import { FashionComponent } from './fashion/fashion.component';
import { GroomingComponent } from './grooming/grooming.component';
import { RealationshipComponent } from './realationship/realationship.component';
import { HealthComponent } from './health/health.component';
import { TechnologyComponent } from './technology/technology.component';
import { SocialComponent } from './social/social.component';
import { StudyComponent } from './study/study.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { CurrentStudyComponent } from './study/current-study/current-study.component';
import { NewStudyComponent } from './study/new-study/new-study.component';
import { PastStudyComponent } from './study/past-study/past-study.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FashionComponent,
    GroomingComponent,
    RealationshipComponent,
    HealthComponent,
    TechnologyComponent,
    SocialComponent,
    StudyComponent,
    HomeComponent,
    PostComponent,
    SignupComponent,
    LoginComponent,
    CurrentStudyComponent,
    NewStudyComponent,
    PastStudyComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot([
      {path:'home',component: HomeComponent },
      {path:'fashion',component: FashionComponent },
      {path:'fashion',component: FashionComponent },
      {path:'grooming',component: GroomingComponent },
      {path:'health',component: HealthComponent },
      {path:'realationship',component: RealationshipComponent },
      {path:'social',component: SocialComponent },
      {path:'study',component: StudyComponent },
      {path:'post',component: PostComponent },
      {path:'login',component: LoginComponent },
      {path:'technology',component: TechnologyComponent },
      {path:'signup',component: SignupComponent },
    ]),
    SidebarModule.forRoot()  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

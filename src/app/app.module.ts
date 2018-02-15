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
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
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
      {path:'technology',component: TechnologyComponent },
    ]),
    SidebarModule.forRoot()  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

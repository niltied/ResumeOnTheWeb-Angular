import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { InViewportModule } from '@thisissoon/angular-inviewport';
import { BootstrapModule } from './modules/bootstrap.module';
import { IconsModule } from './modules/icons.module';

import { LandingComponent } from './sections/landing/landing.component';
import { HexagonComponent } from './sections/landing/hexagon/hexagon.component';
import { NavigationComponent } from './sections/navigation/navigation.component';
import { SocialComponent } from './sections/landing/social/social.component';
import { LeftComponent } from './sections/left/left.component';
import { RightComponent } from './sections/right/right.component';
import { AboutMeComponent } from './sections/left/about-me/about-me.component';
import { PersonalStatementComponent } from './sections/left/personal-statement/personal-statement.component';
import { SectionComponent } from './components/section/section.component';
import { SkillsComponent } from './sections/left/skills/skills.component';
import { SkillComponent } from './sections/left/skills/skill/skill.component';
import { LanguagesComponent } from './sections/left/languages/languages.component';
import { LanguageComponent } from './sections/left/languages/language/language.component';
import { BlogComponent } from './sections/left/blog/blog.component';
import { HobbiesComponent } from './sections/left/hobbies/hobbies.component';
import { VolunteerWorkComponent } from './sections/left/volunteer-work/volunteer-work.component';
import { AchievementsComponent } from './sections/left/achievements/achievements.component';
import { CertificationsComponent } from './sections/left/certifications/certifications.component';
import { EducationComponent } from './sections/right/education/education.component';
import { WorkExperienceComponent } from './sections/right/work-experience/work-experience.component';
import { ProjectsComponent } from './sections/right/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HexagonComponent,
    NavigationComponent,
    SocialComponent,
    LeftComponent,
    RightComponent,
    AboutMeComponent,
    PersonalStatementComponent,
    SectionComponent,
    SkillsComponent,
    SkillComponent,
    LanguagesComponent,
    LanguageComponent,
    BlogComponent,
    HobbiesComponent,
    VolunteerWorkComponent,
    AchievementsComponent,
    CertificationsComponent,
    EducationComponent,
    WorkExperienceComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    InViewportModule,
    BootstrapModule,
    HttpClientModule,
    IconsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

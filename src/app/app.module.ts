import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RPVideosComponent } from './rpvideos/rpvideos.component';
import { RPWebArticlesComponent } from './rpweb-articles/rpweb-articles.component';
import { RPForumPostsComponent } from './rpforum-posts/rpforum-posts.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ResourceService } from './resource.service';
import {DataService} from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WebInfoDivComponent } from './web-info-div/web-info-div.component';
import { VidInfoDivComponent } from './vid-info-div/vid-info-div.component';
import { RedditInfoDivComponent } from './reddit-info-div/reddit-info-div.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkDragDrop} from '@angular/cdk/drag-drop';
import { ResourcelistComponent } from './resourcelist/resourcelist.component';
import { ResourcepageComponent } from './resourcepage/resourcepage.component';
import { HomepagegoalsComponent } from './homepagegoals/homepagegoals.component';
import { HomepagegoaldisplayComponent } from './homepagegoaldisplay/homepagegoaldisplay.component';
import { HomepageresourcedisplayComponent } from './homepageresourcedisplay/homepageresourcedisplay.component';
import { FirstGoalFormComponent } from './first-goal-form/first-goal-form.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SecondGoalFormComponent } from './second-goal-form/second-goal-form.component';
import { FormparentComponent } from './formparent/formparent.component';
import { SubgoalportionComponent } from './subgoalportion/subgoalportion.component';
import { AddresourcedecisionComponent } from './addresourcedecision/addresourcedecision.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import {UserService} from './user/user.service';
import {AuthGuard} from './auth/auth.guard';
import {AuthInterceptor} from './auth/auth.interceptor';
import { GoalpageresourcesComponent } from './goalpageresources/goalpageresources.component';
import { SinglegoalhubComponent } from './singlegoalhub/singlegoalhub.component';
import { GoalhomesubgoalComponent } from './goalhomesubgoal/goalhomesubgoal.component';
import { GoaltimelineComponent } from './goaltimeline/goaltimeline.component';
import { SubgoaldisplaypageComponent } from './subgoaldisplaypage/subgoaldisplaypage.component';
import { SubToDoListComponent } from './sub-to-do-list/sub-to-do-list.component';
import { EditGoalPageComponent } from './edit-goal-page/edit-goal-page.component';
import { EditSubGoalPageComponent } from './edit-sub-goal-page/edit-sub-goal-page.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {MatCheckboxModule} from '@angular/material/checkbox';





@NgModule({
  declarations: [
    AppComponent,
    RPVideosComponent,
    RPWebArticlesComponent,
    RPForumPostsComponent,
    SidebarComponent,
    WebInfoDivComponent,
    VidInfoDivComponent,
    RedditInfoDivComponent,
    ResourcelistComponent,
    ResourcepageComponent,
    HomepagegoalsComponent,
    HomepagegoaldisplayComponent,
    HomepageresourcedisplayComponent,
    FirstGoalFormComponent,
    SecondGoalFormComponent,
    FormparentComponent,
    SubgoalportionComponent,
    AddresourcedecisionComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    GoalpageresourcesComponent,
    SinglegoalhubComponent,
    GoalhomesubgoalComponent,
    GoaltimelineComponent,
    SubgoaldisplaypageComponent,
    SubToDoListComponent,
    EditGoalPageComponent,
    EditSubGoalPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    DragDropModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    NgCircleProgressModule.forRoot({
    radius : 100,
    outerStrokeWidth: 16,
    innerStrokeWidth: 8,
    outerStrokeColor: "#78C000",
    innerStrokeColor: "#C7E596",
    animationDuration: 300
  })
  ],
  providers: [ResourceService, DataService, UserService, AuthGuard, AuthInterceptor],
  bootstrap: [UserComponent] //[AppComponent]//[SignInComponent]//[UserComponent] //Previously was app component
})
export class AppModule{ }

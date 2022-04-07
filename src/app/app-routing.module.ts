declare var require: any
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RPWebArticlesComponent} from './rpweb-articles/rpweb-articles.component';
import {RPForumPostsComponent} from './rpforum-posts/rpforum-posts.component';
import {RPVideosComponent} from './rpvideos/rpvideos.component';
import {WebInfoDivComponent} from './web-info-div/web-info-div.component';
import {VidInfoDivComponent} from './vid-info-div/vid-info-div.component';
import {RedditInfoDivComponent} from './reddit-info-div/reddit-info-div.component';
import {ResourcelistComponent} from './resourcelist/resourcelist.component';
import {ResourcepageComponent} from './resourcepage/resourcepage.component';
import {AppComponent} from './app.component';
import {HomepagegoalsComponent} from './homepagegoals/homepagegoals.component';
import {HomepagegoaldisplayComponent} from './homepagegoaldisplay/homepagegoaldisplay.component';
import {HomepageresourcedisplayComponent} from './homepageresourcedisplay/homepageresourcedisplay.component';
import {FirstGoalFormComponent} from './first-goal-form/first-goal-form.component';
import {SecondGoalFormComponent} from './second-goal-form/second-goal-form.component';
import {FormparentComponent} from './formparent/formparent.component';
import {SubgoalportionComponent} from './subgoalportion/subgoalportion.component';
import {AddresourcedecisionComponent} from './addresourcedecision/addresourcedecision.component';
import {SignUpComponent} from './user/sign-up/sign-up.component';
import {SignInComponent} from './user/sign-in/sign-in.component';
import {UserComponent} from './user/user.component';
import {GoalpageresourcesComponent} from './goalpageresources/goalpageresources.component';
import {SinglegoalhubComponent} from './singlegoalhub/singlegoalhub.component';
import {SubgoaldisplaypageComponent} from './subgoaldisplaypage/subgoaldisplaypage.component';
import {SubToDoListComponent} from './sub-to-do-list/sub-to-do-list.component';
import {EditGoalPageComponent} from './edit-goal-page/edit-goal-page.component';
import {EditSubGoalPageComponent} from './edit-sub-goal-page/edit-sub-goal-page.component'
import {AuthGuard} from './auth/auth.guard';


//import {ctrlUser} from '../../backend/controllers/user.controller';
//import { NgbModal, NgbModule } from '@ngx-bootstrap/ngx-bootstrap';
//const ctrlUser = require('../../backend/controllers/user.controller')
const routes: Routes = [

  {path: 'resource/webInfo', component: WebInfoDivComponent, canActivate:[AuthGuard],
  children: [
    {path:'webInfo/resource',  redirectTo:'/resource' }
    ]
  },

  {path: 'videoresource/vidInfo', component: VidInfoDivComponent, canActivate:[AuthGuard],
  children: [
    {path:'vidInfo/videoresource',  redirectTo:'/videoresource' }
    ]
  },

  {path: 'redditresource/redditInfo', component: RedditInfoDivComponent, canActivate:[AuthGuard],
  children: [
    {path:'redditInfo/redditresource',  redirectTo:'/redditresource' }
    ]
  },

  {path: 'goalHub/homeProfileResource', component: GoalpageresourcesComponent, canActivate:[AuthGuard]},

    {path: 'goalHub/homeProfileResource/goalHub', redirectTo: '/goalHub'},

  {path: 'goalHome/homeProfileResource', component: GoalpageresourcesComponent, canActivate:[AuthGuard],
  children: [
    {path: 'homeProfileResource/goalHome', redirectTo: '/goalHome'}
    ]
  },

//  SinglegoalhubComponent


//  {
//     path: 'goalHub/subGoalDisplay/subToDoList', component: SubToDoListComponent,canActivate:[AuthGuard],
//     children: [
       //{path: '',  component: SubToDoListComponent},
//       {path: 'subToDoList/subGoalDisplay', redirectTo: '/goalHub/subGoalDisplay'
      //   children: [
      //       {path: 'subToDoList', component: SubToDoListComponent// '/goalHub/subGoalDisplay/subToDoList'
    //         children: [
    //          { path: 'subToDoList/subGoalDisplay', component: SubgoaldisplaypageComponent}

  //             ]
      //       }
      //   ]
//       }
//     ]
//  },

// this code works below...... 1/27/21
{path: 'goalHub/subGoalDisplay/subToDoList', component: SubToDoListComponent,canActivate:[AuthGuard]},

{path: 'goalHub/subGoalDisplay/subToDoList/subGoalDisplay', redirectTo: '/goalHub/subGoalDisplay'},

{path: 'goalHub/subGoalDisplay/editOneSub', component: EditSubGoalPageComponent, canActivate:[AuthGuard]},

{path: 'goalHub/subGoalDisplay/editOneSub/subGoalDisplay', redirectTo: '/goalHub/subGoalDisplay'},

//subGoalDisplay routing
{path: 'goalHub/subGoalDisplay', component: SubgoaldisplaypageComponent,canActivate:[AuthGuard],
children: [
//  {path: '', redirectTo: ''}
  {path: 'goalHub', redirectTo: '/goalHub'}
  ]
},
//this code works above ....1/27/21

  {path: 'goalHome/goalHub' , component: SinglegoalhubComponent,canActivate:[AuthGuard],
     children: [
       {path: 'goalHub/goalHome', redirectTo: '/goalHome'}
     ]
  },


  {
    path: 'subGoalDisplay/goalHub', component: SinglegoalhubComponent, canActivate:[AuthGuard]

  },


  {
    path: 'subGoalDisplay', component: SubgoaldisplaypageComponent,canActivate:[AuthGuard]
  },


  {
    path: 'goalHome/goalHub/editGoal', component: EditGoalPageComponent, canActivate:[AuthGuard],
    children: [
      {path: 'goalHub', redirectTo: '/goalHub'}
    ]

  },

  {
    path: 'goalHub/editGoal', component: EditGoalPageComponent, canActivate:[AuthGuard],
      children: [
        {path: 'goalHub', redirectTo: '/goalHub'}
      ]

  },

  {
  path: 'resource', component: AppComponent, canActivate:[AuthGuard],
  children: [
  {path: '', component: ResourcepageComponent,
     children: [
      {path: '', component: RPWebArticlesComponent,
     children: [
        {path: 'webInfo', component: WebInfoDivComponent,
         children: [
           {path:'resource',  redirectTo:'/resource' }
           //{path: '', component: WebInfoDivComponent,
         ]}
   ]
}
]
}]},
//vidInfo
//videoresource
{
path: 'videoresource', component: AppComponent, canActivate:[AuthGuard],
children: [
{path: '', component: ResourcepageComponent,
   children: [
    {path: '', component: RPVideosComponent,
   children: [
      {path: 'vidInfo', component: VidInfoDivComponent,
       children: [
         {path:'videoresource',  redirectTo:'/videoresource' }
         //{path: '', component: WebInfoDivComponent,
       ]}
 ]
}
]
}]},
//redditresource
//redditInfo
//redditresource
//RedditInfoDivComponent
//RPForumPostsComponent
{
path: 'redditresource', component: AppComponent, canActivate:[AuthGuard],
children: [
{path: '', component: ResourcepageComponent,
   children: [
    {path: '', component: RPForumPostsComponent,
   children: [
      {path: 'redditInfo', component: RedditInfoDivComponent,
       children: [
         {path:'redditresource',  redirectTo:'/redditresource' }
         //{path: '', component: WebInfoDivComponent,
       ]}
 ]
}
]
}]},

{path: 'videoresource/goalHome', component: SignInComponent,
    children: [
      {path: '', component: GoalpageresourcesComponent, canActivate:[AuthGuard]}
    ]},

{ path: 'resource/goalHome',  component: SignInComponent,
    children: [
      {path: '', component: GoalpageresourcesComponent, canActivate:[AuthGuard]}
    ]},

{ path: 'redditresource/goalHome', component: SignInComponent,
    children: [
      {path: '', component: GoalpageresourcesComponent, canActivate:[AuthGuard]}
    ]},


/////  Routes for going back and forth between the online resources and the resource list  /////
{
path: 'resource/resourceList', component: AppComponent, canActivate:[AuthGuard],//ResourcepageComponent,
children: [
  {path: '', component: ResourcepageComponent,// ResourcelistComponent}
  children: [
    {path: '', component: ResourcelistComponent,
    children: [
      {path: 'resourcePage', redirectTo:'/resourcePage', pathMatch: 'full'}
    ]}
  ]
}]
},
{
path: 'resourcePage/resourceList', component: ResourcepageComponent, canActivate:[AuthGuard],
children: [
{path: '', component: ResourcelistComponent}
]},

{
path: 'videoresource/resourceList', component: AppComponent, canActivate:[AuthGuard],//ResourcepageComponent,
children: [
  {path: '', component: ResourcepageComponent,// ResourcelistComponent}
  children: [
    {path: '', component: ResourcelistComponent,
    children: [
      {path: 'resourcePage', redirectTo:'/resourcePage', pathMatch: 'full'}
    ]}
  ]
}]
},

{
path: 'redditresource/resourceList', component: AppComponent, canActivate:[AuthGuard],//ResourcepageComponent,
children: [
  {path: '', component: ResourcepageComponent,// ResourcelistComponent}
  children: [
    {path: '', component: ResourcelistComponent,
    children: [
      {path: 'resourcePage', redirectTo:'/resourcePage', pathMatch: 'full'}
    ]}
  ]
}]
},
{
  path: 'resourcePage', component: AppComponent, canActivate:[AuthGuard],
  children: [
    {path: '', component: ResourcepageComponent,//redirectTo: '/resource', pathMatch: 'full'}
    children: [
      {path: 'resource', redirectTo: '/resource', pathMatch: 'full'}
    ]}
  ]
},

//added 1/28/21 -- fixed routing for resourceList routes

{path: 'resourcePage/resourceList/goalHome', component: HomepagegoalsComponent, canActivate:[AuthGuard] },
{path: 'videoresource/resourceList/goalHome', component: HomepagegoalsComponent, canActivate:[AuthGuard] },
{path: 'resource/resourceList/goalHome', component: HomepagegoalsComponent, canActivate:[AuthGuard] },
{path: 'redditresource/resourceList/goalHome', component: HomepagegoalsComponent, canActivate:[AuthGuard] },

 {
  path: 'goalHome', component: HomepagegoalsComponent, canActivate:[AuthGuard]   //UserComponent
 },


 {
   path: 'resourcedecision', component: AddresourcedecisionComponent, canActivate:[AuthGuard]

 },



{
  path: 'goalHub', component: SinglegoalhubComponent, canActivate:[AuthGuard]
},

{
  path:'subGoalDisplay', component: SubgoaldisplaypageComponent
},
 {
  path: 'goalCreation', component: FormparentComponent,canActivate:[AuthGuard],
   children: [
    { path: '', component: FirstGoalFormComponent},
    {path: 'secondportion', component: SecondGoalFormComponent},
    {path: 'subgoalportion', component: SubgoalportionComponent,
      children: [
        {path: '', component: SubgoalportionComponent},
        {path: 'subgoalportion', component: SubgoalportionComponent },
      ]}
    ]
},

  {path: 'goalCreation/goalCreation', component: FirstGoalFormComponent,canActivate:[AuthGuard] },

{
  path: 'homePage', redirectTo: '/'

},

{
  path: '', redirectTo: '/signin', pathMatch: 'full'

},

//{
  //path: '', component: UserComponent,
  //    children: [
  //      {path: '' ,component: SignInComponent},
  //      {path: 'signup', component: SignUpComponent}
  //    ]

//},
//{
//       path: '', redirectTo: '/signin', pathMatch: 'full'
//   },
{
    path: 'signup', component: SignUpComponent,
},
{
    path: 'signin', component: SignInComponent,
},
{
  path: 'goaldisplay', component: HomepagegoalsComponent, canActivate:[AuthGuard],
  children: [
     {path:'', component:HomepagegoaldisplayComponent}
  ]},

  {
    path: 'resourcedisplay', component: HomepagegoalsComponent, canActivate:[AuthGuard],
    children: [
      {path: '', component:HomepageresourcedisplayComponent}
    ]}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

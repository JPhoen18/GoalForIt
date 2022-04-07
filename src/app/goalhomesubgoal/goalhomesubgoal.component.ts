
import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service';
import { Router, NavigationEnd } from '@angular/router';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import {RedditResource} from '../redditresource.model';
import {UserAccount} from '../useraccount.model';
import {Goals} from '../goals.model';
import { Observable } from 'rxjs';
import {DataService} from '../data.service';

@Component({
  selector: 'app-goalhomesubgoal',
  templateUrl: './goalhomesubgoal.component.html',
  styleUrls: ['./goalhomesubgoal.component.css'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *',[
        query(':enter', //only defined elements being added, and where they are going from and to
        [
          style({opacity: 0, transform: 'translateY(-15px)'}),
          stagger('50ms',
          animate('550ms ease-out',
          style({ opacity: 1, transform: 'translateY(0px)'})))
        ], {optional: true }),
        query( ':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
      })
    ])
  ])

  ]
})
export class GoalhomesubgoalComponent implements OnInit {

  userGoals: any;
  resourceIndex: any;

  constructor(private router: Router, private data: DataService, private resourceservice: ResourceService) { }

  ngOnInit() {

    this.data.currentGoals.subscribe((res) =>{
       console.log("Here is the User Goal Information! ")
       console.log(res)
       this.userGoals = res

    })
  }

}

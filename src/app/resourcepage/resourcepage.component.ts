import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import {FirstGoalFormComponent} from '../first-goal-form/first-goal-form.component';
import {Goals} from '../goals.model';
import {HighPriorityList} from '../highprioritylist.model';
import {MediumPriorityList} from '../mediumprioritylist.model';
import {LowPriorityList} from '../lowprioritylist.model';
import { Observable } from 'rxjs';
import {DataService} from '../data.service';
import { ResourceService } from '../resource.service';
import { Router, NavigationEnd } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-resourcepage',
  templateUrl: './resourcepage.component.html',
  styleUrls: ['./resourcepage.component.css']
})
export class ResourcepageComponent implements OnInit {
  goalTitle: any

  constructor(private resourceservice : ResourceService, private router : Router,
    private data: DataService, private http : Http) { }

  ngOnInit() {
    this.data.currentGoalTitle.subscribe((res) => {
      console.log("The Title")
      console.log(res);
      this.goalTitle = res;
    })
  }

}

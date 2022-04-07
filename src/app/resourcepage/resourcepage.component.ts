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
import { HostListener } from "@angular/core";
import { Http } from '@angular/http';

@Component({
  selector: 'app-resourcepage',
  templateUrl: './resourcepage.component.html',
  styleUrls: ['./resourcepage.component.css']
})
export class ResourcepageComponent implements OnInit {
  goalTitle: any
  screenHeight: any
  screenWidth: any
  parentElem: any

  constructor(private resourceservice : ResourceService, private router : Router,
    private data: DataService, private http : Http) {
    this.getScreenSize();
  }

    @HostListener('window:resize', ['$event'])
      getScreenSize(event?) {
            this.screenHeight = window.innerHeight;
            this.screenWidth = window.innerWidth;
            console.log(this.screenHeight, this.screenWidth);


            //if(sideNav.style.visibility == 'visible'){
            //window.alert(this.screenWidth);
            //if width greater than 600.  Call method that will check if sidebar is visible. If so, adjust the css of the mother div.
        //    var firstSideNav = document.getElementById('menuholder');

        //    if(firstSideNav != null){
        //    window.alert(firstSideNav.style.position);
        //  }
      }

 ngOnInit() {

    this.data.currentGoalTitle.subscribe((res) => {
      console.log("The Title")
      console.log(res);
      this.goalTitle = res;
      if(!res){
        this.goalTitle = this.data.getGoalTitle();
      }
    });

    //var eleElem = document.getElementsByClassName("container");
  //  console.log(eleElem);
  //  this.parentElem = eleElem[0].parentElement;
  //  console.log(this.parentElem);
    //code that will let me dynamically alter the appearance of the usercomponent container, atleast while in the resourcepage component

//** Problem 4/11/21 -- Cannot get the width to remain at 800 px atleast visually when I click one of the resource buttons (ie.: web, articles, videos)**//
//    if(this.screenWidth > 630){
//      console.log("Here I am now");
//      console.log($(this.parentElem).width());
//      $(this.parentElem).css("width", "800px");

    //  console.log($(this.parentElem).width());
      //$("#content").css("width", "700px");
    }


//window.location = self.location;


  }

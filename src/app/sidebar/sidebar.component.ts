import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  currentUrl: string

  constructor( private router: Router) {

    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url)

   }

  ngOnInit() {
  }

}

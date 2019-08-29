import { Component, OnInit } from '@angular/core';
import { publish, refCount } from 'rxjs/operators';
import { ResourceService } from '../resource.service';
import { Router, NavigationEnd } from '@angular/router';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import {Resource} from '../resource.model';
import { Observable } from 'rxjs';
import {DataService} from '../data.service';
//[routerLink]="['/product/',product.id]"  routerLink="webInfo"

@Component({
  selector: 'app-rpweb-articles',
  templateUrl: './rpweb-articles.component.html',
  styleUrls: ['./rpweb-articles.component.css'],
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
export class RPWebArticlesComponent implements OnInit {

//  message: Resource[]
  digit: number
  users$ : any[] //Resource[]
  placeholder: any

  constructor(private resourceservice : ResourceService, private router : Router,
  private data: DataService) {
  }

  ngOnInit() {
    this.users$ = ['0']
    this.getItDone()
  //  this.data.currentMessage.subscribe(message => this.message = message)
       }


  getItDone(){
try{
      this.placeholder = this.resourceservice.getResources().pipe(
      publish(),
      refCount()
);

      this.placeholder
        .subscribe((data : Resource[])=>{
           console.log('Here is the proof')
           console.log(data)
           this.users$ = data
           console.log('Data requested ...')
           console.log(this.users$)
           console.log('This is the other stuff')
      //     console.log(this.message)
          // console.log(this.users$[0])
         })
       }
       catch(err){
         console.log("Cannot give you articles")
         console.log(err);
       }

    }

    getIndex(digit){
      this.digit = digit
      console.log("Here is the number I need")
      console.log(this.digit)
      this.data.passIndex(this.digit)
    }

}


  //    resourceservice => this.users$ = resourceservice
  //    console.log(this.users$)

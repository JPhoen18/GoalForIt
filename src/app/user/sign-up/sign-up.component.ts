import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import {NgForm} from '@angular/forms';
import {UserAccount} from '../../useraccount.model';
import {HighPriorityList} from '../../highprioritylist.model';
import {MediumPriorityList} from '../../mediumprioritylist.model';
import {LowPriorityList} from '../../lowprioritylist.model';
import {Goals} from '../../goals.model';
import { ResourceService } from '../../resource.service';
import { Router } from '@angular/router';
import {DataService} from '../../data.service';

//const ctrlUser = require('backend/controllers/user.controller');  //Will this work as it is?



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers : [UserService]
})
export class SignUpComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSuccessMessage: boolean;
  serverErrorMessages: string

  public highpriorlist : HighPriorityList = {
    Title:'',
    AuthorURL: '',
    Content: ''
  }

  public medpriorlist : MediumPriorityList = {
    Title:'',
    AuthorURL: '',
    Content: ''
  }

  public lowpriorlist : LowPriorityList = {
    Title:'',
    AuthorURL: '',
    Content: ''
  }

  constructor(private userService: UserService, private resourceservice : ResourceService, private router : Router,
    private data: DataService) { }


  ngOnInit() {
  }

  onSubmit(form:  NgForm){
    //console.log("Here are the values")
    //console.log(form.value)
    console.log(form.value)
    //ctrlUser.register(form.value) //This needs to be moved to serverside.
    this.resourceservice.getEncrypt(form.value);
    //console.log("Here is the brand new stuff");
    //console.log(form.value);
  //  this.resourceservice.insertNewUser(form.value)

  }

  resetForm(form: NgForm ){
    this.userService.newUser = {
      firstname: '',
      lastname: '',
      userid: '',
      password: '',
      email: '',
      goals: [{
         goalTitle: '',
         description: '',
         goalCreationDate: new Date,
         goalDueDate: new Date,
         HighPriority: [this.highpriorlist],
         MediumPriority: [this.medpriorlist],
         LowPriority: [this.lowpriorlist]
       }],
      admin: false
    };


    }

}

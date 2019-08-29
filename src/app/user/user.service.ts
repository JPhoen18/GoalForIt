import { Injectable } from '@angular/core';
import {UserAccount} from '../useraccount.model';
import {HighPriorityList} from '../highprioritylist.model';
import {MediumPriorityList} from '../mediumprioritylist.model';
import {LowPriorityList} from '../lowprioritylist.model';
import {Goals} from '../goals.model';




@Injectable({
  providedIn: 'root'
})
export class UserService {

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

 public newUser: UserAccount = {
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
  constructor() { }
}

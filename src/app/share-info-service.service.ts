import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareInfoServiceService {

  private logOutSubject = new Subject<any>();

  constructor() { }

  sendLogOutCheck(){
     console.log("I am here");
     this.logOutSubject.next();
  }

  getLogOutCheck(): Observable<any>{
    return this.logOutSubject.asObservable();

  }

}

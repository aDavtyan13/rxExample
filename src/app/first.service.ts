import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  // array=[1,2,3];

  // simpleData$ = new Subject<boolean>();

  // simpleBehavior$ = new BehaviorSubject(null);


  behaviorExample$ = new BehaviorSubject(null);

  constructor() { 
    
  }
  // nextToSubject(){
  //   this.simpleData$.next(true);
  // }

  // nexToBehavior(){
  //   this.simpleBehavior$.next('dam');
  //   this.simpleBehavior$.next('daaaaaaaaaa');

  // }


  // newDam(){
  //   return this.array;
  // }
  
  nameService(){
    return this.behaviorExample$;
    //this.behaviorExample$.next(localStorage.getItem('name'));
  }

}

import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class FirstService {

  // array=[1,2,3];

  // simpleData$ = new Subject<boolean>();

  // simpleBehavior$ = new BehaviorSubject(null);


  // behaviorExample$ = new BehaviorSubject(null);

  headerBehavior$=new BehaviorSubject(null);

  constructor(private http: HttpClient) { 
    
  }
  // nextToSubject(){
  //   this.simpleData$.next(true);
  // }
  // 'rxjs/add/operator/catch';
  // 'rxjs/add/operator/catch';
  // 'rxjs/add/operator/catch';t('dam');
  // 'rxjs/add/operator/catch';t('daaaaaaaaaa');
  // 'rxjs/add/operator/catch';
  // 'rxjs/add/operator/catch';
  // 'rxjs/add/operator/catch';

  // newDam(){
  //   return this.array;
  // }
  
  // nameService(){
  //   return this.behaviorExample$;
  //   //this.behaviorExample$.next(localStorage.getItem('name'));
  // }

  urlOpen(){
    return this.http.get('https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts')
    .subscribe(data=>console.log(data),err =>this.headerBehavior$.error('ErrrrrrrrrrrorDAaaaaaaaaa'));
  }

  private errorHandle(){

  }
  


}

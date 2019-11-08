import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service';
import { take, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dam',
  templateUrl: './dam.component.html',
  styleUrls: ['./dam.component.css']
})
export class DamComponent implements OnInit {

  subscription;
  unsubscription;
  damError;

  public showHide = true;

  constructor(private dam: FirstService, private http: HttpClient) {

    //this.dam.headerBehavior$.subscribe(dada=>console.log(dada));


    /*********************URL open ******************/
    // dam.urlOpen().pipe(
    //   switchMap(data => Object.values(data).filter(v=>v))
    // ).subscribe(x=> console.log(x));
    /*********************URL open ******************/



    /****************************ERROR **********************/
    // dam.urlOpen();
    // this.damError=dam.headerBehavior$;
    /****************************ERROR **********************/



    // console.log(dam.newDam()); 

    // this.subscription = this.dam.simpleData$.subscribe(boo => console.log(boo));

    // this.unsubscription = this.dam.simpleBehavior$.pipe(take(2)).subscribe(da => console.log(da));

    // dam.nexToBehavior();

    // dam.nextToSubject();


    // this.dam.behaviorExample$.subscribe(dam=>console.log(dam));

    // dam.firstComponent();

    // this.dam.headerBehavior$.subscribe(dam=>this.da=dam)

  }



  /*********************SHOW HIDE*****************/
  hide() {
    this.dam.headerBehavior$.subscribe(hidden => this.showHide = hidden);
    this.dam.headerBehavior$.next(false);

  }

  show() {
    this.dam.headerBehavior$.subscribe(show => this.showHide = show);
    this.dam.headerBehavior$.next(true);
  }
  /*********************SHOW HIDE*****************/

  ngOnInit() {

  }

  ngOnDestroy() {
    //this.subscription.unsubscribe();
    //this.unsubscription.unsubscribe();
  }

}




//             .get('url')

 //1.unenq navbar...logout lineluc koruma..heto eli haytnvuma
 //2.mihat subject lini,,,iran click aneluc 3 component poxven
import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-dam',
  templateUrl: './dam.component.html',
  styleUrls: ['./dam.component.css']
})
export class DamComponent implements OnInit {

  subscription;
  unsubscription;

  constructor(private dam:FirstService) {

    // console.log(dam.newDam()); 

    // this.subscription = this.dam.simpleData$.subscribe(boo => console.log(boo));

    // this.unsubscription = this.dam.simpleBehavior$.pipe(take(2)).subscribe(da => console.log(da));

    // dam.nexToBehavior();

    // dam.nextToSubject();


    // this.dam.behaviorExample$.subscribe(dam=>console.log(dam));

    // dam.firstComponent();

   }

  ngOnInit() {

  }

  ngOnDestroy(){
    // this.subscription.unsubscribe();
    //this.unsubscription.unsubscribe();
  }

}




//             .get('url')

 //1.unenq navbar...logout lineluc koruma..heto eli haytnvuma
 //2.mihat subject lini,,,iran click aneluc 3 component poxven
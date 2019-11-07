import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { pipe } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjsExample';

  
}




// const observable = new Observable(function subscribe(subscriber) {
//   const id = setInterval(() => {
//     subscriber.next('hi')
//   }, 1000);
// });





// observable.subscribe(x=>{
//   console.log(x);
// });



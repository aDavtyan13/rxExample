import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {
  public dam;

  constructor(public secondChange:FirstService) {

     //this.secondChange.behaviorExample$.subscribe(dam=>console.log(dam));

    this.secondChange.behaviorExample$.subscribe(da=>this.dam=da);

    //secondChange.nameService();

   }

  ngOnInit() {
  }

}

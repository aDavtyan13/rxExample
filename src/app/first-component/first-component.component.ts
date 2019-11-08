import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service';

import {  FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  damPage:FormGroup;

  public name;

  constructor(public firstChange:FirstService,public fb:FormBuilder) {

   }

  ngOnInit() {
    this.damPage=this.fb.group({
      name:['',]

    })
  }

  // onSubmit(){
  //    this.firstChange.behaviorExample$.next(this.damPage.value.name);
    
  //    console.log(this.damPage.value.name);
  //   localStorage.setItem('name',this.damPage.value.name);
  // }



}

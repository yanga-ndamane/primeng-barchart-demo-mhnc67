import { newArray } from '@angular/compiler/src/util';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  selected;
  numberOfArrays = 100;

  ngOnInit() {}

  newArray() {
    return new Array(this.numberOfArrays);
  }
}

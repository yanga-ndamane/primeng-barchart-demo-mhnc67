import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts-with-events',
  templateUrl: './charts-with-events.component.html',
  styleUrls: ['./charts-with-events.component.css'],
})
export class ChartsWithEventsComponent implements OnInit {
  data: any;
  @Input()numberOfArrays: number = 300;
  testArr = new Array(this.numberOfArrays);

  selected = 0;

  ngOnInit() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40],
        },
      ],
    };
  }

  select(index: number) {
    this.selected = index;
  }
}

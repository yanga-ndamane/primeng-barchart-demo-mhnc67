import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts-with-lazyloadpipe',
  templateUrl: './charts-with-lazyloadpipe.component.html',
  styleUrls: ['./charts-with-lazyloadpipe.component.css'],
})
export class ChartsWithLazyloadpipeComponent implements OnInit {
  data: any;
  @Input() numberOfArrays: number = 300;
  testArr = new Array(this.numberOfArrays);

  constructor() {}

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
}

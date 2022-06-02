import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lazyLoadData',
  pure: false,
})
export class LazyLoadDataPipe implements PipeTransform {
  intervalFlag: number = 0;
  loadRows: number = 0;
  // items = [];
  /*
   * @param items : object from array
   * @param intialLoadRows : number of row we want to load initially
   * @param intervalLoadRows : number of records want to lazy load in the background
   * @param interval : interval at which next record we want to lazy load in the background
   *
   * @returns : list of objects with respect to : from and to index
   */
  transform(
    items: any[],
    initialLoadRows: number = 50,
    intervalLoadRows: number = 100,
    interval: number = 100
  ): any[] {
    // this.items = items;
    console.log(items.length);
    console.log(initialLoadRows)
    console.log(interval)
    if (this.intervalFlag == 0) {
      this.intervalFlag = 1;
      // const that = this;
      this.loadRows = initialLoadRows;
      const inter = setInterval(() => {
        console.log('Loading..');
        if (items && items.length) {
          if (items.length > this.loadRows) {
            console.log('InLR', this.loadRows + intervalLoadRows)
            this.loadRows = this.loadRows + intervalLoadRows;
          } else {
            if (inter) {
              console.log('inter');
              clearInterval(inter);
            }
          }
        }
      }, interval);
    }
    if (items && items.length) {
      console.log('counter', this.loadRows);
      return items.slice(0, this.loadRows);
    }
  }
}

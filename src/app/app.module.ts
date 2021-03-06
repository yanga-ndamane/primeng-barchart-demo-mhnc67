import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { ChartModule } from 'primeng/chart';
import { ToastModule } from 'primeng/toast';
import { Router, RouterModule, Routes } from '@angular/router';
import { ChartsWithEventsComponent } from '../charts-with-events/charts-with-events.component';
import { ChartWithoutEventsComponent } from '../chart-without-events/chart-without-events.component';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table/table';
import { LazyLoadDataPipe } from './lazy-load-data.pipe';
import { ChartsWithLazyloadpipeComponent } from '../charts-with-lazyloadpipe/charts-with-lazyloadpipe.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChartModule,
    ToastModule,
    FormsModule,
    CommonModule,
  ],
  declarations: [
    AppComponent,
    ChartWithoutEventsComponent,
    ChartsWithEventsComponent,
    LazyLoadDataPipe,
    ChartsWithLazyloadpipeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

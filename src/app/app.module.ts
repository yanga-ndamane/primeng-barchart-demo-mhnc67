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

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChartModule,
    ToastModule,
    FormsModule,
    CommonModule,
    TableModule
  ],
  declarations: [
    AppComponent,
    ChartWithoutEventsComponent,
    ChartsWithEventsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarChartComponent } from './shared/bar-chart/bar-chart.component';
import {SankeyDiagramComponent} from './shared/sankey-diagram/sankey-diagram.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    SankeyDiagramComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

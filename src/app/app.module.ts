import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SortarraypipePipe } from './sortarraypipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SortarraypipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

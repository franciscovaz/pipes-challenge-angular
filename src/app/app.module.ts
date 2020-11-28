import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LpadPipe } from './pipes/lpad.pipe';
import { RpadPipe } from './pipes/rpad.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LpadPipe,
    RpadPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

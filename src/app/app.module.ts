import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { App1Component } from './page/app1/app1.component';
import { NumberOnlyModule } from './common/derective/numbers-only.module';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [
    AppComponent,
    App1Component,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule, NumberOnlyModule,
    NzButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

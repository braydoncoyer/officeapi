import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HomepageComponent } from './components/homepage/homepage.component';
import {HttpClientModule} from '@angular/common/http';

import 'prismjs/prism';
import 'prismjs/components/prism-typescript';

import { PrismComponent } from './angular-prism/angular-prism';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PrismComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

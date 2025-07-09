import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// RouterModule and Routes are not directly used here anymore for .forRoot()

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Import the new AppRoutingModule

// const routes: Routes = [ ... ]; // This is removed

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule // Add AppRoutingModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

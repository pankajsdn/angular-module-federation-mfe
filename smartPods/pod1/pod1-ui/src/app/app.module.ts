import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
// Placeholder for the federated module, assuming it will have its own routing or entry component
// import { Pod1UiModule } from './pod1-ui/pod1-ui.module';

const routes: Routes = [
  // Example: If Pod1UiModule is the entry point for this MFE when loaded by a shell
  // or if it contains components to be routed within this app itself.
  {
    path: 'pod1-feature', // A sample internal route for this app
    loadChildren: () => import('./pod1-ui/pod1-ui.module').then(m => m.Pod1UiModule)
  },
  // You might want a default route or redirect if this app is run standalone
  // { path: '', redirectTo: 'pod1-feature', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    // If Pod1UiModule is simple and just declares a component, it might be imported directly here
    // instead of lazy loading, depending on how it's structured and exposed.
    // For now, setting up for potential lazy loading of its own federated component.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

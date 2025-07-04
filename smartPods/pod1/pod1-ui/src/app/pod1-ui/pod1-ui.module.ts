import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Pod1UiComponent } from './pod1-ui.component';

const routes: Routes = [
  {
    path: '',
    component: Pod1UiComponent
  }
];

@NgModule({
  declarations: [
    Pod1UiComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  // exports: [ Pod1UiComponent ] // Not needed if only routed
})
export class Pod1UiModule { }

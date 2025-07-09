import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', // Default path for standalone execution
    redirectTo: 'pod1', // Or any representative path name you prefer
    pathMatch: 'full'
  },
  {
    path: 'pod1', // The path to access the Pod1UiModule content
    loadChildren: () => import('./pod1-ui/pod1-ui.module').then(m => m.Pod1UiModule)
  }
  // Add other standalone-specific routes here if needed in the future
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

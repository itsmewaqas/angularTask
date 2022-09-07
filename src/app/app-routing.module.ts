import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreatetaskComponent } from './createtask/createtask.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundcomponentComponent } from './pagenotfoundcomponent/pagenotfoundcomponent.component';
import { TaskdetailComponent } from './taskdetail/taskdetail.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'createtask', pathMatch: 'full' },
      { path: 'createtask', component: CreatetaskComponent },
      { path: 'taskdetail', component: TaskdetailComponent },
    ]
  },
  {
    path: '**',
    component: PagenotfoundcomponentComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatetaskComponent } from './createtask/createtask.component';
import { SidebarComponent } from './sharedcomponent/sidebar/sidebar.component';
import { FooterComponent } from './sharedcomponent/footer/footer.component';
import { HeaderComponent } from './sharedcomponent/header/header.component';
import { PagenotfoundcomponentComponent } from './pagenotfoundcomponent/pagenotfoundcomponent.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskdetailComponent } from './taskdetail/taskdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatetaskComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    PagenotfoundcomponentComponent,
    DashboardComponent,
    TaskdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

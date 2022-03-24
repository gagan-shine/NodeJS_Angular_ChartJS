import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ChartsModule } from 'ng2-charts';




import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { SettingsComponent } from './components/settings/settings.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardComponent, data: { "title": "Dashboard" } },
      { path: 'settings', component: SettingsComponent, data: { "title": "Settings" } }
    ]),
    ChartsModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    Title,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
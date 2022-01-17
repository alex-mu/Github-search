import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { RepositoryComponent } from './repository/repository.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TruncatePipe } from './truncate.pipe';






@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepositoryComponent,
    OrganisationComponent,
    DashboardComponent,
    TruncatePipe,
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

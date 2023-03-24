import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WorkexperiencecardComponent } from './workexperiencecard/workexperiencecard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { ExperienceDetailsComponent } from './experience-details/experience-details.component';
import { HomeComponent } from './home/home.component';
//import { WorkService } from 'src/services/work.service';



@NgModule({
  declarations: [
    AppComponent,
    WorkexperiencecardComponent,
    ExperienceDetailsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
  ],
 // providers: [WorkService],
  bootstrap: [AppComponent]
})
export class AppModule { }

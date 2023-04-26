import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ExperienceDetailsComponent } from './experience-details/experience-details.component';
import { HomeComponent } from './home/home.component';
import { WorkexperiencecardComponent } from './workexperiencecard/workexperiencecard.component';

const routes: Routes = [

  { path: 'work/:workname', component: ExperienceDetailsComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

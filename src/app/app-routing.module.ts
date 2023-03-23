import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ExperienceDetailsComponent } from './experience-details/experience-details.component';
import { WorkexperiencecardComponent } from './workexperiencecard/workexperiencecard.component';

const routes: Routes = [

  { path: 'work', component: ExperienceDetailsComponent },
  { path: '', component: AppComponent },
  { path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { BodyComponent } from './body/body.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
  { path: 'about', component: AboutMeComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: '', component: BodyComponent },
  { path: '**', component: BodyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

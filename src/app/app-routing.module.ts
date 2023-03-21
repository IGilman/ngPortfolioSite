import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'about', component: AboutMeComponent },
  // { path: 'experience', component: ExperienceComponent },
  // { path: '', component: BodyComponent },
  // { path: '**', component: BodyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

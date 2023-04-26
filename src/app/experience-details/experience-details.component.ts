import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.scss']
})
export class ExperienceDetailsComponent implements OnInit{

  constructor(private route: ActivatedRoute){}

  job: any

  ngOnInit(){
    console.log("test")
    //this.job = this.route.snapshot.paramMap.get('workname')
    this.route.paramMap.subscribe((params: ParamMap)=>{
      this.job = params.get('workname')
    })
    console.log(this.job)
  }

  //how do we send data via a router link to another component? 
  //https://angular.io/start/start-routing

  //@Input() jobDetails: any;
  // @Input() title = "blah test"
  // @Input() subtitle = "subtitle test"
  // @Input() image = "https://material.angular.io/assets/img/examples/shiba2.jpg"
  // @Input() description = "description test"
  // @Input() projectUrl = "https://www.freecodecamp.org/"
  // @Input() linkToProjectText = "Link to the Project"

}

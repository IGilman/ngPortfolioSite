import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.scss']
})
export class ExperienceDetailsComponent {

  @Input() title = "blah test"
  @Input() subtitle = "subtitle test"
  @Input() image = "https://material.angular.io/assets/img/examples/shiba2.jpg"
  @Input() description = "description test"
  @Input() projectUrl = "https://www.freecodecamp.org/"
  @Input() linkToProjectText = "Link to the Project"

}

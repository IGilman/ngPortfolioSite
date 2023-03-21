import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-workexperiencecard',
  templateUrl: './workexperiencecard.component.html',
  styleUrls: ['./workexperiencecard.component.scss']
})
export class WorkexperiencecardComponent {

  @Input() title = "title test"
  @Input() subtitle = "subtitle test"
  @Input() image = "https://material.angular.io/assets/img/examples/shiba2.jpg"
  @Input() description = "description test"

}

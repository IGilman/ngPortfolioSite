import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-workexperiencecard',
  templateUrl: './workexperiencecard.component.html',
  styleUrls: ['./workexperiencecard.component.scss']
})
export class WorkexperiencecardComponent implements OnInit {

  @Input() componentJob: any;
  title: any;
  subtitle: any;
  image: any;
  quickDescription: any;


  ngOnInit() {
    console.log(this.componentJob)
    this.title = this.componentJob.title;
    this.subtitle = this.componentJob.subtitle;
    this.image = this.componentJob.image
    this.quickDescription = this.componentJob.quickDescription
  }

}

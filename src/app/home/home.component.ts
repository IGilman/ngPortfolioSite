import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkinfoService } from '../Services/workinfo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {


  public constructor(private workinfoService: WorkinfoService) { }

  jobs: any;

  public ngOnInit(): void {
    // this.workinfoService.getWorkDetails().subscribe((res: any) =>{
    //   this.test = res;
    //   console.log(this.test)
    // })

    this.jobs = this.workinfoService.getWorkDetails()
  }

}

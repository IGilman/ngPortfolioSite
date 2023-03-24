import { Component, OnInit } from '@angular/core';
import { WorkService } from 'src/services/work.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{


  public constructor(private workService: WorkService){}

  test: any;

  public ngOnInit(): void {
    this.workService.getWorkDetails().subscribe((res) =>{
      this.test = res;
      console.log(this.test)
    })
  }

}

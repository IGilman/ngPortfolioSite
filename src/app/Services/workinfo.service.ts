//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WorkinfoService {

  //constructor(private http: HttpClient) { }
  constructor() { }

  workDetails: any = [
    {
      "title": "blah test",
      "subtitle": "subtitle test",
      "image" : "https://material.angular.io/assets/img/examples/shiba2.jpg",
      "description" : "description test",
      "projectUrl": "https://www.freecodecamp.org/",
      "linkToProjectText": "Link to the Project"
  },
  {
    "title": "blah test",
    "subtitle": "subtitle test",
    "image" : "https://material.angular.io/assets/img/examples/shiba2.jpg",
    "description" : "description test",
    "projectUrl": "https://www.freecodecamp.org/",
    "linkToProjectText": "Link to the Project"
}
  
]

  //./src/assets/workdetials.json'

  getWorkDetails(): any{

    return this.workDetails;
    //return this.http.get(url);
  }
}

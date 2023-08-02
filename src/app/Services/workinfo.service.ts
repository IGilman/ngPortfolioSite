//import { HttpClient } from '@angular/common/http';
import { getLocaleEraNames } from '@angular/common';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WorkinfoService {

  //constructor(private http: HttpClient) { }
  constructor() { }

  jobs: any = [
    {
      "title": "Amrock Connect Portal",
      "jobname": "jobone",
      "subtitle": "Portal for users to complete to-dos and upload docs in the Title process",
      "image": "https://material.angular.io/assets/img/examples/shiba2.jpg",
      "quickDescription": "Self-service customer portal for users to complete their Title and Closing process",
      "description": "",
      "projectUrl": "https://www.freecodecamp.org/",
      "linkToProjectText": "Link to the project 1"
    },
    {
      "title": "Farebox",
      "jobname": "jobtwo",
      "subtitle": "blahhhhhhhhhhhhhhhhhhhhhhh test",
      "image": "https://material.angular.io/assets/img/examples/shiba2.jpg",
      "quickDescription": "Booking and scheduling software for bus fleets ",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus at urna condimentum mattis pellentesque id. Ac turpis egestas integer eget aliquet. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Vitae ultricies leo integer malesuada nunc vel. Morbi non arcu risus quis varius quam quisque. Risus at ultrices mi tempus imperdiet nulla. Sem viverra aliquet eget sit amet tellus cras adipiscing. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Venenatis cras sed felis eget velit aliquet sagittis. ",
      "projectUrl": "https://www.freecodecamp.org/",
      "linkToProjectText": "Link to the Project 2"
    },
    {
      "title": "Job three",
      "jobname": "jobthree",
      "subtitle": "j;dljjfd test",
      "image": "https://material.angular.io/assets/img/examples/shiba2.jpg",
      "quickDescription": "quick description of job 3",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus at urna condimentum mattis pellentesque id. Ac turpis egestas integer eget aliquet. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Vitae ultricies leo integer malesuada nunc vel. Morbi non arcu risus quis varius quam quisque. Risus at ultrices mi tempus imperdiet nulla. Sem viverra aliquet eget sit amet tellus cras adipiscing. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Venenatis cras sed felis eget velit aliquet sagittis. ",
      "projectUrl": "https://www.freecodecamp.org/",
      "linkToProjectText": "Link to the Project 3"
    },
  ]

  //./src/assets/workdetials.json'

  getJobs(): any {

    return this.jobs;
    //return this.http.get(url);
  }

  getJobDetail(jobname: string){
    console.log("input")
    console.log(jobname)
    const job = this.jobs.find((x: { jobname: string; }) => x.jobname === jobname)
    console.log("return")
    console.log(job)
    return job
  }
}

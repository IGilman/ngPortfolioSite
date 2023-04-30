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
      "title": "Job One",
      "jobname": "jobone",
      "subtitle": "small description of job test",
      "image": "https://material.angular.io/assets/img/examples/shiba2.jpg",
      "quickDescription": "quick description of job 1",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "projectUrl": "https://www.freecodecamp.org/",
      "linkToProjectText": "Link to the project 1"
    },
    {
      "title": "Job two",
      "jobname": "jobtwo",
      "subtitle": "blahhhhhhhhhhhhhhhhhhhhhhh test",
      "image": "https://material.angular.io/assets/img/examples/shiba2.jpg",
      "quickDescription": "quick description of job 2",
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

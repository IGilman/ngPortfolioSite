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
      "title": "Amrock - Customer Portal",
      "jobname": "jobone",
      "subtitle": "Portal for agents and customers to complete their Title and Closing tasks",
      "image": "https://material.angular.io/assets/img/examples/shiba2.jpg",
      "quickDescription": "Portal for agents and customers to complete their Title and Closing tasks",
      "description": {
        "descripparone": "Amrock’s portal is a unique attempt to increase efficiency in the Title and Closing processes by providing users a self-service tool to complete tasks that traditionally require email and phone calls. My focus has been on the entire technology stack, with a passion for making our UI/UX more aligned to our users needs.",
        "descrippartwo": "I bring expertise to our front-end when most engineers focus on backend services. I work closely with our Product Owner to make sure our site is designed with a mobile-first approach and has a seamless responsive design for any form factor. I maintain a custom Sass and Angular Material library that is implemented globally across our frontend Nx Monorepo. I also maintain our NgXs (similar to NgRx) store pattern, while pushing a reactive programming approach across the entire Angular application.",
        "descripparthree": "Also, I regularly work in our .NET backend. I help maintain and add functionality to one of our seven services that powers our front-end. Our externally exposed services are built with a controller-service-repository pattern to separate concerns and provide clear responsibility at each layer, while our non-exposed services communicate via a Command/Event architecture where we use NServiceBus and RabbitMQ to facilitate messaging."
      },
      "stack": {
        "frontend": "Angular",
        "backend": "C#/.NET 6",
        "database": "MS SQL",
      },
      "projectUrl": "https://www.amrock.com/login",
      "linkToProjectText": "Amrock - Real Estate Agents and Customer Portal"
    },
    {
      "title": "Farebox",
      "jobname": "jobtwo",
      "subtitle": "Booking and scheduling software for bus fleets",
      "image": "https://material.angular.io/assets/img/examples/shiba2.jpg",
      "quickDescription": "Booking and scheduling software for bus fleets",
      "description": {
        "descripparone" : "",
        "descrippartwo": "",
        "descripparthree": "",
      },
      "stack": {
        "frontend": "Vue.js",
        "backend": "Node.js with Express",
        "database": "Mongo DB",
      },
      "projectUrl": "https://www.freecodecamp.org/",
      "linkToProjectText": "Link to the Project 2"
    }
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

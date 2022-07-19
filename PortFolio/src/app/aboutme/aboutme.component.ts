import { Component, OnInit } from '@angular/core';


import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit():any {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
        }
        window.scrollTo(0, 0)
    });
   
  }

}

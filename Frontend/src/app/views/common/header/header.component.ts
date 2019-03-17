import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var custom_gallery: any;
declare var custom_flex: any;
declare var custom_navigation: any;
declare var custom_owl: any;
declare var custom_date_picker: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {
    custom_navigation();
    custom_owl();
    custom_flex();
    custom_date_picker();
    custom_gallery();
  }

  headerColor(){
    if (this.router.url == '/') {
      return "";
    } else {
      return "header-bottoms";
    }
  }

  isHome() {
    if (this.router.url == '/') {
      return true;
    } else {
      return false;
    }
  }
}

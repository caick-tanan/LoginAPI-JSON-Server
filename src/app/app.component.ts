import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{

  title = 'LoginAPI';
  isMenuRequired=false;
  isadmin=false;

  constructor(private router: Router){
    let role=sessionStorage.getItem('role');
    if(role=='admin'){
      this.isadmin=true;
    }
  }

  ngDoCheck(): void {
    let currentUrl = this.router.url;
    let role=sessionStorage.getItem('role');
    if (currentUrl == '/login' || currentUrl == '/register') {
      this.isMenuRequired = false
    } else {
      this.isMenuRequired = true
    }
    
    if (role == 'admin') {
      this.isadmin = true;
    }else{
      this.isadmin = false;
    }
  }
}

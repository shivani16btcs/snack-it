import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor( private router: Router ) { }
  isUserLogin = false;

  ngOnInit(): void {
    let user:any=  window.localStorage.getItem('user');
    if(user || user?.email ){
      this.isUserLogin=true;
    }
  }


  logout(){
    window.localStorage.clear();
    this.router.navigate(['/login']);
  }

}

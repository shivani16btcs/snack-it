import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  activeButton='';
  constructor( private router: Router ) { }


  filterButtons = [
    { text: 'find my snack detail', isClicked: false },
    // { text: 'suggest my snack', isClicked: false },
  ]


  setActive(button: any): void {
    for(let but of this.filterButtons) {
      but.isClicked = false;
    }
    button.isClicked = true;
    this.activeButton=button.text
  }

  ngOnInit(): void {
    let user:any=  window.localStorage.getItem('user');
    // if(!user || !user?.email ){
    //   this.logout();
    // }
  }


  logout(){
    window.localStorage.clear();
    this.router.navigate(['/login']);
  }
}

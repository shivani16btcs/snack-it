import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggest-my-snack',
  templateUrl: './suggest-my-snack.component.html',
  styleUrls: ['./suggest-my-snack.component.scss']
})
export class SuggestMySnackComponent implements OnInit {
  constructor(  ) { }
  isUserLogin = false;

  ngOnInit(): void {
    let user:any=  window.localStorage.getItem('user');
    if(user || user?.email ){
      this.isUserLogin=true;
    }
  }
}

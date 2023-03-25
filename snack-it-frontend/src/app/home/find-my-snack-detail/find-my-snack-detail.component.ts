import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-find-my-snack-detail',
  templateUrl: './find-my-snack-detail.component.html',
  styleUrls: ['./find-my-snack-detail.component.scss']
})



export class FindMySnackDetailComponent implements OnInit {

  imagePreview: string;
  isSnackDataFound:boolean= false

  constructor(
 
  ) { }

  ngOnInit(): void {

  }

  onSavePost(event:any){
    this.imagePreview =  event.imagePreview;
    this.isSnackDataFound = true;
  }
   
}


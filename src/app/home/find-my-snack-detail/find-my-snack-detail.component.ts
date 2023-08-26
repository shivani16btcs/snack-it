import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as mobilenet from '@tensorflow-models/mobilenet';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-find-my-snack-detail',
  templateUrl: './find-my-snack-detail.component.html',
  styleUrls: ['./find-my-snack-detail.component.scss']
})



export class FindMySnackDetailComponent implements OnInit {

  @ViewChild('imageSRC')
  imageSRCVariable: ElementRef;
  predictions: any;
  model: any
  imagePreview: string;
  isSnackDataFound: boolean = false
  foodNutrient:any;
  isLoading=false;
  constructor(
    private apiService: ApiService
  ) { }

  async ngOnInit() {
    this.model = await mobilenet.load();

  }

  onSavePost(event: any) {
    this.isLoading=true;
    this.imagePreview = event.imagePreview;
    this.isSnackDataFound = true;
    setTimeout(async () => {
      this.predictions = await this.model.classify(this.imageSRCVariable.nativeElement);
      let foodItem = this.predictions[0].className;
      this.apiService.getFoodNutrition(foodItem).subscribe((data:any) => {
        const foodData= JSON.parse(JSON.stringify(data));
        if(foodData&&foodData?.foods&& foodData?.foods?.length && foodData?.foods[0]?.foodNutrients){
          this.foodNutrient=foodData.foods[0].foodNutrients
        }
        this.isLoading=false;
      }, (error) => {
        console.log('error', error)
        this.isLoading=false;
      })
    }, 0);

  }

}


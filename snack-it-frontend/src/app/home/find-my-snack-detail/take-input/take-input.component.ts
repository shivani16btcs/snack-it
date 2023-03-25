import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-take-input',
  templateUrl: './take-input.component.html',
  styleUrls: ['./take-input.component.scss']
})
export class TakeInputComponent {
  @Output() newItemEvent = new EventEmitter<any>();
  @ViewChild('filePicker')
  filePickerVariable: ElementRef;
  form: FormGroup;
  isLoading=false;
  imagePreview: string;
  

  constructor(
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      image: new FormControl(null, {
        validators: [Validators.required],
      })
    });
  }
  onImagePicked(event:any) {
      const target = event.target as HTMLInputElement;
      const file: File = (target.files as FileList)[0];
      this.form.patchValue({ image: file });
      this.form.get("image")?.updateValueAndValidity();
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);   
  }


  onSavePost() {
    if (this.form.invalid) {
      return;
    }
    let snackData ={
      form:this.form.value,
      imagePreview: this.imagePreview 
    }
    this.newItemEvent.emit(snackData);
  
  }
  
  oncancel(){
    this.filePickerVariable.nativeElement.value = "";
    this.form.reset();
  }


}

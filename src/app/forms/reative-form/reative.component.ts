
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reative-form',
  templateUrl: 'reative.component.html'
})

export class ReativeFormComponent {

  formData: FormGroup;

  constructor(private formBuilder: FormBuilder, ) {
    this.formData = formBuilder.group({
      brand: ['', [Validators.required,Validators.minLength(2)]],
      model: ['',[Validators.required]],
      price: ['',[Validators.required,Validators.pattern("[0-9]{2,6}")]],
      inStock: []
    })
  }

  sendProductNewData() { 
    console.log(this.formData)
  }
}
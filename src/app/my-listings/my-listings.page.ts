import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.page.html',
  styleUrls: ['./my-listings.page.scss'],
})
export class MyListingsPage implements OnInit {
  isEditing = false;
  postForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      title: new FormControl('',Validators.minLength(3)),
      description: new FormControl('', Validators.minLength(3)),
      imageUrl: new FormControl('')
    });
  }

  back() {
    this.isEditing = false;
  }

  addPost() {
    this.isEditing = true;
  }

  uploadPostImage() {

  }

  uploadImage($event) {
    
  }

  submit(form: FormGroup) {

  }

}

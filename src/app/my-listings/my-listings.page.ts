import { UserPost } from './../models/UserPost';
import { UserListingsService } from './../services/user-listings.service';
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
    private formBuilder: FormBuilder,
    private userListingService: UserListingsService
  ) { }

  ngOnInit() {
    this.postForm = this.formBuilder.group({

      title: new FormControl('', Validators.compose([
          Validators.minLength(10),
          Validators.required
      ])),
      description: new FormControl('', Validators.compose([
        Validators.minLength(10),
        Validators.required
      ])),
      imageUrl: new FormControl(''),
      price: new FormControl('', Validators.compose([
        Validators.minLength(10),
        Validators.required
      ]))
    });
  }

  back() {
    this.isEditing = false;
    this.resetForm(this.postForm);
    console.log('Back to the myListing page');
  }

  // add button functionality
  addPost() {
    this.isEditing = true;
    console.log('The user is adding a new post!');
  }

  submit(form: UserPost) {
    // this.isEditing = false;
    console.log(form);
    this.userListingService.addItem(form);
    this.resetForm(this.postForm);
    // console.log(this.isEditing);
  }

   // reset form values after updating profile
   private resetForm(form: FormGroup) {
    form.reset();

    Object.keys(form.controls).forEach((key) => {
      form.get(key).setErrors(null);
    })
  }

}

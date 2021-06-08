import { UserListingsService } from './../services/user-listings.service';
import { UserPost } from './../models/UserPost';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';

@Component({
  selector: 'app-my-listings-add',
  templateUrl: './my-listings-add.page.html',
  styleUrls: ['./my-listings-add.page.scss'],
})
export class MyListingsAddPage implements OnInit {
  // @Input() public userPosts: UserPost[];
  userPosts$: Observable<firebase.firestore.DocumentData>;
  posts;

  constructor(
    private userListingsService: UserListingsService
  ) { 
    this.userPosts$ = this.userListingsService.getOneUserPosts();

    // this.userListingsService.getOneUserPosts()
    //   .subscribe(doc => {
    //     console.log(doc.posts[0].imageUrl);
    //   });
  }

  ngOnInit() {
  }


}

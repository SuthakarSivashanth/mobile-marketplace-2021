import { UserListingsService } from './../services/user-listings.service';
import { UserPost } from './../models/UserPost';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-listings-add',
  templateUrl: './my-listings-add.page.html',
  styleUrls: ['./my-listings-add.page.scss'],
})
export class MyListingsAddPage implements OnInit {
  // @Input() public userPosts: UserPost[];
  userPosts$: Observable<UserPost[]>;

  constructor(
    private userListingsService: UserListingsService
  ) { 
    this.userPosts$ = this.userListingsService.getOneUserPosts();
  }

  ngOnInit() {
  }


}

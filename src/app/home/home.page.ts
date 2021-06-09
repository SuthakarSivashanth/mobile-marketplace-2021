import { UserService } from './../services/user.service';
import { UserListingsService } from './../services/user-listings.service';

import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError, filter, switchMap, takeUntil, map } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { UserPost } from '../models/UserPost';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  searchQuery: string = '';
  items: Array<UserPost>;
  usersPosts$;
  users$;
  myUsers$;
  usersIDs: Array<any>;

  constructor(
    private userListingsService: UserListingsService,
    private userService: UserService
  ) { 
    this.usersPosts$ = this.userListingsService.getAllUsersPosts();
    this.users$ = this.userListingsService.getAllUsersWhoHasPosts();
    this.myUsers$ = this.userService.getMyUsers();

    this.userListingsService.getAllUsersWhoHasPosts()
      .subscribe(id => {
        this.usersIDs = id;
        console.log(this.usersIDs);
      });
  }

  ngOnInit() {
  }

  getItems($event) {

  }

}

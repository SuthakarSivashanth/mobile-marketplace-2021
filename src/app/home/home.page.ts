import { UserService } from './../services/user.service';
import { UserListingsService } from './../services/user-listings.service';

import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError, filter, switchMap, takeUntil, map } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { UserPost } from '../models/UserPost';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  searchQuery: string = '';
  items: any[];
  itemsBackup: any[];
  usersPosts$;
  isSearching = false;
  allUsers;

  constructor(
    private userListingsService: UserListingsService,
    private userService: UserService
  ) { 
    this.usersPosts$ = this.userListingsService.getAllUsersPosts();
    
  }

  async ngOnInit() {
    this.allUsers = this.userListingsService.getAllUsersPosts()
      .subscribe(data => {
        this.allUsers = data.map(users => {
          return users;
        })
      });
    
    this.items = await this.initializeItems();
  }

  async initializeItems(): Promise<any> {
    const items = await this.userListingsService.getAllUsersPosts().pipe(first()).toPromise();
    this.itemsBackup = items;
    return items;
  }

  async getItems($event) {
    // Get the search bar value
    const searchValue = $event.target.value;
    this.isSearching = true;
    console.log(this.isSearching);
    // console.log(this.data[2].posts[0].title);
    // console.log(this.allUsers);

    this.items = this.itemsBackup;
    
    if (!searchValue) {
      return;
    }

    this.items = this.items.filter(data => {
      switchMap(data.posts)
      console.log(data.posts);
      return data.posts.title;
    })
  }


}

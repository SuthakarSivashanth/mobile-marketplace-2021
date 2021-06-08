import { UserService } from './../services/user.service';
import { UserListingsService } from './../services/user-listings.service';

import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError, filter, switchMap, takeUntil, map } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  searchQuery: string = '';
  // usersPosts$: Observable<firebase.firestore.DocumentData[]>;
  items: Array<any>;
  items$;
  data;

  constructor(
    private userListingsService: UserListingsService,
    private userService: UserService
  ) { 
  
    // this.userService.getMyUsers().subscribe(res => {
    //   console.log(res);
    // })
  }

  ngOnInit() {
    
  }

  getItems($event) {

  }

  test() {
    // console.log(this.items);
    console.log('touched!');
    // console.log(this.items$);
  }


  
}

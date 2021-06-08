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
  data: Observable<{
    data: firebase.firestore.DocumentData;
    id: string;
}[]>;

  constructor(
    private userListingsService: UserListingsService
  ) { 
    // this.items$ = this.userListingsService.getAllUsersIDs();
    this.userListingsService.getAllUsersIDs()
      .subscribe(res => {
        console.log(res);
      });
    // this.data = this.userListingsService.getAllUsersIDs();
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

import { Observable } from 'rxjs';
import { UserPost } from './../models/UserPost';
import { AngularFirestore, AngularFirestoreCollection, DocumentData } from '@angular/fire/firestore';
import { UserService } from './user.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserListingsService {
  private usersFilesDB: AngularFireStorage;
  private usersPostsDB: AngularFirestoreCollection;  // References all the users
  // private usersPostsDB$: Observable<DocumentData[]>;
  private uid;

  constructor(
    private db: AngularFirestore,
    private afs: AngularFireStorage,
    private  userService: UserService
  ) { 
    this.usersFilesDB = afs;
    this.uid = userService.getUserID();
    this.usersPostsDB = this.db.collection('usersPosts');
    // this.usersPostsDB$ = this.usersPostsDB.valueChanges();
  }

  addItem(post: UserPost) {
    // Add an item
    this.usersPostsDB.doc(`${this.uid}`)
      .collection<UserPost>('myPosts').doc(`${Date.now()}`).set(post)
      .then(() => {
        console.log('A new post is added to the database');
      })
      .catch((err) => {
        console.log('An error is occured: ', err);
      });
  }

  deleteItem() {
    // Delete an item
  }

  getOneUserPosts(): Observable<UserPost[]> {
    return this.usersPostsDB.doc(`${this.uid}`)
    .collection<UserPost>('myPosts').valueChanges();
  }

  getAllUsersIDs() {
    return this.usersPostsDB.valueChanges({idField: 'id'});
  }
}

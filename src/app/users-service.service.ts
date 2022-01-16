import { Injectable } from '@angular/core';
import { UsersComponent } from './users/users.component';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  getusers: any;

  constructor() { }
}

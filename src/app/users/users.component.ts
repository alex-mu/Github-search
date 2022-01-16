import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users!: UsersComponent[];
  constructor(userService:UsersServiceService) {
    this.users = userService.getusers()
   }

  ngOnInit(): void {
  }

}

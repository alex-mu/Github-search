import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoalServiceService {

  getGoals(){
    return Goals
  }
  constructor() { }
}

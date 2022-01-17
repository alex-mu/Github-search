import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../github-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title = 'Github Search';
  values = '';
  isLoading:boolean = false;
  noInput:boolean = true;
  getFetchSuccess:boolean = false;
  NoUser:boolean = false;
  repoArrays: any[] | undefined;

  constructor(private _githubServiceService: GithubServiceService) { }

  ngOnInit() {
  }


  onKey(event: any) { // without type info
    this.values = event.target.value;
    this.getFetchSuccess = false;
    this.NoUser = false;
    if (this.values == '') {
  			this.noInput = true;
  	} else {
  			this.noInput = false;
  	} 
  }

  search(userName: string): void {
  	this.getFetchSuccess = false;
  	this.NoUser = false;
    userName = this.values.trim();
    if (!userName) { return; }
    this._githubServiceService.getRepos(userName) 
    this.isLoading = true;
    this.fetchUser(userName);
  }

  fetchUser(UserName: string): void {
    this._githubServiceService.getRepos(UserName).subscribe( data => {
		this.repoArrays = data;
		 if (this.repoArrays == undefined || this.repoArrays && this.repoArrays.length == 0) {
			 this.NoUser = true;
		 } else {
	     this.NoUser = false;
	   };
	});

    setTimeout(() =>{
       this.isLoading = false;
       this.getFetchSuccess = true;
    })
  }
 

}

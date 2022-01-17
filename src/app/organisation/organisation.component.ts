import { Component, OnInit } from '@angular/core';
import { ValueFromArray } from 'rxjs';

import { GithubServiceService } from '../github-service.service';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.css']
})
export class OrganisationComponent implements OnInit {
  title = 'Github Search';
  values = '';
  isLoading:boolean = false;
  noInput:boolean = true;
  getFetchSuccess:boolean = false;
  NoOrgs:boolean = false;
  repoArrays!: any[];

  constructor(private _githubServiceService: GithubServiceService) { }

  ngOnInit() {
  }


  onKey(event: any) { // without type info
    this.values = event.target.value;
    this.getFetchSuccess = false;
    this.NoOrgs = false;
    if (this.values == '') {
  			this.noInput = true;
  	} else {
  			this.noInput = false;
  	} 
  }

  search(userName: string): void {
  	this.getFetchSuccess = false;
    this.NoOrgs = false;
    userName = this.values.trim();
    if (!userName) { return; }
    this._githubServiceService.getOrgaRepos(userName) 
    this.isLoading = true;
    this.fetchOrgs(userName);
  }

  fetchOrgs(UserName: string): void {
    this._githubServiceService.getOrgaRepos(UserName).subscribe( (data: any[]) => {
		this.repoArrays = data;
    if (this.repoArrays == undefined || this.repoArrays && this.repoArrays.length == 0) {
       this.NoOrgs = true;
     } else {
       this.NoOrgs = false;
     };
	});

    setTimeout(() =>{
       this.isLoading = false;
       this.getFetchSuccess = true;
    })
  }
 

}

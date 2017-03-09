import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  username: string;
  result: any;
  repos: any[] = [];

  constructor(private _appService: AppService) {
  	this._appService.getUsers().subscribe((data) => this.result = data);
  	this._appService.getRepos().subscribe((data) => this.repos = data);
  }

  searchUser(){
  	this._appService.setUsername(this.username);
  	this._appService.getUsers().subscribe((data) => this.result = data);
  	this._appService.getRepos().subscribe((data) => this.repos = data);
  }

  




}

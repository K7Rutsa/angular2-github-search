import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})

export class HomeComponentComponent implements OnInit{
  username: string;
  result: any;
  repos: any[] = [];
  error: string;

  constructor(private _appService: AppService) { }

  searchUser(){
  	this._appService.setUsername(this.username);
  	        this._appService.getUsers().subscribe((data) => this.result = data, (error) => this.error = error)
  	this._appService.getRepos().subscribe((data) => this.repos = data, (error) => this.error = error)

  }

  
  ngOnInit(){
        this._appService.getUsers().subscribe((data) => this.result = data, (error) => this.error = error);
        this._appService.getRepos().subscribe((data) => this.repos = data, (error) => this.error = error);
  }



}

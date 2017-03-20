import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppService {
    username: string = 'k7rutsa';

    constructor(private _http: Http) {    }

  	setUsername(user: string){
  	this.username = user;
    }

    getUsers(){
    	return this._http.get(`https://api.github.com/users/${this.username}?client_id='92fd2530d25fef115d87'&client_secret='b1b05a04fe5b9b990de638e2b19244c24deb0f91'`)
    	.map(res => res.json())
        .catch(this.handleError)
    }

    getRepos(){
    	return this._http.get(`https://api.github.com/users/${this.username}/repos?client_id='92fd2530d25fef115d87'&client_secret='b1b05a04fe5b9b990de638e2b19244c24deb0f91'`)
    	.map(res => res.json())
        .catch(this.handleError)
    }

    private handleError(error){
        return Observable.throw(error.json().error)
    }

}

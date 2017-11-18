import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IUser } from '../interfaces/user';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

    constructor(
        private http: Http) {

    }

    public findByName(name: string): Observable<IUser[]> {
        return this.http
                .get(`/${environment.endpoint}/user/by-name/${name}`)
                .map(res => res.json())
                .catch(err => Observable.throw(err.message));
    }

}

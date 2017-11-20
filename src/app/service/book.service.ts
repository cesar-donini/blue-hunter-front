import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { IBook } from '../interfaces/book';

@Injectable()
export class BookService {

    constructor(
        private http: Http) {

    }

    public findByTitle(title: string): Observable<IBook[]> {
        return this.http
                .get(`/${environment.endpoint}/book/by-title/${title}`)
                .map(res => res.json())
                .catch(err => Observable.throw(err.message));
    }

    public findByAuthor(author: string): Observable<IBook[]> {
        return this.http
                .get(`/${environment.endpoint}/book/by-author/${author}`)
                .map(res => res.json())
                .catch(err => Observable.throw(err.message));
    }

    public find(): Observable<IBook[]> {
        return this.http
                .get(`/${environment.endpoint}/book`)
                .map(res => res.json())
                .catch(err => Observable.throw(err.message));
    }
}

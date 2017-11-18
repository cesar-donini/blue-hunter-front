import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class MatDataSource extends DataSource<any> {

  constructor(private _userDatabase: any[]) {
    super();
  }

  connect(): Observable<any> {
    return new BehaviorSubject<any>(this._userDatabase);
  }

  disconnect() {}
}

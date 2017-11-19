import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import 'rxjs/add/operator/debounceTime';
import { MatDataSource } from '../data-source/matdatasource.component';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.less'],
    providers: [UserService]
})
export class UserComponent implements OnInit {

    private nameSearch: string;
    private dataSource: MatDataSource | null;
    private displayedColumns = ['fullName', 'gender', 'age', 'email', 'phone', 'username'];

    constructor(
        private userService: UserService) {
    }

    ngOnInit() {
        this.find();
    }

    private search(event: any): void {
        if (this.nameSearch) {
            this.findByName(this.nameSearch);
            return;
        }
        this.find();
    }

    private findByName(name: string) {
        this.userService.findByName(name)
            .debounceTime(300)
            .subscribe(
                (users) => this.dataSource = new MatDataSource(users),
                console.log
            );
    }

    private find() {
        this.userService.find()
            .subscribe(
                (users) => this.dataSource = new MatDataSource(users),
                console.log
            );
    }

}

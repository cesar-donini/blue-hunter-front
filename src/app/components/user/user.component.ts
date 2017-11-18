import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { MatDataSource } from '../data-table/user.datatable';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.less'],
    providers: [UserService]
})
export class UserComponent implements OnInit {

    dataSource: MatDataSource | null;
    displayedColumns = ['name', 'gender', 'mail', 'birthDate'];

    constructor(
        private userService: UserService) {
    }

    ngOnInit() {
        this.userService.findByName('cesar')
            .subscribe(
                (users) => {
                    console.log(users);
                    this.dataSource = new MatDataSource(users);
                },
                console.log
            );
    }

}

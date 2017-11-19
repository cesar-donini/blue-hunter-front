import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';
import { IBook } from '../../interfaces/book';

@Component({
    selector: 'book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.less'],
    providers: [BookService]
})
export class BookComponent implements OnInit {

    private books: IBook[];

    constructor(
        private bookService: BookService) {
    }

    ngOnInit() {
        this.find();
    }

    private search(event: any): void {

    }

    private find() {
        this.bookService.find()
            .subscribe(
                (books) => this.books = books,
                console.log
            );
    }

}

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

    private searchBy = 'titulo';

    private searchText: string;

    constructor(
        private bookService: BookService) {
    }

    ngOnInit() {
        this.find();
    }

    private search(event: any): void {
        if (!this.searchText) {
            this.find();
            return;
        }

        if (this.searchBy === 'titulo') {
            this.findByTitle(this.searchText);
            return;
        }

        this.findByAuthor(this.searchText);
    }

    private findByAuthor(author: string) {
        this.bookService.findByAuthor(author)
            .subscribe(
                (books) => this.books = books,
                console.log
            );
    }

    private findByTitle(title: string) {
        this.bookService.findByTitle(title)
            .subscribe(
                (books) => this.books = books,
                console.log
            );
    }


    private find() {
        this.bookService.find()
            .subscribe(
                (books) => this.books = books,
                console.log
            );
    }

}

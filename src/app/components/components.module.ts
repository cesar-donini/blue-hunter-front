import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { MaterialModule } from '../material/material.module';
import { BookComponent } from './book/book.component';

@NgModule({
    declarations: [
        UserComponent,
        BookComponent
    ],
    providers: [],
    imports: [
        MaterialModule
    ],
    exports: [
        UserComponent,
        BookComponent
    ]
})
export class ComponentsModule {

}

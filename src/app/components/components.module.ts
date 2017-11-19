import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { MaterialModule } from '../material/material.module';
import { BookComponent } from './book/book.component';
import { PipeModule } from '../pipe/pipe.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        UserComponent,
        BookComponent
    ],
    providers: [],
    imports: [
        MaterialModule,
        PipeModule,
        FormsModule
    ],
    exports: [
        UserComponent,
        BookComponent
    ]
})
export class ComponentsModule {

}

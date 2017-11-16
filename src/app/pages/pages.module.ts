import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { HomePage } from './home/home.page';
import { ComponentsModule } from '../components/components.module';


@NgModule({
    declarations: [
        HomePage
    ],
    imports: [
        MaterialModule,
        ComponentsModule
    ],
    exports: [
        HomePage
    ]
})
export class PagesModule {

}

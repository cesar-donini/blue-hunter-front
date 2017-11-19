import { NgModule } from '@angular/core';
import { GenderPipe } from './gender.pipe';

@NgModule({
    declarations: [GenderPipe],
    exports: [GenderPipe]
})
export class PipeModule {

}

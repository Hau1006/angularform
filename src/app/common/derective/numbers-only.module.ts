import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NumberOnlyComponent } from './numbers-only.directive';


@NgModule({
    imports: [CommonModule],
    exports: [NumberOnlyComponent],
    declarations: [NumberOnlyComponent],
})
export class NumberOnlyModule { }

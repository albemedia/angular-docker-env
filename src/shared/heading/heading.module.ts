import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './heading.component';
import { MatCardModule } from '@angular/material';
import { HeadingContentDirective } from './heading-content.directive';

@NgModule({
    declarations: [HeadingComponent, HeadingContentDirective],
    imports: [CommonModule, MatCardModule],
    exports: [HeadingComponent, HeadingContentDirective]
})
export class HeadingModule { }

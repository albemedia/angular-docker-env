import { NgModule } from '@angular/core';
import { ChartComponent } from './chart.component';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    declarations: [ChartComponent],
    imports: [CommonModule, MatProgressSpinnerModule],
    exports: [ChartComponent]
})
export class ChartModule {}

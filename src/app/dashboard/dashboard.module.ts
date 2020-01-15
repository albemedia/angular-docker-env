import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ChartModule } from 'src/shared/chart/chart.module';
import { HeadingModule } from 'src/shared/heading/heading.module';
import { MatButtonModule } from '@angular/material';


@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        ChartModule,
        HeadingModule
    ],
    exports: []
})
export class DashboardModule { }

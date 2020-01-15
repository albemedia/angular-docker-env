import { NgModule } from '@angular/core';
import { LandingComponent } from './landing.component';
import { CommonModule } from '@angular/common';
import { LayoutModule } from 'src/shared/layout/layout.module';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashboardModule } from '../dashboard/dashboard.module';

const routes: Routes = [
    {
        path: '',
        component: LandingComponent,
        children: [
            {
                path: '',
                component: DashboardComponent
            }
        ]
    }
];

@NgModule({
    declarations: [LandingComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        LayoutModule,
        DashboardModule
    ]
})
export class LandingModule { }


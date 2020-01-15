import { Component } from '@angular/core';
import { DashboardService } from './services/dashboard.service';
import { ThemePalette } from '@angular/material';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    themeColor: ThemePalette = 'primary';
    constructor(
        private dashboardService: DashboardService
    ) { }

    public getFruitBarChart() {
        return this.dashboardService.fruitBarChart();
    }

    public getSplineBarChart() {
        return this.dashboardService.fruitSplineChart();
    }

    public getScatterChart() {
        return this.dashboardService.scatterChart();
    }
}

declare var require: any;
import { Component, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
const HighCharts = require('highcharts');
require('highcharts/modules/exporting')(HighCharts);


@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewInit, OnDestroy {
    @Input() options: Observable<any>;
    @Input() chartId: string;
    subscription = new Subscription();
    isLoading: boolean;
    constructor() {
        this.isLoading = true;
    }

    ngAfterViewInit() {
        if (this.chartId) {
            this.subscription.add(this.getChartOptions());
        }
    }

    getChartOptions(): Subscription {
        this.isLoading = true;
        return this.options.pipe(
            finalize(() => this.isLoading = false)
        )
        .subscribe(options => {
            HighCharts.chart(this.chartId, options);
        },
        () => this.isLoading = false);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}

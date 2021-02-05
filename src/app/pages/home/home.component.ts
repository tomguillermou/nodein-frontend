import { Component, OnInit } from '@angular/core';
import { ChartService } from '@shared/services/chart.service';

interface RowData {
    id: number;
    value: number;
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    constructor(private chartService: ChartService) {}

    ngOnInit(): void {
        this.chartService.createChart('container', { alignAxis: true, mainAxis: 0 });
    }
}

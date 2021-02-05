import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ArrayService } from './array.service';
const Highcharts = require('highcharts');

@Injectable()
export class ChartService {
    constructor(private arrayService: ArrayService) {}

    public createChart(element: string, options: any) {
        const boundaries = this.getSecondAxisBoundaries(options.mainAxis);
        console.log('min:', boundaries.min, 'max:', boundaries.max);

        Highcharts.chart(element, {
            chart: {
                type: 'column',
            },
            title: {
                text: 'Fruit Consumption',
            },
            xAxis: {
                categories: ['June', 'July', 'August'],
            },
            yAxis: [
                {
                    title: {
                        text: 'Fruit eaten',
                    },
                },
                {
                    title: {
                        text: 'average',
                    },
                    opposite: true,
                    min: boundaries.min,
                },
            ],
            series: [
                {
                    type: 'column',
                    name: 'Jane',
                    yAxis: 0,
                    data: [-2500, 300, 1000],
                },
                {
                    type: 'column',
                    name: 'John',
                    yAxis: 0,
                    data: [-200, 400, 800],
                },
                {
                    type: 'line',
                    name: 'Average',
                    yAxis: 1,
                    data: [10, 25, 50],
                },
            ],
        });
    }

    private getSecondAxisBoundaries(mainAxisId: number): { min: number; max: number } {
        const series = [
            { data: [-2500, 300, 1000], yAxis: 0 },
            { data: [-200, 400, 800], yAxis: 0 },
            { data: [10, 25, 50], yAxis: 1 },
        ];

        const mainAxis = {
            min: Number.POSITIVE_INFINITY,
            max: Number.NEGATIVE_INFINITY,
        };

        const secondAxis = {
            max: Number.NEGATIVE_INFINITY,
        };

        for (const serie of series) {
            const val = this.arrayService.minMax(serie.data);

            if (serie.yAxis === mainAxisId) {
                if (val.max > mainAxis.max) {
                    mainAxis.max = val.max;
                }

                if (val.min < mainAxis.min) {
                    mainAxis.min = val.min;
                }
            } else {
                if (val.max > secondAxis.max) {
                    secondAxis.max = val.max;
                }
            }
        }

        if (mainAxis.min < 0) {
            const ratio = Math.abs(mainAxis.min) / mainAxis.max;
            return { min: secondAxis.max * ratio * -1, max: secondAxis.max };
        }

        return { min: 0, max: secondAxis.max };
    }
}

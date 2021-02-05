import { Injectable } from '@angular/core';

@Injectable()
export class ArrayService {
    constructor() {}

    public minMax(array: any[]): { min: number; max: number } {
        const len = array.length;

        let min = Number.POSITIVE_INFINITY;
        let max = Number.NEGATIVE_INFINITY;

        for (let index = 0; index < len; index++) {
            const element = array[index];

            if (element > max) {
                max = element;
            }
            if (element < min) {
                min = element;
            }
        }
        return { min, max };
    }
}

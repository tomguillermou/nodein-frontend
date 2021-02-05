import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { countries as COUNTRIES } from 'app/shared/mocks/countries';

import { Country } from './countries.interfaces';

@Injectable()
export class CountryService {
    private _countries$ = new BehaviorSubject<Country[]>([]);
    private _selectedCountry$ = new Subject<Country>();

    constructor() {}

    public get countries$(): Observable<Country[]> {
        return this._countries$.asObservable();
    }

    public get selectedCountry$(): Observable<Country> {
        return this._selectedCountry$.asObservable();
    }

    public selectCountry(country: Country): void {
        this._selectedCountry$.next(country);
    }

    public getCountries(val: string = null) {
        try {
            // Switch with API call
            if (val) {
                throw val;
            }

            this._countries$.next(COUNTRIES);
        } catch (error) {
            this._countries$.error(error);
        }
    }

    /**
     * Sort countries by hemisphere then population
     */
    public sortCountries(countries: Country[], properties: string[]): Country[] {
        const sortedCountries = countries.concat(); // shallow copy

        sortedCountries.sort((a, b) => {
            let result: number;
            const paths = properties.concat(); // shallow copy

            while (result == null && paths.length) {
                const path = paths.shift();

                const f1 = a[path];
                const f2 = b[path];

                if (f1 !== f2) {
                    if (typeof f1 === 'number') {
                        result = f2 - f1;
                    } else if (typeof f1 === 'string') {
                        result = f1.localeCompare(f2);
                    }
                }
            }

            return result;
        });

        return sortedCountries;
    }
}

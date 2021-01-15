import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { countries } from '../mocks/countries';

import { Country } from '../models/db/Country';

@Injectable()
export class CountryService {
    private _countries$ = new BehaviorSubject<Country[]>(countries);
    private _selectedCountry$ = new Subject<Country>();

    constructor() {}

    public get countries$(): Observable<Country[]> {
        return this._countries$.asObservable();
    }

    public get selectedCountry$(): Observable<Country> {
        return this._selectedCountry$.asObservable();
    }

    public emitCountry(country: Country): void {
        this._selectedCountry$.next(country);
    }

    /**
     * Sort list of countries by continent, hemisphere and population
     * @param countries List of countries to sort
     * @returns Sorted list of countries
     */
    public sortCountries(countries: Country[]): Country[] {
        const sortedCountries = countries.concat();

        sortedCountries.sort((a, b) => {
            let result: number;
            const paths = ['continent', 'hemisphere', 'population'];

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

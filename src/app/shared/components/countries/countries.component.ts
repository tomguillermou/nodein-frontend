import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Country } from '../../../shared/models/db/Country';

import { CountryService } from '../../../shared/services/country.service';

@Component({
    selector: 'app-countries',
    templateUrl: './countries.component.html',
    styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
    countries: Country[];
    selectedCountry: Country;

    constructor(private countryService: CountryService) {
        // Sort countries by hemisphere then population
        this.countryService.countries$.subscribe((countries) => {
            this.countries = this.sortCountries(countries, [
                'continent',
                'hemisphere',
                'population',
            ]);
        });

        this.countryService.country$.subscribe(
            (country) => (this.selectedCountry = country)
        );
    }

    ngOnInit(): void {}

    public selectCountry(country: Country): void {
        this.countryService.emitCountry(country);
    }

    private sortCountries(
        countries: Country[],
        properties: string[]
    ): Country[] {
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

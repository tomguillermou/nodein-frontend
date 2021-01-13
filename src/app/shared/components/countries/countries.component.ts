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
    countries: Country[]; // using async pipe
    country: Country;

    constructor(private countryService: CountryService) {
        // Sort countries by hemisphere then population
        this.countryService.countries$.subscribe((countries) => {
            this.countries = countries.sort((a, b) => {
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
        });

        this.countryService.country$.subscribe(
            (country) => (this.country = country)
        );
    }

    ngOnInit(): void {}

    public selectCountry(country: Country): void {
        this.countryService.emitCountry(country);
    }
}

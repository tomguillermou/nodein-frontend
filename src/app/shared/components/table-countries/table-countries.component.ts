import { Component, OnInit, ViewChild } from '@angular/core';

import { Country } from '../../../shared/models/db/Country';

import { CountryService } from '../../../shared/services/country.service';

@Component({
    selector: 'app-table-countries',
    templateUrl: './table-countries.component.html',
    styleUrls: ['./table-countries.component.css'],
})
export class TableCountriesComponent implements OnInit {
    countries: Country[];
    selectedCountry: Country;

    @ViewChild('modalEditCountry') modalEditCountry;

    constructor(private countryService: CountryService) {
        // Sort countries by hemisphere then population
        this.countryService.countries$.subscribe((countries) => {
            this.countries = this.countryService.sortCountries(countries);
        });

        this.countryService.selectedCountry$.subscribe(
            (country) => (this.selectedCountry = country)
        );
    }

    ngOnInit(): void {}

    public selectCountry(country: Country): void {
        this.countryService.emitCountry(country);
    }
}

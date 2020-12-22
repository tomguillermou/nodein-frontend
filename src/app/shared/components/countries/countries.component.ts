import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Country } from "../../../shared/models/db/Country";

import { CountryService } from "../../../shared/services/country.service";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {

    countries: Country[]; // using async pipe
    country: Country;

    constructor(
        private countryService: CountryService,
    ) {
        this.countryService.countries$.subscribe(countries => this.countries = countries);
        this.countryService.country$.subscribe(country => this.country = country);
    }

    ngOnInit(): void {
    }

    selectCountry(country: Country) {
        this.countryService.emitCountry(country);
    }

}

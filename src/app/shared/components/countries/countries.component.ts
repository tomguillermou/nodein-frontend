import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { Country } from './countries.interfaces';
import { CountryService } from './country.service';

@Component({
    selector: 'app-countries',
    templateUrl: './countries.component.html',
    styleUrls: ['./countries.component.css'],
    providers: [CountryService],
})
export class CountriesComponent implements OnInit {
    countries: Country[];
    selectedCountry: Country;

    errorNoData = false;

    constructor(private router: Router, private countryService: CountryService) {
        this.countryService.countries$.subscribe({
            next: (countries) => {
                this.errorNoData = false;

                this.countries = this.countryService.sortCountries(countries, [
                    'continent',
                    'hemisphere',
                    'population',
                ]);
            },
            error: (err) => {
                this.errorNoData = true;

                Swal.fire({
                    title: 'Oops!',
                    text: "Nous n'avons pas pu charger la liste des pays.",
                    icon: 'error',
                }).then((result) => {});
            },
        });

        this.countryService.selectedCountry$.subscribe(
            (country) => (this.selectedCountry = country)
        );
    }

    ngOnInit(): void {
        this.countryService.getCountries();
    }

    public selectCountry(country: Country): void {
        this.countryService.selectCountry(country);
    }
}

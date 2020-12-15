import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CountryService } from "../../services/country.service";

import { Country } from "../../models/Country";

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent implements OnInit {

  countries$: Observable<Country[]>; // using async pipe

  constructor(
    private countryService: CountryService
  ) {
    this.countries$ = countryService.countries$; // == countryService.countries$.subscribe(countries => this.countries = countries); (if not using async pipe)
  }

  ngOnInit(): void {
  }

  selectCountry(country: Country) {
    this.countryService.emitCountry(country);
  }

}

import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Country } from "../../../shared/models/db/Country";

import { CountryService } from "../../../shared/services/country.service";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

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

import { Component, Input, OnInit } from '@angular/core';

import { Country } from '../../../shared/models/db/Country';

import { CountryService } from '../../../shared/services/country.service';

/**
 * Cell details of a data table
 */
@Component({
  selector: 'app-data-details',
  templateUrl: './data-details.component.html',
  styleUrls: ['./data-details.component.css']
})
export class DataDetailsComponent implements OnInit {

  country: Country;

  constructor(
    private countryService: CountryService
  ) {
    this.countryService.country$.subscribe(country => this.country = country);
  }

  ngOnInit(): void { }

}

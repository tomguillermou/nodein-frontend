import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/models/Country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  country: Country;

  constructor(
    private countryService: CountryService
  ) {
    countryService.country$.subscribe(country => this.country = country);
  }

  ngOnInit(): void {
  }

}

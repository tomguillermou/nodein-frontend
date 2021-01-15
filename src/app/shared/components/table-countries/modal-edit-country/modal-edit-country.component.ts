import { Component, Input, OnInit } from '@angular/core';

import { Country } from '../../../../shared/models/db/Country';

import { CountryService } from '../../../../shared/services/country.service';

@Component({
    selector: 'app-modal-edit-country',
    templateUrl: './modal-edit-country.component.html',
    styleUrls: ['./modal-edit-country.component.css'],
})
export class ModalEditCountryComponent implements OnInit {
    @Input() country: Country;

    constructor(private countryService: CountryService) {}

    ngOnInit(): void {
        console.log('open selected country', this.country);
    }
}

import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

// Components
import { TableCountriesComponent } from './/table-countries.component';
import { ModalEditCountryComponent } from './modal-edit-country/modal-edit-country.component';

// Services
// import { CountryService } from './services/country.service';

@NgModule({
    imports: [BrowserModule],
    declarations: [TableCountriesComponent, ModalEditCountryComponent],
    exports: [TableCountriesComponent, ModalEditCountryComponent],
    providers: [],
})
export class TableCountriesModule {}

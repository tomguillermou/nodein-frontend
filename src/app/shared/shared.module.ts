import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Components
import { TableCountriesModule } from './components/table-countries/table-countries.module';

// Services
import { CountryService } from './services/country.service';

@NgModule({
    imports: [BrowserModule, FormsModule, TableCountriesModule],
    declarations: [],
    exports: [BrowserModule, FormsModule, TableCountriesModule],
    providers: [CountryService],
})
export class SharedModule {}

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

// Components
import { CountriesComponent } from "./components/countries/countries.component";

// Services
import { CountryService } from "./services/country.service";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [CountriesComponent],
    exports: [BrowserModule, FormsModule, CountriesComponent],
    providers: [CountryService],
})
export class SharedModule {}

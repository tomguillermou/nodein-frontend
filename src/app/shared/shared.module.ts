import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Components
import { CountriesComponent } from "./components/countries/countries.component";

// Services
import { CountryService } from "./services/country.service";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        CountriesComponent,
    ],
    exports: [
        CountriesComponent,
    ],
    providers: [
        CountryService
    ]
})
export class SharedModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { CountriesComponent } from './components/countries/countries.component';

// Services$
import { ArrayService } from './services/array.service';
import { ChartService } from './services/chart.service';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule],
    declarations: [CountriesComponent],
    exports: [BrowserModule, ReactiveFormsModule, CountriesComponent],
    providers: [ArrayService, ChartService],
})
export class SharedModule {}

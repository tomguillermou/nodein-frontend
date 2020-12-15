import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { countries } from "../../../mocks/countries";

import { Country } from '../models/Country';

@Injectable({ providedIn: 'root' })
export class CountryService {

  private _countries$ = new BehaviorSubject<Country[]>(countries);
  private _country$ = new Subject<Country>();

  constructor() { }

  public get countries$() : Observable<Country[]> {
    return this._countries$.asObservable();
  }
  
  public get country$(): Observable<Country> {
    return this._country$.asObservable();
  }

  public emitCountry(country: Country): void {
    this._country$.next(country);
  }

}

import { Country } from '../models/db/Country';

export const countries: Country[] = [
    {
        id: 1,
        name: 'Russia',
        flag:
            'https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg',
        hemisphere: 'Nord',
        continent: 'Asie',
        area: 17075200,
        population: 146989754,
        get density() {
            return this.population / this.area;
        },
    },
    {
        id: 2,
        name: 'France',
        flag:
            'https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg',
        hemisphere: 'Nord',
        continent: 'Europe',
        area: 640679,
        population: 64979548,
        get density() {
            return this.population / this.area;
        },
    },
    {
        id: 3,
        name: 'Germany',
        flag:
            'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg',
        hemisphere: 'Nord',
        continent: 'Europe',
        area: 357114,
        population: 82114224,
        get density() {
            return this.population / this.area;
        },
    },
    {
        id: 4,
        name: 'Portugal',
        flag:
            'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg',
        hemisphere: 'Nord',
        continent: 'Europe',
        area: 92090,
        population: 10329506,
        get density() {
            return this.population / this.area;
        },
    },
    {
        id: 5,
        name: 'Canada',
        flag:
            'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg',
        hemisphere: 'Nord',
        continent: 'Amerique',
        area: 9976140,
        population: 36624199,
        get density() {
            return this.population / this.area;
        },
    },
    {
        id: 6,
        name: 'Vietnam',
        flag:
            'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg',
        hemisphere: 'Sud',
        continent: 'Asie',
        area: 331212,
        population: 95540800,
        get density() {
            return this.population / this.area;
        },
    },
    {
        id: 7,
        name: 'Brazil',
        flag:
            'https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg',
        hemisphere: 'Sud',
        continent: 'Amerique',
        area: 8515767,
        population: 209288278,
        get density() {
            return this.population / this.area;
        },
    },
    {
        id: 8,
        name: 'Mexico',
        flag:
            'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg',
        hemisphere: 'Sud',
        continent: 'Amerique',
        area: 1964375,
        population: 129163276,
        get density() {
            return this.population / this.area;
        },
    },
    {
        id: 9,
        name: 'United States',
        flag:
            'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg',
        hemisphere: 'Nord',
        continent: 'Amerique',
        area: 9629091,
        population: 324459463,
        get density() {
            return this.population / this.area;
        },
    },
    {
        id: 10,
        name: 'India',
        flag:
            'https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg',
        hemisphere: 'Sud',
        continent: 'Asie',
        area: 3287263,
        population: 1324171354,
        get density() {
            return this.population / this.area;
        },
    },
    {
        id: 11,
        name: 'Indonesia',
        flag:
            'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg',
        hemisphere: 'Nord',
        continent: 'Asie',
        area: 1910931,
        population: 263991379,
        get density() {
            return this.population / this.area;
        },
    },
    {
        id: 12,
        name: 'China',
        flag:
            'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
        hemisphere: 'Nord',
        continent: 'Asie',
        area: 9596960,
        population: 1409517397,
        get density() {
            return this.population / this.area;
        },
    },
];

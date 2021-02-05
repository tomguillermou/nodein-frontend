export interface Country {
    id: number;
    name: string;
    flag: string;
    hemisphere: 'Nord' | 'Sud';
    continent: 'Europe' | 'Amerique' | 'Asie' | 'Afrique' | 'Oceanie';
    area: number;
    population: number;
}

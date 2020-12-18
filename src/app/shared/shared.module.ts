import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Components
import { DataDetailsComponent } from "./components/data-details/data-details.component";
import { DataTableComponent } from "./components/data-table/data-table.component";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        DataDetailsComponent,
        DataTableComponent,
    ],
    exports: [
        DataDetailsComponent,
        DataTableComponent,
    ]
})
export class SharedModule { }
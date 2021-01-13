import { Component, OnInit } from '@angular/core';

interface RowData {
    id: number;
    value: number;
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    public data: RowData[] = [
        {
            id: 1,
            value: 1,
        },
        {
            id: 2,
            value: 3,
        },
    ];

    public newValue: number;
    public defaultNewValue = 0;

    public updatingRow = {
        state: false,
        id: null,
    };

    public showInputErrorMessage = {
        state: false,
        message: '',
        forRowData: null,
    };

    constructor() {}

    ngOnInit(): void {
        this.newValue = this.defaultNewValue;
    }

    addData(value: number) {
        const lastValue = this.data[this.data.length - 1];

        if (value > lastValue.value) {
            this.data.push({ id: lastValue.id + 1, value });
            console.log('Adding value', value);
        }

        this.newValue = this.defaultNewValue;
    }

    updateData(id: number) {
        if (!this.updatingRow.state) {
            // Update
            this.updatingRow.state = true;
            this.updatingRow.id = id;
        } else if (this.updatingRow.state && this.updatingRow.id === id) {
            // Save
            this.updatingRow.state = false;
            this.updatingRow.id = null;
        }

        console.log('updating row', this.updatingRow);
    }

    verifyValue(value: number, rowDataToUpdate: RowData) {
        const previousRowData = this.data.find(
            (rowData) => rowData.id === rowDataToUpdate.id - 1
        );
        const nextRowData = this.data.find(
            (rowData) => rowData.id === rowDataToUpdate.id + 1
        );

        if (previousRowData && previousRowData.value > value) {
            this.showInputErrorMessage.state = true;
            this.showInputErrorMessage.message =
                'WARNING: The value is below the previous one';
            this.showInputErrorMessage.forRowData = rowDataToUpdate.id;
        } else if (nextRowData && nextRowData.value < value) {
            this.showInputErrorMessage.state = true;
            this.showInputErrorMessage.message =
                'WARNING: The value is above the next one';
            this.showInputErrorMessage.forRowData = rowDataToUpdate.id;
        } else {
            this.showInputErrorMessage.state = false;
            this.showInputErrorMessage.forRowData = null;

            rowDataToUpdate.value = value;
        }
    }
}

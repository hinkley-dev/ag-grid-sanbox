import 'ag-grid-enterprise'
import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  template: `
    <ag-grid-angular
      style="width: 100%; height: 500px;"
      class="ag-theme-alpine"
      [rowData]="gridOptions.rowData"
      [columnDefs]="gridOptions.columnDefs">
    </ag-grid-angular>
  `,
})
export class AppComponent {
  title = 'ag-grid-sandbox';

   gridOptions: GridOptions<any> = {

    columnDefs :[
      { headerName: 'Make', field: 'make' },
      { headerName: 'Model', field: 'model' },
      { headerName: 'Price', field: 'price' }
    ],

    rowData : [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxster', price: 72000 }
    ]
  }
}

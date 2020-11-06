import { Component } from '@angular/core';
import { faSort } from '@fortawesome/free-solid-svg-icons';

import data from 'src/inventory-data.json';
import { Inventory, SelectOptions, SortOptionsEnums } from 'src/typings/datatable';
import { cleanValue, getAllKeysFromData, getSortedData } from 'src/utils/datatable'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Inventory Manager';
  products: Inventory = data;
  filteredData: Inventory = [...data];

  faSortIcon = faSort;
  stockFilterOptions: SelectOptions = [
    { name: 'All', value: 1 },
    { name: 'Out of stock', value: 2 },
    { name: 'Low stock', value: 3 },
    { name: 'In stock', value: 4 }
  ];
  sortOrder = SortOptionsEnums.ASCENDING;

  sortItems(key: string) {
    this.sortOrder = (this.sortOrder === SortOptionsEnums.ASCENDING) ? SortOptionsEnums.DESCENDING : SortOptionsEnums.ASCENDING;
    this.filteredData = getSortedData(this.products, key, this.sortOrder);
  }

  onStockFilterChange($event) {
    const selectedValue = parseInt($event.target.value);
    switch (selectedValue) {
      case 1:
        this.filteredData = this.products;
        break;
      case 2:
        this.filteredData = this.products.filter(product => product.inventory_level === 0);
        break;
      case 3:
        this.filteredData = this.products.filter(product => product.inventory_level < 15);
        break;
      case 4:
        this.filteredData = this.products.filter(product => product.inventory_level > 15);
        break;
      default:
        break;
    }
  }

  onSearchInput(value: string) {
    this.filteredData = this.products.filter(product => product.title.toLowerCase().includes(value.toLowerCase()))
  }

  getTableHeaders() {
    return getAllKeysFromData(this.products);
  }

  transformKeyHeader(key: string) {
    return cleanValue(key);
  }

  getLinkUrl(title: string, asin: string) {
    return `https://amazon.com/${title}/dp/${asin}`
  }
}

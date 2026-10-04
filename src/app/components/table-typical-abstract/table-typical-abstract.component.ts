import { Component, Input } from '@angular/core';

export interface TableColumn<T> {
  header: string;
  field?: keyof T;
  width?: string;
  sortable?: boolean;
  formatter?: (value: T[keyof T], row: T) => string;
  value?: (row: T) => string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table-typical-abstract.component.html',
  styleUrl: './table-typical-abstract.component.css'
})
export class TableTypicalAbstractComponent<T> {

  @Input() data: T[] = [];

  @Input() columns: TableColumn<T>[] = [];

  getValue(row: T, column: TableColumn<T>): unknown {

    // Jeśli kolumna ma własną funkcję value()
    if (column.value) {
      return column.value(row);
    }

    // Jeśli kolumna korzysta ze zwykłego pola obiektu
    if (column.field !== undefined) {
      return row[column.field];
    }

    return '';
  }

  formatValue(row: T, column: TableColumn<T>): string {
    const value = this.getValue(row, column);

    if (column.formatter && column.field !== undefined) {
      return column.formatter(
        value as T[keyof T],
        row
      );
    }

    return value != null ? String(value) : '';
  }
}
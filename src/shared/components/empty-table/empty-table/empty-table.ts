import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-table',
  imports: [],
  templateUrl: './empty-table.html',
  styleUrl: './empty-table.css',
})
export class EmptyTable {
  @Input({
    required: true
  }) title: string = '';
  @Input({
    required: true
  }) msg: string = '';
}

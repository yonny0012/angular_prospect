import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.css'],
})
export class FilterInputComponent {
  value: string = '';

  @Input() placeHolder: string = '';
  @Input() idFilter: string = '';
  isEmpty: boolean = true;
  setFilter(event: any) {}
  clean() {
    this.value = '';
  }
  setEmptyState(event: any) {
    if (event.target.value != '') this.isEmpty = false;
    else this.isEmpty = true;
  }
}

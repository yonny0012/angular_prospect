import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-sesults',
  templateUrl: './show-sesults.component.html',
  styleUrls: ['./show-sesults.component.css']
})
export class ShowSesultsComponent {
  @Input() isHidden?: boolean;
}

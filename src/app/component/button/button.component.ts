import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() img!: string;
  @Input() alt!: string;
  @Output() onClicked = new EventEmitter<void>();

  onClick(): void {
    this.onClicked.emit();
  }
}

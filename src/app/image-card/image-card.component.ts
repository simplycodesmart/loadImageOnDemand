import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImageCardComponent {
  @Input() image: string;
  @Input() remaining: string;
  @Input() showButton: boolean;
  @Output() loadImage = new EventEmitter();
  constructor() {
    this.image = '';
    this.remaining = '';
    this.showButton = false;
  }

  public loadImages() {
    this.loadImage.emit()
  }
}

import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { DataTransferService } from '../services/data-transfer.service';

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
  constructor(public dataTransferService: DataTransferService) {
    this.image = '';
    this.remaining = '';
    this.showButton = false;
  }

  public loadImages() {
    this.dataTransferService.setButtonClickStream()
  }
}

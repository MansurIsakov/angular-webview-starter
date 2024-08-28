import { NgClass, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ImageErrorHandlerDirective } from '@core/directives';
import { FormatImagePipe } from '@shared/pipes';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [
    NgClass,
    NgOptimizedImage,
    FormatImagePipe,
    ImageErrorHandlerDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './image.component.html',
})
export class ImageComponent {
  @Input({ required: true }) imageUrl!: string;
  @Input({ required: true }) altText!: string;
  @Input({ required: true }) width!: number;
  @Input({ required: true }) height!: number;
  @Input() isPriority = false;
  @Input() fallbackImage = 'assets/default.png';
  @Input() className?: string;
}

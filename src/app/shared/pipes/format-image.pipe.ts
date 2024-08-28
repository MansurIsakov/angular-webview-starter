import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatImage',
  standalone: true,
})
export class FormatImagePipe implements PipeTransform {
  transform(
    url: string | undefined,
    width: number,
    format: 'webp' | 'png' = 'webp'
  ): string {
    if (url?.startsWith('assets')) return url;

    if (!url) {
      return '';
    }
    const newUrl = url.replace(/(\.\w+)$/, `.${format}`);
    return `${newUrl}?w=${width}`;
  }
}

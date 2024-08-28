import { Pipe, PipeTransform } from '@angular/core';

import { TIN } from '@core/constants';

@Pipe({
  name: 'formatCurrency',
  standalone: true,
})
export class FormatCurrencyPipe implements PipeTransform {
  transform(value: number): string {
    return (value / TIN)
      .toString()
      .replace(/\s/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
}

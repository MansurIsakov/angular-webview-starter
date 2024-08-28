import { Pipe, PipeTransform } from '@angular/core';

import { UZ_PHONE_CODE } from '@core/constants';

@Pipe({
  name: 'formatPhone',
  standalone: true,
})
export class FormatPhonePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    if (value.length === 9) {
      return `+${UZ_PHONE_CODE}${value}`;
    }

    // INFO: Valid for uz phone numbers
    return `+${value.substring(0, 5)} ${value.substring(5, 8)} ${value.substring(8, 10)} ${value.substring(10, 12)}`;
  }
}

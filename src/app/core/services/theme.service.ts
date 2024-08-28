import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { ThemeEnum } from '@core/enums';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _theme = new BehaviorSubject<ThemeEnum>(ThemeEnum.Light);

  get theme(): ThemeEnum {
    return this._theme.getValue();
  }

  set theme(theme: ThemeEnum) {
    if (theme === ThemeEnum.Dark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    this._theme.next(theme);
  }
}

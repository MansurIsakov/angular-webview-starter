import { Injectable } from '@angular/core';

import { PlatformEnum } from '@core/enums';

@Injectable({
  providedIn: 'root',
})
export class PlatformService {
  private _platform: PlatformEnum = PlatformEnum.Web;

  get platform(): PlatformEnum {
    return this._platform;
  }

  set platform(platform: PlatformEnum) {
    this._platform = platform;
  }

  isWeb(): boolean {
    return this._platform === PlatformEnum.Web;
  }

  isIOS(): boolean {
    return this._platform === PlatformEnum.IOS;
  }
}

import { inject } from '@angular/core';

import { PlatformEnum, StorageEnum } from '@core/enums';
import { StorageService } from '@core/services';

export const openOutsideWebview = (url: string): void => {
  const storageService = inject(StorageService);

  const platform = storageService.getSessionStorage(StorageEnum.PLATFORM);
  let formattedUrl = `${url}?target=_blank`;

  if (platform === PlatformEnum.IOS) {
    formattedUrl = formattedUrl.replace('https://', 'externals://');
  }

  window.location.href = formattedUrl;
};

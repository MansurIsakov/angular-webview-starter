import { Injectable, inject } from '@angular/core';

import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

import { StorageEnum } from '@core/enums';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private sessionStorage = inject(SessionStorageService);
  private localStorage = inject(LocalStorageService);

  getSessionStorage(key: StorageEnum): string | null {
    const storage = this.sessionStorage.retrieve(key);
    return storage || null;
  }

  setSessionStorage<T>(key: StorageEnum, data: T): void {
    this.sessionStorage.store(key, data);
  }

  setLocaleStorage(key: string, data: string): void {
    this.localStorage.store(key, data);
  }

  getLocaleStorage(key: string): string | null {
    return this.localStorage.retrieve(key) || null;
  }

  setQueryParams(data: URLSearchParams): void {
    data.forEach((value, key) => {
      this.sessionStorage.store(key, value);
    });
  }
}

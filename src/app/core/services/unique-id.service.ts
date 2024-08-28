import { Injectable } from '@angular/core';

import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class UniqueIdService {
  public getUniqueId(): string {
    return uuidv4();
  }
}

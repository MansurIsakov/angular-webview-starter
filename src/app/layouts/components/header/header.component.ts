import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { RouterModule } from '@angular/router';

import { Header } from '@core/interfaces';
import { AppNavigationService } from '@core/services';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private _appNavigationService = inject(AppNavigationService);

  header = input<Header>();

  onBack(event: Event): void {
    event.preventDefault();

    this._appNavigationService.handleBackAction();
  }

  handleLinkClick(link: Header['link']): void {
    console.log(link);
  }
}

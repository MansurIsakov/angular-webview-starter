import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { RouterModule } from '@angular/router';

import { Header } from '@core/interfaces';
import { NavigationService } from '@core/services';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private navigationService = inject(NavigationService);

  header = input<Header>();

  onBack(event: Event): void {
    event.preventDefault();

    this.navigationService.handleBackAction();
  }

  handleLinkClick(link: Header['link']): void {
    console.log(link);
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';

import { TranslocoPipe } from '@jsverse/transloco';

import { NavigationService } from '@core/services';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [TranslocoPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="flex h-full flex-col items-center justify-center gap-4 text-center">
      <span
        aria-label="Warning Icon"
        class="icon-info-circle text-6xl text-warning-200"></span>

      <h2 class="text-2xl font-semibold">
        {{ 'screens.not-found.title' | transloco }}
      </h2>
      <p class="text-sm">
        {{ 'screens.not-found.description' | transloco }}
      </p>
    </div>
  `,
})
export class NotFoundComponent implements OnInit {
  private navigationService = inject(NavigationService);

  ngOnInit(): void {
    this.navigationService.setDirectExit(true);
  }
}

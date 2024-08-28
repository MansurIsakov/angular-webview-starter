import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent, IOSHeaderComponent } from '@layouts/components';

import { PlatformService } from '@core/services';

@Component({
  selector: 'app-minimal-layout',
  templateUrl: './minimal-layout.component.html',
  standalone: true,
  imports: [HeaderComponent, IOSHeaderComponent, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinimalLayoutComponent {
  platformService = inject(PlatformService);
}

import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent, IOSHeaderComponent } from '@layouts/components';

@Component({
  selector: 'app-minimal-layout',
  templateUrl: './minimal-layout.component.html',
  standalone: true,
  imports: [HeaderComponent, IOSHeaderComponent, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinimalLayoutComponent {
  platform = inject(Platform);
}

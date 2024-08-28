import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';

import { filter } from 'rxjs';

import { Header } from '@core/interfaces';
import { PlatformService } from '@core/services';

import { HeaderComponent, IOSHeaderComponent } from '../components';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  standalone: true,
  imports: [HeaderComponent, IOSHeaderComponent, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent implements OnInit {
  private _activatedRoute = inject(ActivatedRoute);
  private _router = inject(Router);
  private _destroyRef = inject(DestroyRef);
  platformService = inject(PlatformService);

  header?: Header;

  ngOnInit(): void {
    this.updateHeaderData(this._activatedRoute);

    this._router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe(() => {
        this.updateHeaderData(this._activatedRoute);
      });
  }

  private updateHeaderData(route: ActivatedRoute): void {
    let child = route.firstChild;
    // Traverse to the deepest child route
    while (child?.firstChild) {
      child = child.firstChild;
    }
    child?.data.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(data => {
      this.header = data['header'];
    });
  }
}

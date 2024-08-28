import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ImageComponent } from '@shared/ui';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [ImageComponent, ReactiveFormsModule],
  template: ` <div
    class="flex h-full flex-col items-center justify-center text-center">
    <h1 class="text-2xl font-bold text-primary-400">
      Welcome to WebView Starter!
    </h1>

    <p class="text-sm">For further details, check the README file</p>
  </div>`,
})
export class WelcomePageComponent {}

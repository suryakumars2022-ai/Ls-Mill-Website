import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      [attr.stroke-width]="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide-icon"
      [ngClass]="class"
      aria-hidden="true"
    >
      <ng-container [ngSwitch]="name">
        <!-- Arrow Right -->
        <ng-container *ngSwitchCase="'arrow-right'">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </ng-container>

        <!-- Arrow Up Right -->
        <ng-container *ngSwitchCase="'arrow-up-right'">
          <path d="M7 7h10v10"></path>
          <path d="M7 17 17 7"></path>
        </ng-container>

        <!-- Arrow Down -->
        <ng-container *ngSwitchCase="'arrow-down'">
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </ng-container>

        <!-- Chevron Right -->
        <ng-container *ngSwitchCase="'chevron-right'">
          <path d="m9 18 6-6-6-6"></path>
        </ng-container>

        <!-- Chevron Down -->
        <ng-container *ngSwitchCase="'chevron-down'">
          <path d="m6 9 6 6 6-6"></path>
        </ng-container>

        <!-- Check -->
        <ng-container *ngSwitchCase="'check'">
          <path d="M20 6 9 17l-5-5"></path>
        </ng-container>

        <!-- Menu Hamburger -->
        <ng-container *ngSwitchCase="'menu'">
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </ng-container>

        <!-- Close X -->
        <ng-container *ngSwitchCase="'x'">
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </ng-container>

        <!-- Map Pin -->
        <ng-container *ngSwitchCase="'map-pin'">
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </ng-container>

        <!-- Phone -->
        <ng-container *ngSwitchCase="'phone'">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </ng-container>

        <!-- Mail -->
        <ng-container *ngSwitchCase="'mail'">
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </ng-container>

        <!-- Factory -->
        <ng-container *ngSwitchCase="'factory'">
          <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
          <path d="M17 18h1"></path>
          <path d="M12 18h1"></path>
          <path d="M7 18h1"></path>
        </ng-container>

        <!-- Layers -->
        <ng-container *ngSwitchCase="'layers'">
          <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
          <path d="m22 12.5-9.17 4.16a2 2 0 0 1-1.66 0L2 12.5"></path>
          <path d="m22 17.5-9.17 4.16a2 2 0 0 1-1.66 0L2 17.5"></path>
        </ng-container>

        <!-- Feather / Fiber -->
        <ng-container *ngSwitchCase="'feather'">
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
          <line x1="16" x2="2" y1="8" y2="22"></line>
          <line x1="17.5" x2="9" y1="15" y2="15"></line>
        </ng-container>

        <!-- Droplets / Sustainability -->
        <ng-container *ngSwitchCase="'droplets'">
          <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path>
          <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
        </ng-container>

        <!-- Shield / Quality -->
        <ng-container *ngSwitchCase="'shield'">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
        </ng-container>

        <!-- Sparkles / Excellence -->
        <ng-container *ngSwitchCase="'sparkles'">
          <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
        </ng-container>

        <!-- Search -->
        <ng-container *ngSwitchCase="'search'">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </ng-container>

        <!-- Globe -->
        <ng-container *ngSwitchCase="'globe'">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" x2="22" y1="12" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </ng-container>

        <!-- Users -->
        <ng-container *ngSwitchCase="'users'">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </ng-container>

        <!-- Clock -->
        <ng-container *ngSwitchCase="'clock'">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </ng-container>

        <!-- Sliders / Filter -->
        <ng-container *ngSwitchCase="'sliders'">
          <line x1="4" x2="4" y1="21" y2="14"></line>
          <line x1="4" x2="4" y1="10" y2="3"></line>
          <line x1="12" x2="12" y1="21" y2="12"></line>
          <line x1="12" x2="12" y1="8" y2="3"></line>
          <line x1="20" x2="20" y1="21" y2="16"></line>
          <line x1="20" x2="20" y1="12" y2="3"></line>
          <line x1="1" x2="7" y1="14" y2="14"></line>
          <line x1="9" x2="15" y1="8" y2="8"></line>
          <line x1="17" x2="23" y1="16" y2="16"></line>
        </ng-container>

        <!-- External Link -->
        <ng-container *ngSwitchCase="'external-link'">
          <path d="M15 3h6v6"></path>
          <path d="M10 14 21 3"></path>
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        </ng-container>

        <!-- Award -->
        <ng-container *ngSwitchCase="'award'">
          <circle cx="12" cy="8" r="6"></circle>
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
        </ng-container>

        <!-- Default Fallback -->
        <ng-container *ngSwitchDefault>
          <circle cx="12" cy="12" r="10"></circle>
        </ng-container>
      </ng-container>
    </svg>
  `,
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      vertical-align: middle;
    }
    .lucide-icon {
      display: inline-block;
      vertical-align: middle;
      flex-shrink: 0;
      transition: transform var(--transition-fast, 0.2s ease);
    }
  `]
})
export class IconComponent {
  @Input() name: string = 'arrow-right';
  @Input() size: number = 20;
  @Input() strokeWidth: number = 1.75;
  @Input() class: string = '';
}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnquiryService } from '../../services/enquiry.service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <div
      *ngIf="enquiryService.activeToast() as toast"
      class="toast-banner"
      [ngClass]="'toast-' + toast.type"
      role="alert"
      aria-live="polite"
    >
      <div class="toast-content">
        <div class="toast-icon">
          <app-icon
            [name]="toast.type === 'success' ? 'check' : (toast.type === 'error' ? 'x' : 'sparkles')"
            [size]="18"
            [strokeWidth]="2"
          ></app-icon>
        </div>
        <div class="toast-text">
          <div class="toast-title">{{ toast.title }}</div>
          <div class="toast-message">{{ toast.message }}</div>
        </div>
      </div>
      <button class="toast-close" (click)="enquiryService.dismissToast()" aria-label="Close message">
        <app-icon name="x" [size]="16"></app-icon>
      </button>
    </div>
  `,
  styles: [`
    .toast-banner {
      position: fixed;
      bottom: 28px;
      right: 28px;
      max-width: 440px;
      width: calc(100vw - 48px);
      background-color: var(--color-charcoal);
      color: var(--color-warm-ivory);
      border-left: 3px solid var(--color-muted-copper);
      border-radius: 2px;
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
      padding: 18px 20px;
      z-index: 10002;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 16px;
      animation: slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .toast-success {
      border-left-color: #558B6E;
    }

    .toast-error {
      border-left-color: #B23A48;
    }

    .toast-content {
      display: flex;
      align-items: flex-start;
      gap: 14px;
    }

    .toast-icon {
      color: var(--color-muted-copper);
      margin-top: 2px;
      flex-shrink: 0;
    }

    .toast-success .toast-icon {
      color: #558B6E;
    }

    .toast-title {
      font-family: var(--font-marker);
      font-size: 0.75rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      font-weight: 600;
      margin-bottom: 4px;
      color: var(--color-warm-ivory);
    }

    .toast-message {
      font-family: var(--font-sans);
      font-size: 0.85rem;
      color: rgba(244, 241, 232, 0.85);
      line-height: 1.45;
    }

    .toast-close {
      color: rgba(244, 241, 232, 0.5);
      padding: 4px;
      transition: color 0.2s;
      flex-shrink: 0;

      &:hover {
        color: var(--color-warm-ivory);
      }
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class ToastComponent {
  enquiryService = inject(EnquiryService);
}

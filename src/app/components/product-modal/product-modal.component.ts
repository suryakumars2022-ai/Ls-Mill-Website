import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductItem } from '../../models/textile.model';
import { EnquiryService } from '../../services/enquiry.service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-product-modal',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <div *ngIf="product" class="modal-overlay" (click)="onBackdropClick($event)" role="dialog" aria-modal="true" [attr.aria-label]="product.name">
      <div class="modal-container">
        <!-- Close Button -->
        <button class="modal-close" (click)="close.emit()" aria-label="Close product view">
          <app-icon name="x" [size]="20"></app-icon>
        </button>

        <div class="modal-body">
          <!-- Left: High-Res Editorial Photography -->
          <div class="modal-media">
            <img [src]="product.image" [alt]="product.name" loading="lazy" />
            <div class="media-badge">
              <span class="editorial-tag">{{ product.categoryLabel }}</span>
            </div>
          </div>

          <!-- Right: Technical Specifications & Details -->
          <div class="modal-details">
            <div class="editorial-kicker">TECHNICAL PROFILE</div>
            <h2 class="modal-title">{{ product.name }}</h2>

            <div class="spec-highlight">
              <span class="spec-label">CONSTRUCTION / COUNT:</span>
              <span class="spec-value">{{ product.countOrWeave }}</span>
            </div>

            <div class="spec-highlight">
              <span class="spec-label">COMPOSITION:</span>
              <span class="spec-value">{{ product.composition }}</span>
            </div>

            <p class="modal-desc">{{ product.description }}</p>

            <div class="tech-table">
              <div class="tech-row" *ngFor="let spec of product.specifications">
                <span class="tech-key">{{ spec.key }}</span>
                <span class="tech-val">{{ spec.value }}</span>
              </div>
            </div>

            <div class="modal-actions">
              <button class="btn-editorial-copper" (click)="enquireOnThisProduct()">
                <span>REQUEST SPEC SHEET & SAMPLES</span>
                <app-icon name="arrow-right" [size]="16"></app-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal-overlay {
      position: fixed;
      inset: 0;
      background-color: rgba(22, 23, 20, 0.82);
      backdrop-filter: blur(8px);
      z-index: 10005;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: clamp(1rem, 3vw, 2.5rem);
      animation: modalFadeIn 0.3s ease;
    }

    .modal-container {
      background-color: var(--color-warm-ivory);
      color: var(--color-charcoal);
      width: 100%;
      max-width: 960px;
      max-height: 90vh;
      overflow-y: auto;
      border: 1px solid var(--color-border-stone);
      position: relative;
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.35);
      border-radius: 2px;
    }

    .modal-close {
      position: absolute;
      top: 18px;
      right: 18px;
      z-index: 10;
      background: var(--color-charcoal);
      color: var(--color-warm-ivory);
      width: 38px;
      height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 2px;
      transition: background-color var(--transition-fast);

      &:hover {
        background-color: var(--color-muted-copper);
      }
    }

    .modal-body {
      display: grid;
      grid-template-columns: 1fr;

      @media (min-width: 768px) {
        grid-template-columns: 1fr 1.2fr;
      }
    }

    .modal-media {
      position: relative;
      min-height: 320px;
      background-color: var(--color-stone-light);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .media-badge {
        position: absolute;
        bottom: 16px;
        left: 16px;
      }
    }

    .modal-details {
      padding: clamp(1.75rem, 3.5vw, 3rem);
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .modal-title {
      font-size: clamp(1.8rem, 2.8vw, 2.5rem);
      line-height: 1.1;
      margin-bottom: 4px;
    }

    .spec-highlight {
      font-size: 0.85rem;
      display: flex;
      gap: 8px;
      line-height: 1.4;

      .spec-label {
        font-family: var(--font-marker);
        font-size: 0.7rem;
        letter-spacing: 0.15em;
        color: var(--color-muted-copper);
      }

      .spec-value {
        font-weight: 600;
      }
    }

    .modal-desc {
      font-size: 0.95rem;
      line-height: 1.65;
      color: rgba(32, 33, 30, 0.8);
      border-top: 1px solid var(--color-border-stone);
      padding-top: 14px;
    }

    .tech-table {
      border: 1px solid var(--color-border-stone);
      background-color: rgba(255, 255, 255, 0.6);
      margin-top: 4px;
    }

    .tech-row {
      display: flex;
      justify-content: space-between;
      padding: 10px 14px;
      font-size: 0.825rem;
      border-bottom: 1px solid var(--color-border-stone);

      &:last-child {
        border-bottom: none;
      }
    }

    .tech-key {
      font-family: var(--font-marker);
      font-size: 0.68rem;
      letter-spacing: 0.15em;
      color: rgba(32, 33, 30, 0.6);
      text-transform: uppercase;
    }

    .tech-val {
      font-weight: 600;
      color: var(--color-charcoal);
    }

    .modal-actions {
      margin-top: 12px;
    }

    @keyframes modalFadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `]
})
export class ProductModalComponent {
  @Input() product: ProductItem | null = null;
  @Output() close = new EventEmitter<void>();

  private router = inject(Router);
  private enquiryService = inject(EnquiryService);

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.close.emit();
    }
  }

  enquireOnThisProduct(): void {
    if (this.product) {
      this.enquiryService.setProductForEnquiry(this.product.name);
      this.close.emit();
      this.router.navigate(['/contact']);
    }
  }
}

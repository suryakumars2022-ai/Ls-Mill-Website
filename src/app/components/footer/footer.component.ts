import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TextileDataService } from '../../services/textile-data.service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  template: `
    <footer class="ls-footer bg-charcoal">
      <!-- Animated Textile Thread Divider -->
      <div class="footer-thread-line"></div>

      <div class="ls-container footer-body">
        <div class="ls-grid-12 footer-grid">
          <!-- Col 1: Brand & Philosophy (5 Cols) -->
          <div class="footer-col brand-col">
            <div class="footer-wordmark">
              <span class="wordmark-primary">LS MILLS</span>
              <span class="wordmark-secondary">LIMITED</span>
            </div>
            <p class="brand-tagline">
              Textile expertise rooted in manufacturing discipline. High-performance spinning, precision weaving, and crafted home textiles engineered for global standards.
            </p>

            <div class="editorial-origin">
              <app-icon name="map-pin" [size]="14"></app-icon>
              <span>THENI, TAMIL NADU, INDIA</span>
            </div>
          </div>

          <!-- Col 2: Navigation Links (3 Cols) -->
          <div class="footer-col nav-col">
            <h4 class="col-title">NAVIGATION</h4>
            <ul class="col-list">
              <li *ngFor="let item of navItems">
                <a [routerLink]="item.route" class="col-link">{{ item.label }}</a>
              </li>
            </ul>
          </div>

          <!-- Col 3: Manufacturing Capabilities (2 Cols) -->
          <div class="footer-col">
            <h4 class="col-title">DIVISIONS</h4>
            <ul class="col-list">
              <li><a routerLink="/products" [queryParams]="{category: 'yarn'}" class="col-link">Spinning & Yarn</a></li>
              <li><a routerLink="/products" [queryParams]="{category: 'fabric'}" class="col-link">Woven Fabrics</a></li>
              <li><a routerLink="/products" [queryParams]="{category: 'home-textile'}" class="col-link">Home Textiles</a></li>
              <li><a routerLink="/manufacturing" class="col-link">Quality Labs</a></li>
              <li><a routerLink="/sustainability" class="col-link">Resource Care</a></li>
            </ul>
          </div>

          <!-- Col 4: Dispatch & Enquiry (2 Cols) -->
          <div class="footer-col">
            <h4 class="col-title">OPERATIONS</h4>
            <div class="contact-brief">
              <p class="brief-item">
                <span class="label">LOCATION</span>
                <span class="value">Theni District, Tamil Nadu — 625 531</span>
              </p>
              <p class="brief-item">
                <span class="label">ENQUIRY</span>
                <a routerLink="/contact" class="link-enquiry">Official Desk &rarr;</a>
              </p>
              <p class="brief-item">
                <span class="label">COMMUNICATIONS</span>
                <span class="value">Direct business inquiries verified by management.</span>
              </p>
            </div>
          </div>
        </div>

        <!-- Subtle Textile Horizontal Ruler -->
        <hr class="thread-divider" />

        <!-- Bottom Bar: Legal & Attribution -->
        <div class="footer-bottom">
          <div class="copyright">
            &copy; {{ currentYear }} LS Mills Limited. All rights reserved. Industrial Editorial Design.
          </div>
          <div class="legal-links">
            <a routerLink="/contact" class="legal-link">Business Desk</a>
            <span class="sep">&bull;</span>
            <a routerLink="/sustainability" class="legal-link">Operating Principles</a>
            <span class="sep">&bull;</span>
            <button class="back-to-top" (click)="scrollToTop()" aria-label="Back to top">
              <span>BACK TO TOP</span>
              <app-icon name="arrow-up-right" [size]="14"></app-icon>
            </button>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .ls-footer {
      position: relative;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      overflow: hidden;
    }

    .footer-thread-line {
      height: 2px;
      width: 100%;
      background: linear-gradient(
        90deg,
        transparent 0%,
        var(--color-muted-copper) 25%,
        var(--color-copper-light) 50%,
        var(--color-muted-copper) 75%,
        transparent 100%
      );
      opacity: 0.8;
    }

    .footer-body {
      padding-top: clamp(4rem, 6vw, 6.5rem);
      padding-bottom: 2.5rem;
    }

    .footer-grid {
      row-gap: 48px;
      margin-bottom: clamp(3rem, 5vw, 5rem);
    }

    .brand-col {
      grid-column: span 12;
      @media (min-width: 992px) {
        grid-column: span 5;
        padding-right: 3rem;
      }
    }

    .nav-col {
      grid-column: span 6;
      @media (min-width: 768px) {
        grid-column: span 3;
      }
      @media (min-width: 992px) {
        grid-column: span 2;
      }
    }

    .footer-col {
      &:nth-child(3) {
        grid-column: span 6;
        @media (min-width: 768px) {
          grid-column: span 3;
        }
        @media (min-width: 992px) {
          grid-column: span 2;
        }
      }
      &:nth-child(4) {
        grid-column: span 12;
        @media (min-width: 768px) {
          grid-column: span 6;
        }
        @media (min-width: 992px) {
          grid-column: span 3;
        }
      }
    }

    .footer-wordmark {
      display: flex;
      align-items: baseline;
      gap: 8px;
      margin-bottom: 1.25rem;
    }

    .wordmark-primary {
      font-family: var(--font-serif);
      font-size: 2rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      color: var(--color-warm-ivory);
      line-height: 1;
    }

    .wordmark-secondary {
      font-family: var(--font-marker);
      font-size: 0.75rem;
      letter-spacing: 0.25em;
      color: var(--color-muted-copper);
    }

    .brand-tagline {
      font-size: 0.95rem;
      line-height: 1.7;
      color: rgba(244, 241, 232, 0.7);
      margin-bottom: 1.5rem;
      max-width: 420px;
    }

    .editorial-origin {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-family: var(--font-marker);
      font-size: 0.7rem;
      letter-spacing: 0.2em;
      color: var(--color-copper-light);
      border: 1px solid rgba(166, 108, 75, 0.35);
      padding: 6px 12px;
      border-radius: 2px;
    }

    .col-title {
      font-family: var(--font-marker);
      font-size: 0.75rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--color-warm-ivory);
      margin-bottom: 1.5rem;
      font-weight: 600;
    }

    .col-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .col-link {
      font-size: 0.9rem;
      color: rgba(244, 241, 232, 0.65);
      transition: color var(--transition-fast), padding-left var(--transition-fast);

      &:hover {
        color: var(--color-copper-light);
        padding-left: 4px;
      }
    }

    .contact-brief {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .brief-item {
      display: flex;
      flex-direction: column;
      gap: 4px;

      .label {
        font-family: var(--font-marker);
        font-size: 0.65rem;
        letter-spacing: 0.2em;
        color: var(--color-muted-copper);
      }

      .value {
        font-size: 0.85rem;
        color: rgba(244, 241, 232, 0.7);
        line-height: 1.5;
      }

      .link-enquiry {
        font-size: 0.85rem;
        color: var(--color-warm-ivory);
        font-weight: 600;
        letter-spacing: 0.05em;

        &:hover {
          color: var(--color-copper-light);
        }
      }
    }

    .footer-bottom {
      display: flex;
      flex-direction: column;
      gap: 16px;
      align-items: center;
      justify-content: space-between;
      padding-top: 2rem;
      font-size: 0.8rem;
      color: rgba(244, 241, 232, 0.5);

      @media (min-width: 768px) {
        flex-direction: row;
      }
    }

    .legal-links {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .legal-link {
      color: inherit;
      transition: color var(--transition-fast);

      &:hover {
        color: var(--color-warm-ivory);
      }
    }

    .sep {
      opacity: 0.4;
    }

    .back-to-top {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: var(--color-copper-light);
      font-family: var(--font-marker);
      font-size: 0.7rem;
      letter-spacing: 0.15em;
      transition: color var(--transition-fast);

      &:hover {
        color: var(--color-warm-ivory);
      }
    }
  `]
})
export class FooterComponent {
  private dataService = inject(TextileDataService);
  navItems = this.dataService.navItems;
  currentYear = new Date().getFullYear();

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

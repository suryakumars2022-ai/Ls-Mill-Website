import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TextileDataService } from '../../services/textile-data.service';
import { IconComponent } from '../icon/icon.component';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent, LogoComponent],
  template: `
    <footer class="ls-footer bg-charcoal">
      <!-- Animated Textile Thread Divider -->
      <div class="footer-thread-line"></div>

      <div class="ls-container footer-body">
        <div class="ls-grid-12 footer-grid">
          <!-- Col 1: Brand & Contact Info (6 Cols) -->
          <div class="footer-col brand-col">
            <div class="footer-brand-wrap">
              <app-logo [variant]="'horizontal'" [theme]="'light'"></app-logo>
            </div>

            <!-- CONTACT & OFFICES block -->
            <div class="footer-contact-block">
              <h4 class="col-title">CONTACT &amp; OFFICES</h4>
              <div class="contact-brief-grid">
                <div class="brief-item">
                  <span class="label">HEADQUARTERS</span>
                  <span class="value">
                    <strong>LS Mills Limited</strong><br />
                    #351, Madurai Road,<br />
                    Theni - 625531. India.
                  </span>
                </div>
                <div class="brief-item">
                  <span class="label">COMMERCIAL DESK</span>
                  <span class="value">
                    +91 80125 32502 -05<br />
                    Fax: +91 4546 252742<br />
                    info&#64;lsmills.in
                  </span>
                </div>
                <div class="brief-item">
                  <span class="label">SHOW ROOM ADDRESS</span>
                  <span class="value">
                    Suite # 510, 5th Floor,<br />
                    230 Fifth Avenue,<br />
                    NY – 10001<br />
                    Tel: 646 492 1835
                  </span>
                </div>
              </div>
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

          <!-- Col 3: Manufacturing Capabilities (3 Cols) -->
          <div class="footer-col divisions-col">
            <h4 class="col-title">DIVISIONS</h4>
            <ul class="col-list">
              <li><a routerLink="/products" [queryParams]="{category: 'yarn'}" class="col-link">Spinning &amp; Yarn</a></li>
              <li><a routerLink="/products" [queryParams]="{category: 'fabric'}" class="col-link">Woven Fabrics</a></li>
              <li><a routerLink="/products" [queryParams]="{category: 'home-textile'}" class="col-link">Home Textiles</a></li>
              <li><a routerLink="/manufacturing" class="col-link">Quality Labs</a></li>
              <li><a routerLink="/sustainability" class="col-link">Resource Care</a></li>
            </ul>
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
      background-color: var(--color-forest-green);
      color: var(--color-cotton-ivory);
      border-top: 1px solid rgba(214, 168, 95, 0.25);
      overflow: hidden;
    }

    .footer-thread-line {
      height: 2px;
      width: 100%;
      background: linear-gradient(
        90deg,
        transparent 0%,
        var(--color-harvest-gold) 25%,
        var(--color-harvest-gold-light) 50%,
        var(--color-harvest-gold) 75%,
        transparent 100%
      );
      opacity: 0.9;
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
        grid-column: span 6;
        padding-right: 2.5rem;
      }
    }

    .nav-col {
      grid-column: span 6;
      @media (min-width: 768px) {
        grid-column: span 6;
      }
      @media (min-width: 992px) {
        grid-column: span 3;
      }
    }

    .divisions-col {
      grid-column: span 6;
      @media (min-width: 768px) {
        grid-column: span 6;
      }
      @media (min-width: 992px) {
        grid-column: span 3;
      }
    }

    .footer-brand-wrap {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 1.25rem;
      flex-wrap: wrap;
    }

    .footer-logo-img {
      height: 36px;
      width: auto;
      max-width: 120px;
      object-fit: contain;
      background-color: #FFFFFF;
      padding: 3px 6px;
      border-radius: 2px;
    }

    .footer-wordmark {
      display: flex;
      align-items: baseline;
      gap: 8px;
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

    .footer-contact-block {
      margin-top: 1.75rem;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(243, 240, 229, 0.12);

      .col-title {
        font-family: var(--font-marker);
        font-size: 0.72rem;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: var(--color-warm-ivory);
        margin-bottom: 1.25rem;
        font-weight: 600;
      }
    }

    .contact-brief-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 16px;

      @media (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
      }
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
  logoUrl = this.dataService.assets.brand.logo;
  logoFailed = false;
  currentYear = new Date().getFullYear();

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

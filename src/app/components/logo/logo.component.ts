import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="ls-logo-container"
      [ngClass]="[
        'variant-' + variant,
        'theme-' + theme
      ]"
      [attr.aria-label]="'LS Mills Limited Logo'"
    >
      <!-- Official LS Mills SVG Emblem Badge -->
      <div
        class="logo-mark-wrap"
        [style.width.px]="markSize"
        [style.height.px]="markSize"
      >
        <img
          src="/Ls_Mill_logo.svg"
          alt="LS Mills Limited Official Emblem"
          class="official-logo-img"
          loading="eager"
        />
      </div>

      <!-- Brand Typography (Rendered for horizontal variant) -->
      <div class="logo-typography" *ngIf="variant === 'horizontal'">
        <div class="brand-row-main">
          <span class="brand-name">LS MILLS LIMITED</span>
        </div>
        <div class="brand-row-sub">
          <span class="brand-tagline">SYNERGY OF ELEMENTS</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: inline-block;
      vertical-align: middle;
    }

    .ls-logo-container {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      transition: opacity var(--transition-fast, 0.2s ease);
      user-select: none;

      &:hover {
        opacity: 0.94;
      }
    }

    /* Official Logo Mark Frame */
    .logo-mark-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      overflow: hidden;
      flex-shrink: 0;
      background-color: #FFFFFF;
      border: 1px solid rgba(214, 168, 95, 0.45);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
      transition: transform var(--transition-fast, 0.2s ease), border-color var(--transition-fast, 0.2s ease);

      &:hover {
        border-color: var(--color-harvest-gold, #D6A85F);
        transform: scale(1.03);
      }

      .official-logo-img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        display: block;
      }
    }

    /* ----------------------------------------------------------------------
       THEME STYLING
       ---------------------------------------------------------------------- */
    /* Theme: Dark (used on light backgrounds like Cotton Ivory) */
    .theme-dark {
      --logo-text: #183D32;         /* Forest Green */
      --logo-subtext: #789078;      /* Leaf Sage */
      --logo-accent: #D6A85F;       /* Harvest Gold */
    }

    /* Theme: Light (used on dark backgrounds like Forest Green hero/footer) */
    .theme-light {
      --logo-text: #F3F0E5;         /* Cotton Ivory */
      --logo-subtext: #D6A85F;      /* Harvest Gold */
      --logo-accent: #D6A85F;       /* Harvest Gold */
    }

    /* ----------------------------------------------------------------------
       TYPOGRAPHY
       ---------------------------------------------------------------------- */
    .logo-typography {
      display: flex;
      flex-direction: column;
      line-height: 1;
      gap: 3px;
    }

    .brand-row-main {
      display: flex;
      align-items: baseline;
      gap: 6px;
    }

    .brand-name {
      font-family: var(--font-serif, 'Cormorant Garamond', Georgia, serif);
      font-size: 1.35rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      color: var(--logo-text, #F3F0E5);
      text-transform: uppercase;
      white-space: nowrap;
    }

    .brand-row-sub {
      display: flex;
      align-items: center;
      gap: 6px;
      font-family: var(--font-sans, 'Plus Jakarta Sans', sans-serif);
      font-size: 0.62rem;
      font-weight: 600;
      letter-spacing: 0.22em;
      color: var(--logo-subtext, #D6A85F);
      text-transform: uppercase;
    }

    .brand-sub-sep {
      opacity: 0.6;
      color: var(--logo-accent, #D6A85F);
      font-size: 0.5rem;
    }

    /* Compact Symbol Variant */
    .variant-symbol .logo-typography {
      display: none;
    }
  `]
})
export class LogoComponent {
  /** 'horizontal' (mark + wordmark) or 'symbol' (mark only) */
  @Input() variant: 'horizontal' | 'symbol' = 'horizontal';

  /** 'dark' (for light backgrounds) or 'light' (for dark backgrounds) */
  @Input() theme: 'dark' | 'light' = 'dark';

  /** SVG Mark pixel size (width & height) */
  @Input() markSize = 44;
}

import { Component, HostListener, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { TextileDataService } from '../../services/textile-data.service';
import { IconComponent } from '../icon/icon.component';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  template: `
    <!-- Top Scroll Progress Line -->
    <div
      class="scroll-progress-bar"
      [style.width.%]="scrollProgress"
      role="progressbar"
      [attr.aria-valuenow]="scrollProgress"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label="Page scroll progress"
    ></div>

    <!-- Main Editorial Navbar -->
    <header
      class="ls-header"
      [ngClass]="{
        'scrolled': isScrolled,
        'menu-open': isMobileMenuOpen,
        'on-dark-page': isDarkPage
      }"
    >
      <div class="ls-container navbar-inner">
        <!-- Brand Wordmark -->
        <a routerLink="/" class="brand-wordmark" (click)="closeMobileMenu()" aria-label="LS Mills Limited Home">
          <span class="brand-title">LS MILLS</span>
          <span class="brand-subtitle">THENI / INDIA</span>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="desktop-nav" aria-label="Main Navigation">
          <ul class="nav-list">
            <li *ngFor="let item of navItems" class="nav-item">
              <a
                [routerLink]="item.route"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: item.route === '/' }"
                class="nav-link"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </nav>

        <!-- Right Action Button & Mobile Toggle -->
        <div class="header-actions">
          <a routerLink="/contact" class="nav-cta-btn">
            <span>GET IN TOUCH</span>
            <app-icon name="arrow-up-right" [size]="14"></app-icon>
          </a>

          <!-- Mobile Hamburger Toggle -->
          <button
            class="mobile-toggle-btn"
            (click)="toggleMobileMenu()"
            [attr.aria-expanded]="isMobileMenuOpen"
            aria-controls="mobile-nav-drawer"
            aria-label="Toggle navigation menu"
          >
            <app-icon [name]="isMobileMenuOpen ? 'x' : 'menu'" [size]="24"></app-icon>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Drawer Overlay -->
    <div
      class="mobile-drawer-backdrop"
      [ngClass]="{ 'active': isMobileMenuOpen }"
      (click)="closeMobileMenu()"
      *ngIf="isMobileMenuOpen"
      aria-hidden="true"
    ></div>

    <!-- Mobile Navigation Drawer -->
    <div
      id="mobile-nav-drawer"
      class="mobile-drawer"
      [ngClass]="{ 'open': isMobileMenuOpen }"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      <div class="drawer-header">
        <div class="drawer-brand">
          <span class="brand-title">LS MILLS</span>
          <span class="drawer-geo">THENI, TAMIL NADU / INDIA</span>
        </div>
        <button class="drawer-close" (click)="closeMobileMenu()" aria-label="Close navigation menu">
          <app-icon name="x" [size]="22"></app-icon>
        </button>
      </div>

      <nav class="drawer-nav">
        <ul class="drawer-list">
          <li *ngFor="let item of navItems; let i = index" class="drawer-item">
            <a
              [routerLink]="item.route"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: item.route === '/' }"
              (click)="closeMobileMenu()"
              class="drawer-link"
            >
              <span class="drawer-num">0{{ i + 1 }}</span>
              <span class="drawer-label">{{ item.label }}</span>
              <app-icon name="arrow-right" [size]="16" class="drawer-arrow"></app-icon>
            </a>
          </li>
        </ul>
      </nav>

      <div class="drawer-footer">
        <div class="drawer-motto">TEXTILE EXPERTISE ROOTED IN MANUFACTURING DISCIPLINE</div>
        <a routerLink="/contact" (click)="closeMobileMenu()" class="btn-editorial-copper w-full">
          <span>BUSINESS ENQUIRY</span>
          <app-icon name="arrow-right" [size]="16"></app-icon>
        </a>
      </div>
    </div>
  `,
  styles: [`
    .ls-header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 76px;
      z-index: 10000;
      transition: background-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                  border-color 0.4s ease,
                  backdrop-filter 0.4s ease,
                  box-shadow 0.4s ease;
      background-color: transparent;
      border-bottom: 1px solid rgba(255, 255, 255, 0.12);
      color: #FFFFFF;
    }

    .ls-header.scrolled {
      background-color: rgba(32, 33, 30, 0.94);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
      color: var(--color-warm-ivory);
    }

    .navbar-inner {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    /* Wordmark */
    .brand-wordmark {
      display: flex;
      flex-direction: column;
      gap: 2px;
      color: inherit;
    }

    .brand-title {
      font-family: var(--font-serif);
      font-size: 1.55rem;
      font-weight: 600;
      letter-spacing: 0.14em;
      line-height: 1;
      text-transform: uppercase;
    }

    .brand-subtitle {
      font-family: var(--font-marker);
      font-size: 0.58rem;
      letter-spacing: 0.28em;
      opacity: 0.75;
      text-transform: uppercase;
    }

    /* Desktop Links */
    .desktop-nav {
      display: none;
    }

    @media (min-width: 1024px) {
      .desktop-nav {
        display: block;
      }
    }

    .nav-list {
      display: flex;
      align-items: center;
      list-style: none;
      gap: clamp(18px, 2.2vw, 36px);
    }

    .nav-link {
      font-family: var(--font-sans);
      font-size: 0.825rem;
      font-weight: 500;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: inherit;
      opacity: 0.85;
      position: relative;
      padding: 6px 0;
      transition: opacity var(--transition-fast), color var(--transition-fast);

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: var(--color-muted-copper);
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      }

      &:hover {
        opacity: 1;
        color: var(--color-copper-light);

        &::after {
          transform: scaleX(1);
          transform-origin: left;
        }
      }

      &.active {
        opacity: 1;
        color: var(--color-copper-light);

        &::after {
          transform: scaleX(1);
          background-color: var(--color-muted-copper);
        }
      }
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .nav-cta-btn {
      display: none;
      align-items: center;
      gap: 6px;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      padding: 8px 18px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 2px;
      color: inherit;
      transition: all var(--transition-fast);

      &:hover {
        background-color: var(--color-muted-copper);
        border-color: var(--color-muted-copper);
        color: #FFFFFF;
      }

      @media (min-width: 768px) {
        display: inline-flex;
      }
    }

    .mobile-toggle-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 42px;
      height: 42px;
      color: inherit;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 2px;
      transition: border-color var(--transition-fast);

      &:hover {
        border-color: var(--color-muted-copper);
      }

      @media (min-width: 1024px) {
        display: none;
      }
    }

    /* Mobile Drawer */
    .mobile-drawer-backdrop {
      position: fixed;
      inset: 0;
      background-color: rgba(22, 23, 20, 0.7);
      backdrop-filter: blur(4px);
      z-index: 10002;
      animation: fadeIn 0.3s ease;
    }

    .mobile-drawer {
      position: fixed;
      top: 0;
      right: 0;
      width: min(85vw, 420px);
      height: 100vh;
      background-color: var(--color-charcoal);
      color: var(--color-warm-ivory);
      z-index: 10003;
      padding: 32px 28px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: -10px 0 40px rgba(0, 0, 0, 0.4);
      transform: translateX(100%);
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      overflow-y: auto;

      &.open {
        transform: translateX(0);
      }
    }

    .drawer-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 24px;
    }

    .drawer-geo {
      display: block;
      font-family: var(--font-marker);
      font-size: 0.62rem;
      letter-spacing: 0.22em;
      opacity: 0.6;
      margin-top: 6px;
    }

    .drawer-close {
      color: var(--color-warm-ivory);
      padding: 6px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 2px;
    }

    .drawer-list {
      list-style: none;
      padding: 32px 0;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .drawer-link {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 12px 0;
      color: var(--color-warm-ivory);
      font-size: 1.15rem;
      font-family: var(--font-serif);
      letter-spacing: 0.05em;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      transition: color var(--transition-fast), padding-left var(--transition-fast);

      &:hover, &.active {
        color: var(--color-copper-light);
        padding-left: 8px;
      }
    }

    .drawer-num {
      font-family: var(--font-marker);
      font-size: 0.7rem;
      letter-spacing: 0.15em;
      color: var(--color-muted-copper);
    }

    .drawer-label {
      flex-grow: 1;
    }

    .drawer-arrow {
      opacity: 0.5;
    }

    .drawer-footer {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 24px;
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    .drawer-motto {
      font-family: var(--font-marker);
      font-size: 0.65rem;
      letter-spacing: 0.18em;
      line-height: 1.5;
      opacity: 0.5;
      text-transform: uppercase;
    }

    .w-full {
      width: 100%;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `]
})
export class NavbarComponent implements OnInit, OnDestroy {
  private dataService = inject(TextileDataService);
  private router = inject(Router);

  navItems = this.dataService.navItems;
  isScrolled = false;
  isMobileMenuOpen = false;
  isDarkPage = false;
  scrollProgress = 0;
  private routerSub?: Subscription;

  ngOnInit(): void {
    this.routerSub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.closeMobileMenu();
        this.checkScrollPosition();
      });
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.checkScrollPosition();
  }

  @HostListener('window:keydown.escape')
  onEscapeKey(): void {
    if (this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  private checkScrollPosition(): void {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollY > 50;

    const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.scrollProgress = winHeight > 0 ? (scrollY / winHeight) * 100 : 0;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }
}

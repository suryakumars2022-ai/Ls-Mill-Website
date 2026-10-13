import { Component, HostListener, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      *ngIf="isVisible() && !isTouchDevice()"
      class="cursor-dot"
      [style.transform]="'translate3d(' + dotX() + 'px, ' + dotY() + 'px, 0)'"
      [class.active]="isHovering()"
    ></div>

    <div
      *ngIf="isVisible() && !isTouchDevice()"
      class="cursor-ring"
      [style.transform]="'translate3d(' + ringX() + 'px, ' + ringY() + 'px, 0)'"
      [class.active]="isHovering()"
    ></div>
  `,
  styles: [`
    :host {
      pointer-events: none;
      position: fixed;
      inset: 0;
      z-index: 99999;
      overflow: hidden;
      display: block;
    }

    .cursor-dot {
      position: fixed;
      top: -4px;
      left: -4px;
      width: 8px;
      height: 8px;
      background-color: var(--color-muted-copper);
      border-radius: 50%;
      pointer-events: none;
      transition: transform 0.05s linear, opacity 0.2s, background-color 0.2s, width 0.2s, height 0.2s;
      z-index: 100000;
      will-change: transform;

      &.active {
        background-color: var(--color-copper-light);
        width: 12px;
        height: 12px;
        top: -6px;
        left: -6px;
      }
    }

    .cursor-ring {
      position: fixed;
      top: -20px;
      left: -20px;
      width: 40px;
      height: 40px;
      border: 1px solid rgba(214, 168, 95, 0.5);
      border-radius: 50%;
      pointer-events: none;
      transition: transform 0.15s cubic-bezier(0.16, 1, 0.3, 1),
                  width 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                  height 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                  border-color 0.3s,
                  opacity 0.2s;
      z-index: 99999;
      will-change: transform;

      &.active {
        width: 60px;
        height: 60px;
        top: -30px;
        left: -30px;
        border-color: rgba(214, 168, 95, 0.85);
        background-color: rgba(214, 168, 95, 0.08);
      }
    }

    @media (hover: none), (pointer: coarse) {
      :host {
        display: none !important;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      :host {
        display: none !important;
      }
    }
  `]
})
export class CustomCursorComponent implements OnInit, OnDestroy {
  dotX = signal(-100);
  dotY = signal(-100);
  ringX = signal(-100);
  ringY = signal(-100);
  isVisible = signal(false);
  isHovering = signal(false);
  isTouchDevice = signal(false);

  private targetX = -100;
  private targetY = -100;
  private animId?: number;

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const isTouch = window.matchMedia('(hover: none) or (pointer: coarse)').matches;
      this.isTouchDevice.set(isTouch);
      if (!isTouch) {
        this.startRingLoop();
      }
    }
  }

  ngOnDestroy(): void {
    if (this.animId) {
      cancelAnimationFrame(this.animId);
    }
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    if (this.isTouchDevice()) return;

    this.isVisible.set(true);
    this.targetX = e.clientX;
    this.targetY = e.clientY;
    this.dotX.set(e.clientX);
    this.dotY.set(e.clientY);

    // Check if target or parent is interactive
    const target = e.target as HTMLElement | null;
    if (target) {
      const isInteractive = !!target.closest(
        'a, button, input, select, textarea, [role="button"], [role="tab"], .capability-panel, .product-item-card, .stage-tab-btn'
      );
      this.isHovering.set(isInteractive);
    }
  }

  @HostListener('window:mouseleave')
  onMouseLeave(): void {
    this.isVisible.set(false);
  }

  private startRingLoop(): void {
    let currentX = this.dotX();
    let currentY = this.dotY();

    const loop = () => {
      // Smooth lerp for ring follower
      currentX += (this.targetX - currentX) * 0.18;
      currentY += (this.targetY - currentY) * 0.18;
      this.ringX.set(currentX);
      this.ringY.set(currentY);

      this.animId = requestAnimationFrame(loop);
    };

    this.animId = requestAnimationFrame(loop);
  }
}

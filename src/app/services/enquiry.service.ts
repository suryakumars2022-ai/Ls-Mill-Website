import { Injectable, signal } from '@angular/core';

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'error';
  title: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {
  // Preselected product when navigating from product catalogue to contact
  selectedProductForEnquiry = signal<string | null>(null);

  // Active toast notification
  activeToast = signal<ToastMessage | null>(null);

  setProductForEnquiry(productName: string): void {
    this.selectedProductForEnquiry.set(productName);
  }

  clearProductForEnquiry(): void {
    this.selectedProductForEnquiry.set(null);
  }

  showToast(type: 'success' | 'info' | 'error', title: string, message: string, durationMs: number = 6000): void {
    const toast: ToastMessage = {
      id: Math.random().toString(36).substring(2, 9),
      type,
      title,
      message
    };
    this.activeToast.set(toast);

    setTimeout(() => {
      if (this.activeToast()?.id === toast.id) {
        this.activeToast.set(null);
      }
    }, durationMs);
  }

  dismissToast(): void {
    this.activeToast.set(null);
  }
}

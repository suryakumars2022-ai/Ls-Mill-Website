import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnquiryService } from '../../services/enquiry.service';
import { IconComponent } from '../../components/icon/icon.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, IconComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  private fb = inject(FormBuilder);
  private enquiryService = inject(EnquiryService);

  contactForm!: FormGroup;
  isSubmitting = false;
  submitSuccess = false;

  // Selected commercial topic for FAQ/quick assist
  activeTopic = 'yarn';

  ngOnInit(): void {
    const prefilledProduct = this.enquiryService.selectedProductForEnquiry();

    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      companyName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+\s\-()]{7,20}$/)]],
      country: ['India', [Validators.required]],
      enquiryType: [prefilledProduct ? 'product' : 'yarn', [Validators.required]],
      specificProduct: [prefilledProduct || ''],
      message: [
        prefilledProduct
          ? `We would like to request a formal quotation, sample swatches, and technical specification sheet for: ${prefilledProduct}.`
          : '',
        [Validators.required, Validators.minLength(10)]
      ],
      acceptedTerms: [false, [Validators.requiredTrue]]
    });

    if (prefilledProduct) {
      this.enquiryService.clearProductForEnquiry();
    }
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.enquiryService.showToast('error', 'Form Incomplete', 'Please check highlighted fields and accept terms.');
      return;
    }

    this.isSubmitting = true;

    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.enquiryService.showToast(
        'success',
        'Enquiry Received (Demonstration)',
        `Thank you ${this.contactForm.value.fullName}. Your commercial communication has been validated and recorded.`
      );
      this.contactForm.reset({
        country: 'India',
        enquiryType: 'yarn',
        acceptedTerms: false
      });
    }, 1200);
  }

  resetForm(): void {
    this.submitSuccess = false;
  }
}

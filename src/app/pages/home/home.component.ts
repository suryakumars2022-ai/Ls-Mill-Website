import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TextileDataService } from '../../services/textile-data.service';
import { EnquiryService } from '../../services/enquiry.service';
import { IconComponent } from '../../components/icon/icon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, IconComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private dataService = inject(TextileDataService);
  private enquiryService = inject(EnquiryService);
  private fb = inject(FormBuilder);

  journeyStages = this.dataService.journeyStages;
  capabilities = this.dataService.capabilities;

  // Signature Interaction: Active Textile Journey Stage (0 to 4)
  activeStageIndex = 0;

  // Active Capability Panel (defaults to 0: Spinning)
  activeCapabilityId = 'spinning';

  // Contact Form
  enquiryForm!: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  ngOnInit(): void {
    this.initForm();

    // Check if a product was requested
    const prefilledProduct = this.enquiryService.selectedProductForEnquiry();
    if (prefilledProduct) {
      this.enquiryForm.patchValue({
        enquiryType: 'product',
        specificProduct: prefilledProduct,
        message: `Hello, we are interested in receiving technical specifications and pricing for: ${prefilledProduct}.`
      });
      this.enquiryService.clearProductForEnquiry();
    }
  }

  private initForm(): void {
    this.enquiryForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      companyName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+\s\-()]{7,20}$/)]],
      enquiryType: ['yarn', [Validators.required]],
      specificProduct: [''],
      message: ['', [Validators.required, Validators.minLength(10)]],
      acceptedTerms: [false, [Validators.requiredTrue]]
    });
  }

  setStage(index: number): void {
    this.activeStageIndex = index;
  }

  nextStage(): void {
    if (this.activeStageIndex < this.journeyStages.length - 1) {
      this.activeStageIndex++;
    } else {
      this.activeStageIndex = 0;
    }
  }

  prevStage(): void {
    if (this.activeStageIndex > 0) {
      this.activeStageIndex--;
    } else {
      this.activeStageIndex = this.journeyStages.length - 1;
    }
  }

  setCapability(id: string): void {
    this.activeCapabilityId = id;
  }

  onSubmitEnquiry(): void {
    if (this.enquiryForm.invalid) {
      this.enquiryForm.markAllAsTouched();
      this.enquiryService.showToast('error', 'Form Incomplete', 'Please fill in all required fields accurately.');
      return;
    }

    this.isSubmitting = true;
    this.submitError = false;

    // Simulate realistic frontend submission
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.enquiryService.showToast(
        'success',
        'Enquiry Received (Demonstration)',
        `Thank you ${this.enquiryForm.value.fullName}. Your business request has been captured in this frontend demonstration.`
      );
      this.enquiryForm.reset({
        enquiryType: 'yarn',
        acceptedTerms: false
      });
    }, 1200);
  }

  resetSuccessState(): void {
    this.submitSuccess = false;
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnquiryService } from '../../services/enquiry.service';
import { IconComponent } from '../../components/icon/icon.component';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, IconComponent],
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {
  private fb = inject(FormBuilder);
  private enquiryService = inject(EnquiryService);

  careerForm!: FormGroup;
  isSubmitting = false;
  submitSuccess = false;

  readonly departments = [
    {
      code: 'DEPT-01',
      title: 'Spinning & Ring Frame Operations',
      roles: 'Shift In-charges, Ring Frame Masters, Maintenance Technicians',
      focus: 'Monitoring spindle speeds, drafting gears, fiber breakage rates, and yarn hairiness.'
    },
    {
      code: 'DEPT-02',
      title: 'Weaving Shed Engineering',
      roles: 'Air-jet Loom Technicians, Warp Sizing Specialists, Pattern Masters',
      focus: 'Airjet nozzle calibrations, reed maintenance, warp tension optimization, and dobby setups.'
    },
    {
      code: 'DEPT-03',
      title: 'Physical Testing & Quality Assurance',
      roles: 'Textile Laboratory Analysts, USTER Specialists, Greige Inspectors',
      focus: 'HVI cotton testing, yarn tensile checks, 4-point fabric defect grading, and count audits.'
    },
    {
      code: 'DEPT-04',
      title: 'Commercial Supply & Logistics',
      roles: 'Export Documentation Officers, Dispatch Coordinators, Sourcing Associates',
      focus: 'International container bookings, palletized packing management, and raw cotton procurement.'
    }
  ];

  ngOnInit(): void {
    this.careerForm = this.fb.group({
      candidateName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+\s\-()]{7,20}$/)]],
      departmentInterest: ['Spinning & Ring Frame Operations', [Validators.required]],
      experienceYears: ['1-3', [Validators.required]],
      highestQualification: ['', [Validators.required]],
      statement: ['', [Validators.required, Validators.minLength(15)]],
      acknowledgeDemo: [false, [Validators.requiredTrue]]
    });
  }

  onSubmitApplication(): void {
    if (this.careerForm.invalid) {
      this.careerForm.markAllAsTouched();
      this.enquiryService.showToast('error', 'Form Incomplete', 'Please fill out all required fields to submit your expression of interest.');
      return;
    }

    this.isSubmitting = true;
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.enquiryService.showToast(
        'success',
        'Talent Enquiry Recorded',
        `Thank you ${this.careerForm.value.candidateName}. Your career profile expression has been registered in this frontend demonstration.`
      );
      this.careerForm.reset({
        departmentInterest: 'Spinning & Ring Frame Operations',
        experienceYears: '1-3',
        acknowledgeDemo: false
      });
    }, 1200);
  }

  resetApplication(): void {
    this.submitSuccess = false;
  }
}

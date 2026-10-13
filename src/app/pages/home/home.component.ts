import { Component, inject, OnInit, AfterViewInit, OnDestroy, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TextileDataService } from '../../services/textile-data.service';
import { EnquiryService } from '../../services/enquiry.service';
import { IconComponent } from '../../components/icon/icon.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { GalleryItem } from '../../models/textile.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    IconComponent,
    ScrollRevealDirective
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private dataService = inject(TextileDataService);
  private enquiryService = inject(EnquiryService);
  private fb = inject(FormBuilder);
  private hostEl = inject(ElementRef);

  journeyStages = this.dataService.journeyStages;
  coreDivisions = this.dataService.coreDivisions;
  capabilities = this.dataService.capabilities;
  companyProfile = this.dataService.companyProfile;
  galleryItems = this.dataService.galleryItems;
  assets = this.dataService.assets;

  // Image availability fallbacks
  heroImgFailed = false;
  yarnImgFailed = false;
  fabricImgFailed = false;
  homeTextileImgFailed = false;
  qualityImgFailed = false;

  // Active Textile Journey Stage (0 to 4)
  activeStageIndex = 0;

  // Active Capability Accordion ID
  activeCapabilityId = 'spinning';

  // Gallery Filter State
  activeGalleryCategory: 'all' | 'spinning' | 'weaving' | 'home-textile' | 'facilities' = 'all';

  // Gallery Lightbox State
  activeLightboxItem: GalleryItem | null = null;

  // Intersection Observer for sticky journey scroll tracking
  private journeyObserver?: IntersectionObserver;

  // Contact / Commercial Enquiry Form
  enquiryForm!: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  ngOnInit(): void {
    this.initForm();

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

  ngAfterViewInit(): void {
    this.initJourneyScrollObserver();
  }

  ngOnDestroy(): void {
    this.journeyObserver?.disconnect();
  }

  private initJourneyScrollObserver(): void {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const cards = this.hostEl.nativeElement.querySelectorAll('.journey-scroll-card');
    if (!cards || cards.length === 0) return;

    this.journeyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const indexAttr = entry.target.getAttribute('data-stage-index');
            if (indexAttr !== null) {
              const idx = parseInt(indexAttr, 10);
              if (!isNaN(idx) && idx >= 0 && idx < this.journeyStages.length) {
                this.activeStageIndex = idx;
              }
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -40% 0px',
        threshold: 0.3
      }
    );

    cards.forEach((card: Element) => this.journeyObserver?.observe(card));
  }

  setStage(index: number): void {
    this.activeStageIndex = index;
  }

  scrollToStage(index: number): void {
    this.activeStageIndex = index;
    const targetEl = this.hostEl.nativeElement.querySelector(`#stage-card-${index}`);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  nextStage(): void {
    const nextIdx = (this.activeStageIndex + 1) % this.journeyStages.length;
    this.scrollToStage(nextIdx);
  }

  prevStage(): void {
    const prevIdx = (this.activeStageIndex - 1 + this.journeyStages.length) % this.journeyStages.length;
    this.scrollToStage(prevIdx);
  }

  setCapability(id: string): void {
    this.activeCapabilityId = id;
  }

  // Gallery Filtering
  setGalleryCategory(category: 'all' | 'spinning' | 'weaving' | 'home-textile' | 'facilities'): void {
    this.activeGalleryCategory = category;
  }

  get filteredGallery(): GalleryItem[] {
    if (this.activeGalleryCategory === 'all') {
      return this.galleryItems;
    }
    return this.galleryItems.filter(item => item.category === this.activeGalleryCategory);
  }

  // Lightbox Controls
  openLightbox(item: GalleryItem): void {
    this.activeLightboxItem = item;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  closeLightbox(): void {
    this.activeLightboxItem = null;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }

  nextLightbox(): void {
    if (!this.activeLightboxItem) return;
    const currentList = this.filteredGallery;
    const idx = currentList.findIndex(i => i.id === this.activeLightboxItem?.id);
    const nextIdx = (idx + 1) % currentList.length;
    this.activeLightboxItem = currentList[nextIdx];
  }

  prevLightbox(): void {
    if (!this.activeLightboxItem) return;
    const currentList = this.filteredGallery;
    const idx = currentList.findIndex(i => i.id === this.activeLightboxItem?.id);
    const prevIdx = (idx - 1 + currentList.length) % currentList.length;
    this.activeLightboxItem = currentList[prevIdx];
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (!this.activeLightboxItem) return;
    if (event.key === 'Escape') {
      this.closeLightbox();
    } else if (event.key === 'ArrowRight') {
      this.nextLightbox();
    } else if (event.key === 'ArrowLeft') {
      this.prevLightbox();
    }
  }

  // Form Submission
  onSubmitEnquiry(): void {
    if (this.enquiryForm.invalid) {
      this.enquiryForm.markAllAsTouched();
      this.enquiryService.showToast('error', 'Form Incomplete', 'Please fill in all required fields accurately.');
      return;
    }

    this.isSubmitting = true;
    this.submitError = false;

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

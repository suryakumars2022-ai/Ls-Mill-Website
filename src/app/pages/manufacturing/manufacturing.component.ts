import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TextileDataService } from '../../services/textile-data.service';
import { IconComponent } from '../../components/icon/icon.component';

@Component({
  selector: 'app-manufacturing',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  templateUrl: './manufacturing.component.html',
  styleUrls: ['./manufacturing.component.scss']
})
export class ManufacturingComponent {
  private dataService = inject(TextileDataService);
  capabilities = this.dataService.capabilities;
  companyProfile = this.dataService.companyProfile;
  assets = this.dataService.assets;

  spinningImgFailed = false;
  weavingImgFailed = false;
  madeupImgFailed = false;

  // Active facility tab for inspection
  activeDivision = 'spinning';

  readonly qualityParameters = [
    {
      equipment: 'High Volume Instrument (HVI)',
      target: 'Fiber Screening',
      metric: 'Micronaire 3.8–4.2, Staple 29–34 mm, Strength > 30 g/tex'
    },
    {
      equipment: 'USTER Tester & Classimat',
      target: 'Yarn Evenness (U%)',
      metric: 'U% < 9.5%, Imperfection Index (IPI) within 5% Uster benchmark'
    },
    {
      equipment: 'Optical Yarn Clearers',
      target: 'Defect Elimination',
      metric: '100% elimination of polypropylene and dark foreign fibers during winding'
    },
    {
      equipment: 'Continuous Greige Inspection',
      target: 'Weave Defect Grading',
      metric: 'Adherence to 4-point ASTM D5430 inspection standard'
    },
    {
      equipment: 'Tensile & Tear Calibrator',
      target: 'Structural Tenacity',
      metric: 'Warp and Weft tensile verification exceeding export thresholds'
    }
  ];

  setDivision(id: string): void {
    this.activeDivision = id;
  }
}

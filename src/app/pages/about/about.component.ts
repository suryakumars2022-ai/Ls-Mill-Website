import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TextileDataService } from '../../services/textile-data.service';
import { IconComponent } from '../../components/icon/icon.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface DivisionFeature {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  primaryImage: string;
  secondaryImage: string;
  link: string;
  linkText: string;
}

interface ApproachPrinciple {
  number: string;
  title: string;
  icon: string;
  summary: string;
  details: string;
}

interface TheniCheckpoint {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
}

interface ShowcaseImage {
  id: string;
  title: string;
  division: string;
  image: string;
  caption: string;
  badge: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent, ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  private dataService = inject(TextileDataService);
  readonly companyProfile = this.dataService.companyProfile;
  readonly assets = this.dataService.assets;

  // Image fallback trackers
  heroImgFailed = false;
  storyMainFailed = false;
  dominantFactoryFailed = false;

  // Active showcase index
  activeShowcaseId = 'ring-spinning';

  readonly executiveProfile = {
    name: 'Mr. S. Manivannan',
    title: 'Managing Director',
    role: 'Executive Leadership & Heritage',
    quote: 'True industrial quality cannot be fabricated by marketing. It is built one spindle rotation and one warp tension at a time.',
    context: 'Under the visionary leadership of Mr. S. Manivannan since 1979, LS Mills Limited has evolved from a pioneering regional spinning mill in Theni into a trusted global supply chain partner with 150,000 spindles, wide-width airjet weaving, and international presence in New York.'
  };

  readonly coreDivisions: DivisionFeature[] = [
    {
      id: 'yarn-spinning',
      number: '01',
      title: 'Yarn & Spinning',
      subtitle: '150,000 Spindles · 25 Tonnes Daily Output',
      description: 'Precision-engineered ring spun, compact, SIRO slub, and gassed yarns manufactured from selected long staple Egyptian Giza, Supima, and organic cotton. Ultra-low hairiness and consistent tensile tenacity across counts Ne 40s to Ne 200s.',
      highlights: [
        'Compact spinning on Rieter, LMW, Muratec & SSM frames',
        'Ne 40s to Ne 200s counts in single, plied & SIRO slub',
        'Flame gassing & TFO twisting for zero-hairiness yarns'
      ],
      specs: [
        { label: 'Installed Spindles', value: '150,000 Spindles' },
        { label: 'Daily Capacity', value: '25 Tonnes / Day' },
        { label: 'Count Spectrum', value: 'Ne 40s to Ne 200s' },
        { label: 'Machinery Benchmark', value: 'LMW, Rieter, Muratec, SSM' }
      ],
      primaryImage: this.assets.spinning.ringFrames1,
      secondaryImage: this.assets.spinning.yarnCones,
      link: '/products',
      linkText: 'Explore Yarn Division'
    },
    {
      id: 'woven-fabrics',
      number: '02',
      title: 'Woven Fabrics',
      subtitle: 'Tsudakoma Airjet Looms · 200 to 1,500 Thread Count',
      description: 'High-speed airjet weaving integrated with precision Benninger warping and sizing. Producing luxury greige fabrics up to 340 cm width with uniform pick density, zero starting marks, and impeccable 4-point ASTM D5430 inspection grading.',
      highlights: [
        'Satin, percale, twill, dobby, Oxford & custom dobby stripes',
        'Wide-width weaving up to 340 cm for seamless luxury bedding',
        'Supple hand feel engineered for international retail dyeing'
      ],
      specs: [
        { label: 'Weaving Machinery', value: 'Tsudakoma Airjet Looms' },
        { label: 'Sizing & Warping', value: 'Benninger Precision Lines' },
        { label: 'Thread Count Range', value: '200 TC to 1,500 TC' },
        { label: 'Width Capacity', value: 'Up to 340 cm Greige Fabric' }
      ],
      primaryImage: this.assets.weaving.airjetLoom1,
      secondaryImage: this.assets.weaving.greyFabrics,
      link: '/products',
      linkText: 'Explore Fabric Weaving'
    },
    {
      id: 'home-textiles',
      number: '03',
      title: 'Home Textiles',
      subtitle: 'Dedicated Cut & Sew Unit · 6,000 Sheets per Shift',
      description: 'Forward integration into world-class bed linens, duvet sets, pillow shams, and hospitality ensembles. Automated cutting, mitered hems, and meticulous stitching catering directly to leading department stores across North America and Europe.',
      highlights: [
        '6,000 finished luxury sheets per day per shift',
        '230 Fifth Avenue, New York showroom for global buyers',
        'Custom packaging, bar-tacking, and retail-ready labeling'
      ],
      specs: [
        { label: 'Shift Capacity', value: '6,000 Sheets / Shift' },
        { label: 'International Base', value: '230 Fifth Ave, New York' },
        { label: 'Product Range', value: 'Sheet Sets, Duvets, Pillow Shams' },
        { label: 'Export Markets', value: 'USA, Europe, Middle East' }
      ],
      primaryImage: this.assets.madeups.stitchingUnit1,
      secondaryImage: this.assets.madeups.bedLinenInterior,
      link: '/products',
      linkText: 'Explore Home Linen Sets'
    }
  ];

  readonly approachPrinciples: ApproachPrinciple[] = [
    {
      number: '01',
      title: 'Quality',
      icon: 'award',
      summary: 'Uncompromising precision from raw fiber selection to finished product.',
      details: 'High Volume Instrument (HVI) testing for fiber micronaire, continuous online Uster sensors on all 150,000 ring spindles, and certified 4-point ASTM fabric inspection under ISO 9001 (Bureau Veritas).'
    },
    {
      number: '02',
      title: 'Technology',
      icon: 'cpu',
      summary: 'Automated European and Japanese machinery benchmarked for zero-defect production.',
      details: 'Investments in world benchmarks—Rieter, LMW, Muratec, Benninger, and Tsudakoma—coupled with computerized climate regulation across our spinning halls in Theni.'
    },
    {
      number: '03',
      title: 'People & Responsibility',
      icon: 'users',
      summary: 'Generational craftsmanship nurtured alongside environmental stewardship.',
      details: 'Over 1,200 skilled artisans and engineers supported by equitable workplace standards, captive solar photovoltaic power generation, and extensive rainwater harvesting systems.'
    }
  ];

  readonly theniNatureSteps: TheniCheckpoint[] = [
    {
      step: '01',
      title: 'Western Ghats Terroir',
      subtitle: 'The Mountain Corridor (10.01° N)',
      description: 'Theni is nestled in a fertile valley protected by the Western Ghats. The natural microclimate provides optimal atmospheric balance and pure groundwater indispensable for fine textile processing.',
      image: this.assets.theniNature.westernGhatsMisty,
      tag: 'ORIGIN & TERROIR'
    },
    {
      step: '02',
      title: 'Pure Cotton Bolls',
      subtitle: 'Ethical & Certified Fibers',
      description: 'We source certified long-staple cotton: Egyptian Giza, Supima, GOTS Organic Cotton, and BCI. Every fiber is harvested with reverence for the soil and tested for staple tenacity.',
      image: this.assets.theniNature.rawCottonBolls,
      tag: 'ORGANIC COTTON'
    },
    {
      step: '03',
      title: 'The Continuous Thread',
      subtitle: 'Artisan Precision to Global Loom',
      description: 'From natural cotton seed in Theni to compact yarn cones, high-density airjet weaves, and tailored sheets gracing bedrooms in New York and Paris—the thread connects nature with refined life.',
      image: this.assets.spinning.yarnCones,
      tag: 'TEXTILE CRAFT'
    }
  ];

  readonly showcaseImages: ShowcaseImage[] = [
    {
      id: 'factory-interior',
      title: 'Main Industrial Spinning Plant',
      division: 'Theni Central Facility',
      image: this.assets.about.factoryInterior,
      caption: 'Main manufacturing facility in Theni housing climate-controlled ring spinning halls, yarn winding lines, and laboratory metrology units.',
      badge: 'THENI FACILITY'
    },
    {
      id: 'ring-spinning',
      title: 'Compact Ring Spinning Frames',
      division: 'Yarn Division',
      image: this.assets.spinning.ringFrames1,
      caption: '150,000 spindles equipped with automated doffing and optical yarn clearers producing 25 tonnes of Ne 40s–Ne 200s daily.',
      badge: '150,000 SPINDLES'
    },
    {
      id: 'airjet-weaving',
      title: 'Tsudakoma Airjet Weaving Hall',
      division: 'Weaving Division',
      image: this.assets.weaving.airjetLoom1,
      caption: 'High-speed Tsudakoma airjet looms weaving 200 to 1,500 thread-count luxury greige fabrics with electronic dobby shedding.',
      badge: 'AIRJET LOOMS'
    },
    {
      id: 'fabric-inspection',
      title: '4-Point Greige Fabric Metrology',
      division: 'Fabric Inspection',
      image: this.assets.weaving.greyFabrics,
      caption: 'Illuminated 4-point ASTM D5430 fabric inspection tables verifying picks per inch, uniform width, and flawlessness.',
      badge: 'ASTM 4-POINT'
    },
    {
      id: 'cut-and-sew',
      title: 'Artisan Stitching & Cut-and-Sew',
      division: 'Home Textiles',
      image: this.assets.madeups.stitchingUnit1,
      caption: 'Dedicated cut-and-sew unit yielding 6,000 tailored luxury sheets per shift with bar-tacked corners and mitered hems.',
      badge: '6,000 SHEETS/SHIFT'
    },
    {
      id: 'testing-lab',
      title: 'Physical Testing & Quality Lab',
      division: 'Bureau Veritas ISO 9001',
      image: this.assets.quality.testingLab,
      caption: 'State-of-the-art metrology lab with High Volume Instrument (HVI) fiber testers, Uster testers, and tensile strength analyzers.',
      badge: 'ISO 9001 (BVC)'
    }
  ];

  selectShowcase(id: string): void {
    this.activeShowcaseId = id;
  }

  get activeShowcase(): ShowcaseImage {
    return this.showcaseImages.find(item => item.id === this.activeShowcaseId) || this.showcaseImages[0];
  }
}

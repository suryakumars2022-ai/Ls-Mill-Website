import { Injectable } from '@angular/core';
import { NavItem, TextileJourneyStage, ManufacturingCapability, ProductItem } from '../models/textile.model';

@Injectable({
  providedIn: 'root'
})
export class TextileDataService {
  readonly navItems: NavItem[] = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Manufacturing', route: '/manufacturing' },
    { label: 'Products', route: '/products' },
    { label: 'Sustainability', route: '/sustainability' },
    { label: 'Careers', route: '/careers' },
    { label: 'Contact', route: '/contact' }
  ];

  readonly journeyStages: TextileJourneyStage[] = [
    {
      step: '01',
      title: 'RAW MATERIAL',
      subtitle: 'Fiber Selection & Staple Quality',
      description: 'The journey commences with strict selection of premium cotton staples and certified fibers. Fibers are systematically tested for micronaire, staple length, fiber strength, and moisture content before entering processing.',
      image: 'https://images.unsplash.com/photo-1594897030560-69c1cf6ddc4b?auto=format&fit=crop&w=1200&q=80',
      tags: ['Staple Length Testing', 'Moisture Balancing', 'Bale Management'],
      stats: [
        { label: 'Testing Method', value: 'High Volume Instrument (HVI)' },
        { label: 'Origin Focus', value: 'Sustainably Farmed Staples' }
      ]
    },
    {
      step: '02',
      title: 'SPINNING',
      subtitle: 'Carding, Combing & Precision Ring Frames',
      description: 'Advanced blowroom machinery and high-speed carding align fibers into uniform silver ribbons. Precision combing eliminates short fibers, followed by drawing and ring frame spinning to produce smooth, high-tenacity yarns.',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80',
      tags: ['Compact Spinning', 'Ring Spun Systems', 'Low Imperfection Index'],
      stats: [
        { label: 'Count Spectrum', value: 'Ne 20s to Ne 100s' },
        { label: 'Quality Audit', value: 'Continuous USTER Monitoring' }
      ]
    },
    {
      step: '03',
      title: 'WEAVING',
      subtitle: 'Warp Preparation & High-Speed Loom Craft',
      description: 'Yarns are warped, sized, and threaded onto high-speed air-jet and rapier looms. Controlled humidity and electronic tension control ensure flawless warp and weft interlacings across intricate weave structures.',
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80',
      tags: ['Air-jet Weaving', 'Dobby & Plain Looms', 'Warp Tension Control'],
      stats: [
        { label: 'Weave Types', value: 'Percale, Sateen, Twill, Dobby' },
        { label: 'Width Range', value: 'Up to 340 cm Greige Fabric' }
      ]
    },
    {
      step: '04',
      title: 'FABRIC',
      subtitle: 'Greige Inspection & Structural Integrity',
      description: 'Woven fabrics undergo 100% illuminated continuous inspection for yarn irregularities, broken picks, or weave tensions. Greige rolls are classified, graded, and prepared for specialized downstream finishing.',
      image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&q=80',
      tags: ['4-Point Inspection System', 'Uniform Selvages', 'Shrinkage Stability'],
      stats: [
        { label: 'Fabric Density', value: '180 TC up to 1000 TC' },
        { label: 'Weight Range', value: '90 GSM to 350 GSM' }
      ]
    },
    {
      step: '05',
      title: 'FINISHED TEXTILES',
      subtitle: 'Cut, Sew, Packing & Global Dispatch',
      description: 'Precision automated cutting, high-thread hemming, and meticulous stitch inspection convert master fabric into luxury home linens, duvet sets, and hospitality collections ready for international distributors.',
      image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80',
      tags: ['Bar-tacked Corners', 'Automated Hemming', 'Export-Grade Packaging'],
      stats: [
        { label: 'Categories', value: 'Bed Linens, Sheets, Pillow Covers' },
        { label: 'Packaging', value: 'Eco-conscious Banderoles & Cartons' }
      ]
    }
  ];

  readonly capabilities: ManufacturingCapability[] = [
    {
      id: 'spinning',
      num: '01',
      title: 'Spinning and Yarn',
      category: 'Primary Processing',
      summary: 'Precision-engineered ring spun and compact yarns produced in climate-controlled spinning floors with continuous quality monitoring.',
      detailedSpecs: [
        'Ne 20s to Ne 100s yarn counts in combed and compact configurations',
        'Electronic yarn clearing and optical foreign fiber elimination',
        'High tensile strength suitable for high-speed weaving and knitting'
      ],
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
      link: '/products?category=yarn'
    },
    {
      id: 'weaving',
      num: '02',
      title: 'Weaving and Fabrics',
      category: 'Fabric Architecture',
      summary: 'Advanced airjet and rapier weaving infrastructure configured to produce wide-width percales, sateens, twills, and specialty dobby structures.',
      detailedSpecs: [
        'Fabric widths up to 340 cm accommodating luxury king-size bedding',
        'Thread count ranges from 180 TC up to 1000 TC',
        'Strict 4-point defect grading system adhering to international criteria'
      ],
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=80',
      link: '/products?category=fabric'
    },
    {
      id: 'home-textiles',
      num: '03',
      title: 'Home Textiles',
      category: 'End Products',
      summary: 'Comprehensive cut-and-sew operations turning premium fabrics into institutional and retail-ready bed linens with bespoke craftsmanship.',
      detailedSpecs: [
        'Flat sheets, fitted sheets, pillowcases, duvet covers, and bed skirts',
        'Mitered hems, self-piping, bar-tacking, and custom embroidery',
        'Custom packaging, barcode labeling, and palletized export packing'
      ],
      image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=80',
      link: '/products?category=home-textile'
    },
    {
      id: 'quality-lab',
      num: '04',
      title: 'Quality & Process Excellence',
      category: 'Discipline',
      summary: 'Rigorous in-house physical and mechanical textile testing laboratories ensuring batch-to-batch consistency and technical precision.',
      detailedSpecs: [
        'Fiber testing: Micronaire, staple length, uniformity index, and strength',
        'Yarn testing: Count variation, twist per inch (TPI), hairiness, and elongation',
        'Fabric testing: Tensile strength, tear resistance, dimensional stability, and pilling'
      ],
      image: 'https://images.unsplash.com/photo-1579208575657-c595a05383b7?auto=format&fit=crop&w=900&q=80',
      link: '/manufacturing'
    }
  ];

  readonly products: ProductItem[] = [
    {
      id: 'p-01',
      name: 'Combed Compact Cotton Yarn',
      category: 'yarn',
      categoryLabel: 'Yarn Division',
      countOrWeave: 'Ne 40/1 to Ne 80/1 Compact',
      composition: '100% Long Staple Cotton',
      applications: 'High-density luxury shirting, premium bed sheeting, and fine knitting.',
      description: 'Low-hairiness, compact ring-spun yarn engineered for ultra-smooth surface uniformity, high breaking strength, and minimal pilling in downstream processes.',
      featured: true,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
      specifications: [
        { key: 'Count Range', value: 'Ne 40s to Ne 80s' },
        { key: 'Twist Multiplier (TM)', value: '3.6 – 4.0' },
        { key: 'Hairiness (H)', value: '< 3.8' },
        { key: 'CSP (Count Strength Product)', value: '3100 – 3400' }
      ]
    },
    {
      id: 'p-02',
      name: 'Ring Spun Combed Yarn',
      category: 'yarn',
      categoryLabel: 'Yarn Division',
      countOrWeave: 'Ne 20/1 to Ne 60/1',
      composition: '100% Cotton',
      applications: 'Standard woven sheetings, poplins, canvas, and industrial textiles.',
      description: 'Consistent, clean ring-spun cotton yarn produced with high combing efficiency, removing short fibers to maximize tenacity and knot-free winding.',
      featured: false,
      image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80',
      specifications: [
        { key: 'Count Range', value: 'Ne 20s to Ne 60s' },
        { key: 'Combing Waste', value: '16% – 20%' },
        { key: 'Package Type', value: 'Paper Cones / Dye Cones' },
        { key: 'Elongation', value: '5.8% – 6.5%' }
      ]
    },
    {
      id: 'p-03',
      name: 'Cotton Percale Woven Fabric',
      category: 'fabric',
      categoryLabel: 'Woven Fabrics',
      countOrWeave: '200 TC – 400 TC (1x1 Plain Weave)',
      composition: '100% Long Staple Cotton',
      applications: 'Crisp hotel bed linen, breathable shirting, and luxury duvet covers.',
      description: 'Classic tight plain-weave construction characterized by a matte finish, cool crisp hand-feel, and exceptional durability over commercial laundering cycles.',
      featured: true,
      image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80',
      specifications: [
        { key: 'Thread Count', value: '200 TC, 250 TC, 300 TC, 400 TC' },
        { key: 'Weave Structure', value: 'Plain 1/1 Percale' },
        { key: 'Width Availability', value: 'Up to 330 cm' },
        { key: 'GSM Range', value: '115 – 140 GSM' }
      ]
    },
    {
      id: 'p-04',
      name: 'Cotton Sateen Luxury Fabric',
      category: 'fabric',
      categoryLabel: 'Woven Fabrics',
      countOrWeave: '300 TC – 800 TC (4/1 Satin Weave)',
      composition: '100% Combed Cotton',
      applications: 'High-end residential sheeting, luxury boutique hotel collections.',
      description: 'Lustrous four-over-one satin float weave creating a silky, supple drape and soft surface touch with natural sheen.',
      featured: true,
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
      specifications: [
        { key: 'Thread Count', value: '300 TC, 400 TC, 500 TC, 600 TC, 800 TC' },
        { key: 'Weave Structure', value: '4/1 Warp Face Sateen' },
        { key: 'Width Availability', value: 'Up to 340 cm' },
        { key: 'Finish Type', value: 'Greige or Prepared for Dyeing' }
      ]
    },
    {
      id: 'p-05',
      name: 'Dobby Stripe Woven Fabric',
      category: 'fabric',
      categoryLabel: 'Woven Fabrics',
      countOrWeave: '250 TC – 400 TC Dobby',
      composition: '100% Cotton / Blends',
      applications: 'Hospitality duvets, decorative top-of-bed treatments, institutional linens.',
      description: 'Subtle geometric stripe woven directly into the fabric using electronic dobby shedding mechanisms, combining visual depth with durability.',
      featured: false,
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80',
      specifications: [
        { key: 'Stripe Patterns', value: '0.5 cm, 1.0 cm, 2.0 cm Satin Stripe' },
        { key: 'Yarn Configuration', value: 'Ne 40s x 40s, Ne 60s x 60s' },
        { key: 'Width Availability', value: 'Up to 320 cm' },
        { key: 'Tensile Strength', value: '> 35 kg warp & weft' }
      ]
    },
    {
      id: 'p-06',
      name: 'Tailored Bed Linen Sheet Sets',
      category: 'home-textile',
      categoryLabel: 'Home Textiles',
      countOrWeave: '300 TC – 600 TC Sateen / Percale',
      composition: '100% Pure Combed Cotton',
      applications: 'Luxury residential master bedrooms and high-tier hospitality suites.',
      description: 'Precision cut-and-sewn bed sets comprising deep-pocket fitted sheet, flat sheet with 4-inch cuff, and envelope-closure pillowcases.',
      featured: true,
      image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
      specifications: [
        { key: 'Sizes', value: 'Twin, Full, Queen, King, Cal King' },
        { key: 'Pocket Depth', value: '14" to 18" with 360° elastic' },
        { key: 'Hemming', value: 'Double-needle stitch with mitered corners' },
        { key: 'Packaging', value: 'Self-fabric pouch or presentation box' }
      ]
    },
    {
      id: 'p-07',
      name: 'Duvet Cover & Pillow Sham Ensembles',
      category: 'home-textile',
      categoryLabel: 'Home Textiles',
      countOrWeave: '400 TC Egyptian-Staple Style Cotton',
      composition: '100% Long Staple Cotton',
      applications: 'Master bed suites, interior retail programs.',
      description: 'Elegantly proportioned duvet covers featuring hidden button closures and internal corner ties to secure comforters without shifting.',
      featured: false,
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
      specifications: [
        { key: 'Closure Types', value: 'Concealed button or zipper with flap' },
        { key: 'Corner Ties', value: '4 or 8 interior securing ties' },
        { key: 'Sham Style', value: '2" or 3" flange with French back overlap' },
        { key: 'Care', value: 'Machine washable, low tumble dry' }
      ]
    }
  ];
}

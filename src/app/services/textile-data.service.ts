import { Injectable } from '@angular/core';
import { NavItem, TextileJourneyStage, ManufacturingCapability, ProductItem, GalleryItem } from '../models/textile.model';
import { LS_MILLS_ASSETS } from '../config/assets.config';

@Injectable({
  providedIn: 'root'
})
export class TextileDataService {
  readonly assets = LS_MILLS_ASSETS;

  readonly companyProfile = {
    name: 'LS Mills Limited',
    foundingYear: 1979,
    managingDirector: 'Mr. S. Manivannan',
    location: 'Theni, Tamil Nadu, South India',
    registeredOffice: '#351, Madurai Road, Theni - 625531. India.',
    phones: ['+91 80125 32502 -05'],
    fax: '+91 4546 252742',
    email: 'info@lsmills.in',
    usShowroom: {
      address: 'Suite # 510, 5th Floor, 230 Fifth Avenue, NY – 10001',
      phone: '646 492 1835'
    },
    socialLinks: {
      facebook: 'https://www.facebook.com/lsmltd/',
      twitter: 'https://twitter.com/lsmillsonline',
      linkedin: 'https://www.linkedin.com/company/ls-mills-limited',
      youtube: 'https://www.youtube.com/channel/UCpjOFuEnnjZvP-Fv7eUnXAQ',
      instagram: 'https://www.instagram.com/lsmillslimited/'
    },
    capacities: {
      spindles: '150,000 Spindles',
      dailyYarn: '25 Tonnes Daily',
      dailySheets: '6,000 Sheets per Day per Shift',
      threadCounts: '200 to 1,500 Thread Count'
    },
    certifications: [
      { name: 'ISO 9001', authority: 'Bureau Veritas Certification (BVC)', logo: LS_MILLS_ASSETS.quality.isoCert },
      { name: '100% Organic Cotton', authority: 'Global Organic Textile Standard', logo: LS_MILLS_ASSETS.quality.organicCert }
    ]
  };

  readonly navItems: NavItem[] = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Capabilities', route: '/manufacturing' },
    { label: 'Sustainability', route: '/sustainability' },
    { label: 'Insights', route: '/products' },
    { label: 'Contact', route: '/contact' }
  ];

  readonly journeyStages: TextileJourneyStage[] = [
    {
      step: '01',
      title: 'RAW MATERIAL',
      subtitle: 'Fiber Selection & Staple Quality',
      description: 'The journey commences with strict selection of premium cotton staples and certified fibers: Egyptian Giza, Supima, Organic Cotton, and eco-fibers including Tencel and Refibra.',
      image: LS_MILLS_ASSETS.about.overviewBg,
      tags: ['Staple Length Testing', 'Moisture Balancing', 'Bale Management'],
      stats: [
        { label: 'Fiber Spectrum', value: 'Egyptian, Supima, BCI, Tencel' },
        { label: 'Testing Method', value: 'High Volume Instrument (HVI)' }
      ]
    },
    {
      step: '02',
      title: 'SPINNING',
      subtitle: '150,000 Spindles Producing 25 Tonnes Daily',
      description: 'LMW, Rieter, Muratec, and SSM machinery align fibers into uniform ribbons and spin ultra-fine compact yarns from Ne 40s to Ne 200s in single, plied, gassed, and grey varieties.',
      image: LS_MILLS_ASSETS.spinning.ringFrames1,
      tags: ['Compact Spinning', 'SIRO Slub', 'Low Imperfection Index'],
      stats: [
        { label: 'Capacity', value: '150,000 Spindles / 25 TPD' },
        { label: 'Count Spectrum', value: 'Ne 40s to Ne 200s' }
      ]
    },
    {
      step: '03',
      title: 'WEAVING',
      subtitle: 'Benninger Sizing & Tsudakoma Airjet Looms',
      description: 'Yarns are warped, sized on Benninger systems, and woven on Tsudakoma airjet looms into flawless grey fabrics ranging from 200 to 1,500 thread counts across satin, percale, twill, and dobby.',
      image: LS_MILLS_ASSETS.weaving.airjetLoom1,
      tags: ['Airjet Weaving', 'Dobby & Plain Looms', 'Warp Tension Control'],
      stats: [
        { label: 'Thread Count', value: '200 to 1,500 TC' },
        { label: 'Machinery', value: 'Benninger & Tsudakoma Airjet' }
      ]
    },
    {
      step: '04',
      title: 'FABRIC',
      subtitle: 'Greige Inspection & Structural Integrity',
      description: 'Woven fabrics undergo continuous illuminated inspection for pick density, warp tensions, and surface uniformity, adhering strictly to global 4-point defect grading standards.',
      image: LS_MILLS_ASSETS.weaving.greyFabrics,
      tags: ['4-Point Inspection System', 'Uniform Selvages', 'Wide-Width Looms'],
      stats: [
        { label: 'Weave Varieties', value: 'Satin, Percale, Twill, Dobby, Oxford' },
        { label: 'Markets', value: 'North America & Europe' }
      ]
    },
    {
      step: '05',
      title: 'FINISHED TEXTILES',
      subtitle: '6,000 Luxury Sheets Daily per Shift',
      description: 'Precision cut-and-sew operations convert master fabrics into world-class bed linens, duvet sets, and hospitality ensembles meeting the rigorous standards of global retail partners.',
      image: LS_MILLS_ASSETS.madeups.stitchingUnit1,
      tags: ['Bar-tacked Corners', 'Automated Hemming', 'Export-Grade Packaging'],
      stats: [
        { label: 'Daily Output', value: '6,000 Sheets / Shift' },
        { label: 'Thread Counts', value: '200 to 1,500 TC Luxury Bedding' }
      ]
    }
  ];

  readonly capabilities: ManufacturingCapability[] = [
    {
      id: 'spinning',
      num: '01',
      title: 'Spinning and Yarn',
      category: '150,000 Spindles &bull; 25 Tonnes/Day',
      summary: 'Precision-engineered ring spun, compact, SIRO slub, and gassed yarns produced on world-class machinery from LMW, Rieter, Muratec, and SSM.',
      detailedSpecs: [
        'Ne 40s to Ne 200s Count SIRO Compact Slub Yarn',
        'Ne 40/2 to Ne 200/2 Plied and Parallel Yarn',
        'Ne 40/2 to Ne 200/2 Gassed Yarn in hard and soft dye cone packages',
        'Ne 8 to Ne 30 Open End yarn varieties'
      ],
      image: LS_MILLS_ASSETS.spinning.heroBg,
      link: '/products?category=yarn'
    },
    {
      id: 'weaving',
      num: '02',
      title: 'Weaving and Fabrics',
      category: 'Airjet Looms &bull; 200–1,500 TC',
      summary: 'Advanced Benninger warping/sizing lines and high-speed Tsudakoma airjet looms weaving luxury grey fabrics for European and American markets.',
      detailedSpecs: [
        'Grey Fabrics in Satin, Percale, Twill, Dobby, Seersucker, Waffle, Stripes, and Oxford',
        'Thread Count range spanning 200 TC to ultra-luxury 1,500 TC',
        'Fibers: Supima, Egyptian, BCI, Organic Cotton, Tencel, Refibra, Linen, Modal, Hemp'
      ],
      image: LS_MILLS_ASSETS.weaving.heroBg,
      link: '/products?category=fabric'
    },
    {
      id: 'home-textiles',
      num: '03',
      title: 'Made Ups / Home Textiles',
      category: '6,000 Sheets / Shift',
      summary: 'Comprehensive stitching facilities producing world-class bed linen from 200 to 1,500 thread counts catering to premier international retail demand.',
      detailedSpecs: [
        'Forward integration capacity of 6,000 sheets per day per shift',
        'Bed sheets, duvet covers, pillow shams, and hospitality ensembles',
        'Showroom presence at 230 Fifth Avenue, New York for international accounts'
      ],
      image: LS_MILLS_ASSETS.madeups.heroBg,
      link: '/products?category=home-textile'
    },
    {
      id: 'quality-lab',
      num: '04',
      title: 'Quality & Process Excellence',
      category: 'ISO 9001 Certified &bull; BVC',
      summary: 'Online and offline monitoring systems ensuring complete compliance, backed by ISO 9001 certification by Bureau Veritas and 100% Organic Cotton certification.',
      detailedSpecs: [
        'HVI fiber testing for micronaire, staple length, and tenacity',
        'Online USTER sensors and optical foreign fiber elimination',
        '4-point ASTM D5430 fabric defect grading standard'
      ],
      image: LS_MILLS_ASSETS.quality.heroBg,
      link: '/manufacturing'
    }
  ];

  readonly products: ProductItem[] = [
    {
      id: 'p-01',
      name: 'SIRO Compact Slub Yarn',
      category: 'yarn',
      categoryLabel: 'Yarn Division',
      countOrWeave: 'Ne 40s to Ne 200s Compact Single',
      composition: 'Egyptian, Supima, Organic & BCI Cotton',
      applications: 'High-density luxury shirting, premium bed sheeting, and fine knitting.',
      description: 'Ultra-low hairiness compact ring-spun yarn spun on Muratec & Rieter frames. Retains natural fiber purity with high tensile tenacity.',
      featured: true,
      image: LS_MILLS_ASSETS.spinning.yarnCones,
      specifications: [
        { key: 'Count Range', value: 'Ne 40s to Ne 200s' },
        { key: 'Yarn Type', value: 'Single SIRO Compact Slub' },
        { key: 'Machinery', value: 'Rieter, LMW, Muratec' },
        { key: 'Package Type', value: 'Paper Cones / Dye Cones' }
      ]
    },
    {
      id: 'p-02',
      name: 'Plied & Gassed Cotton Yarn',
      category: 'yarn',
      categoryLabel: 'Yarn Division',
      countOrWeave: 'Ne 40/2 to Ne 200/2 Gassed',
      composition: '100% Long Staple Cotton',
      applications: 'Luxury poplins, high-tenacity weaving, and gassed sewing thread.',
      description: 'Singe-gassed and plied yarn with protruding fibers eradicated, providing a silky smooth surface and enhanced dye uptake.',
      featured: true,
      image: LS_MILLS_ASSETS.spinning.gassedYarn,
      specifications: [
        { key: 'Count Range', value: 'Ne 40/2 to Ne 200/2' },
        { key: 'Process', value: 'TFO Twisting & Flame Gassing' },
        { key: 'Package', value: 'Hard & Soft Dye Cheese Packages' },
        { key: 'Tenacity', value: 'High breaking tenacity' }
      ]
    },
    {
      id: 'p-03',
      name: 'Grey Sateen Woven Fabric',
      category: 'fabric',
      categoryLabel: 'Woven Fabrics',
      countOrWeave: '300 TC to 1,500 TC Sateen',
      composition: 'Supima, Egyptian & Organic Cotton Blends',
      applications: 'Luxury residential sheeting, European boutique hotels.',
      description: 'Supple, lustrous four-over-one satin float weave woven on Tsudakoma airjet looms with Benninger sized warp beams.',
      featured: true,
      image: LS_MILLS_ASSETS.weaving.greyFabrics,
      specifications: [
        { key: 'Thread Count', value: '300 TC up to 1,500 TC' },
        { key: 'Weave Structure', value: '4/1 Warp Face Sateen' },
        { key: 'Looms', value: 'Tsudakoma Air Jet Looms' },
        { key: 'Width Range', value: 'Up to 340 cm Greige Fabric' }
      ]
    },
    {
      id: 'p-04',
      name: 'Percale & Dobby Stripe Grey Fabric',
      category: 'fabric',
      categoryLabel: 'Woven Fabrics',
      countOrWeave: '200 TC to 800 TC Percale / Dobby',
      composition: 'Cotton, Tencel, Linen & Modal Blends',
      applications: 'Crisp hotel bed linens, hospitality duvets, shirting.',
      description: 'Crisp, breathable plain weave and intricate geometric dobby stripes engineered for durable laundering and shrink stability.',
      featured: true,
      image: LS_MILLS_ASSETS.weaving.weavingSpinning,
      specifications: [
        { key: 'Weave Options', value: 'Percale 1/1, Dobby, Seersucker, Waffle, Oxford' },
        { key: 'Density', value: '200 TC to 800 TC' },
        { key: 'Quality Standard', value: 'ASTM 4-Point Inspection System' },
        { key: 'Export Markets', value: 'USA, Europe, Asia-Pacific' }
      ]
    },
    {
      id: 'p-05',
      name: 'Tailored Luxury Bed Linen Sets',
      category: 'home-textile',
      categoryLabel: 'Home Textiles / Made Ups',
      countOrWeave: '200 TC to 1,500 TC Finished Sets',
      composition: '100% Cotton, Tencel, Cotton-Linen',
      applications: 'Global retail bed sets, luxury hospitality suites.',
      description: 'Manufactured in our dedicated cut-and-sew unit with a capacity of 6,000 sheets daily per shift. Features tailored hems and mitered corners.',
      featured: true,
      image: LS_MILLS_ASSETS.madeups.stitchingUnit1,
      specifications: [
        { key: 'Daily Capacity', value: '6,000 Sheets per Shift' },
        { key: 'Thread Counts', value: '200 TC to 1,500 TC' },
        { key: 'Finishing Details', value: 'Satin stitch, merrow hem, mitered corners' },
        { key: 'Packaging', value: 'Export cartons, retail banderoles' }
      ]
    },
    {
      id: 'p-06',
      name: 'Duvet Covers & Pillow Sham Ensembles',
      category: 'home-textile',
      categoryLabel: 'Home Textiles / Made Ups',
      countOrWeave: '300 TC to 1,000 TC Sateen / Percale',
      composition: 'Egyptian & Supima Cotton',
      applications: 'Master bedroom retail collections, international exports.',
      description: 'Elegantly proportioned duvet covers featuring hidden button closures, internal corner ties, and French-back flange pillow shams.',
      featured: false,
      image: LS_MILLS_ASSETS.madeups.stitchingUnit2,
      specifications: [
        { key: 'Closure', value: 'Concealed button or zipper with flap' },
        { key: 'Sizes', value: 'Twin, Full, Queen, King, Super King' },
        { key: 'Design Training', value: 'In-house pattern masters' },
        { key: 'Compliance', value: 'Global retailer code of conduct' }
      ]
    }
  ];

  readonly coreDivisions = {
    yarn: {
      headline: 'Precision in Every Yarn.',
      shortText: 'Quality-driven yarn manufacturing, built on consistency and care.',
      link: '/products?category=yarn',
      linkText: 'Explore Yarn & Spinning',
      specs: [
        { label: 'Spindle Capacity', value: '150,000 Ring Spindles' },
        { label: 'Daily Output', value: '25 Tonnes Daily' },
        { label: 'Count Spectrum', value: 'Ne 40s to Ne 200s Compact' },
        { label: 'Technology', value: 'Rieter, LMW, Muratec, SSM' }
      ],
      heroImage: LS_MILLS_ASSETS.spinning.heroBg,
      detailImage: LS_MILLS_ASSETS.spinning.ringFrames1,
      macroImage: LS_MILLS_ASSETS.spinning.yarnCones
    },
    fabric: {
      headline: 'Weaving Possibilities.',
      shortText: 'Engineered fabrics shaped by craftsmanship and technology.',
      link: '/products?category=fabric',
      linkText: 'Explore Woven Fabrics',
      specs: [
        { label: 'Weaving Technology', value: 'Tsudakoma Airjet Looms' },
        { label: 'Warp Preparation', value: 'Benninger Sizing & Warping' },
        { label: 'Thread Count', value: '200 to 1,500 TC Greige' },
        { label: 'Maximum Width', value: 'Up to 340 cm Greige Fabric' }
      ],
      heroImage: LS_MILLS_ASSETS.weaving.heroBg,
      detailImage: LS_MILLS_ASSETS.weaving.airjetLoom1,
      macroImage: LS_MILLS_ASSETS.weaving.greyFabrics
    },
    homeTextiles: {
      headline: 'Comfort, Woven Into Life.',
      shortText: 'Thoughtfully crafted textiles for modern living.',
      link: '/products?category=home-textile',
      linkText: 'Explore Home Textiles',
      specs: [
        { label: 'Daily Capacity', value: '6,000 Sheets per Shift' },
        { label: 'Catering Markets', value: 'Luxury European & US Retail' },
        { label: 'US Presence', value: '230 Fifth Ave, New York' },
        { label: 'Finishing Precision', value: 'Mitered Corners & Bar-tacking' }
      ],
      heroImage: LS_MILLS_ASSETS.madeups.bedLinenInterior,
      detailImage: LS_MILLS_ASSETS.madeups.stitchingUnit1,
      macroImage: LS_MILLS_ASSETS.madeups.pillowShamDetail
    }
  };

  readonly galleryItems: GalleryItem[] = [
    {
      id: 'g-01',
      title: 'Ring Spinning Floor in Theni',
      category: 'spinning',
      categoryLabel: 'Yarn & Spinning',
      image: LS_MILLS_ASSETS.spinning.ringFrames1,
      caption: '150,000 Spindles spinning compact yarns from Ne 40s to Ne 200s on the main production floor.',
      aspect: 'landscape'
    },
    {
      id: 'g-02',
      title: 'High-Speed Tsudakoma Airjet Weaving',
      category: 'weaving',
      categoryLabel: 'Woven Fabrics',
      image: LS_MILLS_ASSETS.weaving.airjetLoom1,
      caption: 'Tsudakoma airjet looms weaving 200 to 1,500 thread-count sateen and percale greige fabrics.',
      aspect: 'landscape'
    },
    {
      id: 'g-03',
      title: 'Forward-Integrated Cut & Sew Linens',
      category: 'home-textile',
      categoryLabel: 'Home Textiles',
      image: LS_MILLS_ASSETS.madeups.stitchingUnit1,
      caption: 'Dedicated stitching unit producing 6,000 luxury bed sheets per day per shift for export.',
      aspect: 'landscape'
    },
    {
      id: 'g-04',
      title: 'Yarn Bobbin Cones with Zero Defect Packing',
      category: 'spinning',
      categoryLabel: 'Yarn & Spinning',
      image: LS_MILLS_ASSETS.spinning.yarnCones,
      caption: 'Uniform paper cones and dye cheese packages tested for low imperfection index (IPI).',
      aspect: 'portrait'
    },
    {
      id: 'g-05',
      title: 'Greige Fabric Quality Inspection Table',
      category: 'weaving',
      categoryLabel: 'Woven Fabrics',
      image: LS_MILLS_ASSETS.weaving.greyFabrics,
      caption: 'Illuminated 4-point ASTM D5430 fabric inspection verifying tension and pick uniformity.',
      aspect: 'portrait'
    },
    {
      id: 'g-06',
      title: 'Architectural Luxury Bed Linen Suite',
      category: 'home-textile',
      categoryLabel: 'Home Textiles',
      image: LS_MILLS_ASSETS.madeups.bedLinenInterior,
      caption: '1,000 Thread Count luxury sateen bedding ensemble styled in warm natural daylight.',
      aspect: 'landscape'
    },
    {
      id: 'g-07',
      title: 'In-House Physical Metrology Testing Lab',
      category: 'facilities',
      categoryLabel: 'Facilities & Labs',
      image: LS_MILLS_ASSETS.quality.testingLab,
      caption: 'Advanced HVI fiber testing and metrology instruments certified to ISO 9001 (Bureau Veritas).',
      aspect: 'portrait'
    },
    {
      id: 'g-08',
      title: 'Captive Solar Power Array in Theni',
      category: 'facilities',
      categoryLabel: 'Facilities & Labs',
      image: LS_MILLS_ASSETS.sustainability.solarPower,
      caption: 'Captive solar power array supplying clean energy to mill operations at the Western Ghats foothills.',
      aspect: 'landscape'
    },
    {
      id: 'g-09',
      title: 'Western Ghats Cotton Terroir & Raw Bolls',
      category: 'facilities',
      categoryLabel: 'Facilities & Labs',
      image: LS_MILLS_ASSETS.theniNature.rawCottonBolls,
      caption: 'Certified 100% GOTS organic cotton staples, Supima, and Egyptian Giza selected for high tenacity.',
      aspect: 'square'
    }
  ];
}

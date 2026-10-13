export interface NavItem {
  label: string;
  route: string;
  badge?: string;
}

export interface TextileJourneyStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  stats?: { label: string; value: string }[];
  tags: string[];
}

export interface ManufacturingCapability {
  id: string;
  num: string;
  title: string;
  category: string;
  summary: string;
  detailedSpecs: string[];
  image: string;
  link: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'yarn' | 'fabric' | 'home-textile';
  categoryLabel: string;
  countOrWeave: string;
  composition: string;
  applications: string;
  description: string;
  featured: boolean;
  image: string;
  specifications: {
    key: string;
    value: string;
  }[];
}

export interface EnquiryPayload {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  enquiryType: 'yarn' | 'fabric' | 'home-textile' | 'career' | 'general';
  specificProduct?: string;
  message: string;
  acceptedTerms: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'spinning' | 'weaving' | 'home-textile' | 'facilities';
  categoryLabel: string;
  image: string;
  caption: string;
  aspect?: 'landscape' | 'portrait' | 'square';
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../../components/icon/icon.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  readonly timeline = [
    {
      period: 'FOUNDATION',
      title: 'Roots in Theni Textile Belt',
      description: 'Established in Theni district, Tamil Nadu — a natural corridor linking South Indian cotton cultivation with skilled textile craftsmanship.'
    },
    {
      period: 'SPINNING EXPANSION',
      title: 'Ring Spinning Modernization',
      description: 'Investment in modern automated ring frames, blowroom automation, and high-precision fiber combing for fine counts.'
    },
    {
      period: 'WEAVING INTEGRATION',
      title: 'Wide-Width Shuttleless Looms',
      description: 'Commissioning of high-speed air-jet weaving infrastructure capable of weaving greige fabrics up to 340 cm wide for international bedding.'
    },
    {
      period: 'VALUE ADDITION',
      title: 'Home Textile Finishing & Global Partnerships',
      description: 'Expansion into dedicated cut-and-sew operations, producing export-ready bed linens, sheet sets, and institutional textiles.'
    }
  ];

  readonly coreValues = [
    {
      num: '01',
      title: 'Fidelity to Raw Material',
      summary: 'Every batch of cotton is tested for micronaire, staple length, and uniformity before machine carding begins.'
    },
    {
      num: '02',
      title: 'Manufacturing Discipline',
      summary: 'Preventive machine maintenance schedules, climate-controlled spinning corridors, and strict atmospheric conditioning.'
    },
    {
      num: '03',
      title: 'Responsible Stewardship',
      summary: 'Waste-cotton recycling into secondary utility products and progressive energy efficiency across all plant roofs.'
    },
    {
      num: '04',
      title: 'Transparent Commerce',
      summary: 'Clear specifications, predictable lead times, and verifiable quality certificates for our global partners.'
    }
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../../components/icon/icon.component';

@Component({
  selector: 'app-sustainability',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  templateUrl: './sustainability.component.html',
  styleUrls: ['./sustainability.component.scss']
})
export class SustainabilityComponent {
  readonly activePractices = [
    {
      num: '01',
      title: 'Waste Fiber Reclamation (Comber Noil)',
      category: 'Material Circularity',
      description: 'Short fibers removed during the high-combing process are carefully reclaimed and directed into secondary coarse open-end spinning lines and utility textiles, minimizing virgin raw material loss.'
    },
    {
      num: '02',
      title: 'Pneumatic Dust & Micro-Dust Filtration',
      category: 'Air Quality & Worker Safety',
      description: 'Continuous recirculating air washers and suction filters maintain particulate-free atmospheres across spinning halls, protecting respiratory health and ensuring spotless yarn bobbin wound packages.'
    },
    {
      num: '03',
      title: 'Precision Sizing & Water Conservation',
      category: 'Resource Efficiency',
      description: 'Warp sizing machines utilize computerized liquid volume controls to prevent chemical excess, accompanied by closed condensate return systems to recover boiler steam.'
    },
    {
      num: '04',
      title: 'Local Agricultural Partnerships',
      category: 'Ethical Sourcing',
      description: 'We prioritize cotton ginners and regional growers throughout South India who utilize balanced crop rotation and documented moisture management.'
    }
  ];

  readonly strategicGoals = [
    {
      horizon: 'HORIZON 2027',
      goal: 'Expanded Rooftop Solar Infrastructure',
      status: 'In Engineering Assessment',
      notes: 'Evaluating rooftop solar photovoltaic installation across warehouse and processing shed canopies in Theni.'
    },
    {
      horizon: 'HORIZON 2028',
      goal: 'Enhanced Zero Liquid Discharge (ZLD) Optimization',
      status: 'Process Review Stage',
      notes: 'Progressing towards closed-circuit effluent recovery configurations across downstream preparation units.'
    },
    {
      horizon: 'HORIZON 2029',
      goal: 'Comprehensive Fiber Lifecycle Auditing',
      status: 'Methodology Framework',
      notes: 'Establishing verified third-party lifecycle assessment frameworks with certified external testing laboratories.'
    }
  ];
}

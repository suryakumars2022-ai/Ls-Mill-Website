import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TextileDataService } from '../../services/textile-data.service';
import { ProductItem } from '../../models/textile.model';
import { ProductModalComponent } from '../../components/product-modal/product-modal.component';
import { IconComponent } from '../../components/icon/icon.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ProductModalComponent, IconComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  private dataService = inject(TextileDataService);
  private route = inject(ActivatedRoute);

  allProducts = this.dataService.products;
  filteredProducts: ProductItem[] = [];

  selectedCategory: 'all' | 'yarn' | 'fabric' | 'home-textile' = 'all';
  searchQuery = '';
  activeModalProduct: ProductItem | null = null;

  ngOnInit(): void {
    // Read route query params if navigated with ?category=yarn
    this.route.queryParams.subscribe(params => {
      const categoryParam = params['category'];
      if (categoryParam && ['yarn', 'fabric', 'home-textile'].includes(categoryParam)) {
        this.selectedCategory = categoryParam;
      }
      this.applyFilters();
    });
  }

  setCategory(category: 'all' | 'yarn' | 'fabric' | 'home-textile'): void {
    this.selectedCategory = category;
    this.applyFilters();
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  private applyFilters(): void {
    let list = this.allProducts;

    if (this.selectedCategory !== 'all') {
      list = list.filter(p => p.category === this.selectedCategory);
    }

    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase().trim();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.countOrWeave.toLowerCase().includes(q) ||
        p.composition.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }

    this.filteredProducts = list;
  }

  openProductModal(product: ProductItem): void {
    this.activeModalProduct = product;
  }

  closeProductModal(): void {
    this.activeModalProduct = null;
  }
}

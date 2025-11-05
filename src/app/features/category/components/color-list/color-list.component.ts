import { Component, inject } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { CategoryService } from '../../services/category.service';
import { categoryBackgroundColors } from '../../constants/category-colors';

const MODULES = [MatDivider];

@Component({
  selector: 'app-color-list',
  standalone: true,
  imports: [...MODULES],
  templateUrl: './color-list.component.html',
  styleUrl: './color-list.component.scss',
})
export class ColorListComponent {
  private readonly categoryService = inject(CategoryService);

  public categories = this.categoryService.categories;

  public categoryBackgroundColors = categoryBackgroundColors;
}

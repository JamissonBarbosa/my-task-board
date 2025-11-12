import { Component, inject } from '@angular/core';
import { MainListComponent } from '../../components/main-list/main-list.component';
import { ColorListComponent } from '../../components/color-list/color-list.component';
import { CategoryService } from '../../services/category.service';
import { AsyncPipe } from '@angular/common';

const COMPONENTS = [MainListComponent, ColorListComponent];
const PIPES = [AsyncPipe];

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [...COMPONENTS, ...PIPES],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  private readonly categoryService = inject(CategoryService);
}

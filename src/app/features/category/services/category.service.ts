import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CategoryData } from '../model/categoryData';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private readonly apiUrl = environment.apiUrl;

  private readonly httClient = inject(HttpClient);

  public categories = signal<CategoryData[]>([]);

  public getCategories(): Observable<CategoryData[]> {
    return this.httClient
      .get<CategoryData[]>(`${this.apiUrl}/categories`)
      .pipe(tap(categories => this.categories.set(categories)));
  }
}

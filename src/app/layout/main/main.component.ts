import { Component } from '@angular/core';
import { CategoryComponent } from '../../features/category/view/category/category.component';
import { MatDividerModule } from '@angular/material/divider';
import { TaskComponent } from '../../features/task/view/task/task.component';

const COMPONENTS = [CategoryComponent, TaskComponent];

const MODULES = [MatDividerModule];

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [...COMPONENTS, ...MODULES],
  templateUrl: './main.component.html',
  styles: ``,
})
export class MainComponent {}

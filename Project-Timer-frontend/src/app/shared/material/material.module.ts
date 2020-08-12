import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export const materialModules = [
  MatSliderModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule

]

@NgModule({
    declarations: [],
    imports: [
    CommonModule,
    ...materialModules
    ],
    exports: [
    ...materialModules
    ]
})
export class MaterialModule {
}

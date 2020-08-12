import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';

export const materialModules = [
  MatSliderModule,
  MatInputModule,
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

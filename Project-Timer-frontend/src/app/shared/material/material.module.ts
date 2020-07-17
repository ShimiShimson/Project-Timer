import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';

export const materialModules = [
  MatSliderModule,
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

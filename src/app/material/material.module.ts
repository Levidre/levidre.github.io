import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatPaginatorModule
  ],
  exports: [
    MatTabsModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }

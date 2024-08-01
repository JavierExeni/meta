import { Component, inject, OnInit } from '@angular/core';
import { PropertyService } from '../../property.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-property',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-property.component.html',
  styles: ``,
})
export class ListPropertyComponent implements OnInit{

  propertyService = inject(PropertyService);

  properties: any;

  ngOnInit(): void {
   this.propertyService.getPropertyList().subscribe({
    next: (res) => {
      this.properties = res.results
    }
   })
  }


}

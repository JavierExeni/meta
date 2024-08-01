import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-property',
  standalone: true,
  imports: [],
  templateUrl: './detail-property.component.html',
  styles: ``,
})
export class DetailPropertyComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  metaService = inject(Meta);
  titleService = inject(Title);

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ property, user, agent }) => {
      if (user) {
        console.log(user);
      }
      if (agent) {
        console.log(agent);
      }
      const banner = property.gallery?.find((el: any) => el.is_banner);
      this.updateMetaTags(property, banner!);
    });
  }

  updateMetaTags(property: any, banner: any) {
    this.titleService.setTitle(property.property_title);

    const imageUrl = banner.file_watermark
      ? banner.file_watermark
      : 'default-image-url.jpg';
    this.metaService.updateTag({
      property: 'og:title',
      content: property.property_title,
    });
    this.metaService.updateTag({ property: 'og:image', content: imageUrl });
    this.metaService.updateTag({
      property: 'og:url',
      content: window.location.href,
    });
  }
}

import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  private meta = inject(Meta);
  private title = inject(Title);
  private router = inject(Router);

  generateTags({ title = '', image = '', description = '' }) {
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'og:url', content: this.router.url });

    this.meta.updateTag({ name: 'og:title', content: title });
    this.meta.updateTag({
      name: 'og:description',
      content: description,
    });
    this.meta.updateTag({
      name: 'og:image',
      content: image,
    });
    this.meta.updateTag({ name: 'twitter:card', content: 'twitter:card' });
  }
}

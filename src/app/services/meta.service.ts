import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router
  ) {}

  generateTags({ title = '', image = '', description = '' }) {
    this.title.setTitle(title);
    this.meta.addTags([
      { name: 'og:url', content: this.router.url },
      { name: 'og:title', content: title },
      {
        name: 'og:description',
        content: description,
      },
      {
        name: 'og:image',
        content: image,
      },
      { name: 'twitter:card', content: 'twitter:card' },
    ]);
  }
}

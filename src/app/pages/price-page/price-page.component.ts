import { isPlatformServer } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'price-page',
  imports: [],
  templateUrl: './price-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricePageComponent {
  private title = inject(Title);
  private meta = inject(Meta);
  private platform = inject(PLATFORM_ID);

  ngOnInit(): void {
    // para validar en caso de que la app sea SSR y queramos ejecutar algo del lado del servidor o del navegador
    // if (!isPlatformServer(this.platform)) {
      // document.title = "Price page";
    // }
    this.title.setTitle('Price');
    this.meta.updateTag({ name: 'description', content: 'Pagina de Precios' });
    this.meta.updateTag({ name: 'og:title', content: 'Price' });
    this.meta.updateTag({ name: 'keywords', content: 'Hola,Mundo,Dairo,Barrios,Curso,Pro' });
  }
}

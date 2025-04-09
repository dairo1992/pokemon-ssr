import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'contact-page',
  imports: [],
  templateUrl: './contact-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactPageComponent {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Contact');
    this.meta.updateTag({ name: 'description', content: 'Pagina de contact' });
    this.meta.updateTag({ name: 'og:title', content: 'Contact' });
    this.meta.updateTag({ name: 'keywords', content: 'Hola,Mundo,Dairo,Barrios,Curso,Pro' });
  }
}

import { Component, input } from '@angular/core';

export type Art = {
  image: string;
  title: string;
  release: string;
  price: string;
};

@Component({
  standalone: true,
  selector: 'art-item',
  template: `
    <div class="art-item">
      <img [src]="HOST + artItem().image" />
      <div>
        <h3>Artist: {{ artItem().title }}</h3>
        <p>Price: {{ artItem().price }} release: {{ artItem().release }}</p>
      </div>
    </div>
  `,
  styles: `
    .art-item {
      margin: 1rem;
      opacity: 0.8;

      &:hover {
        cursor: pointer;
        transition: ease-in 0.5s;
        opacity: 1;
      }
    }

    h3 {
      position: absolute;
      background-color: lightslategray;
    }

    h4 {
      position: static;
      background-color: lightslategray;
    }

    img {
      width: 450px;
    }
  `,
})
export class ArtItemComponent {
  public HOST = 'http://localhost:4200/assets/images/';
  public artItem = input.required<Art>();
}

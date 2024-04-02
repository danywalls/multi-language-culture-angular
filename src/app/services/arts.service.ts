import { Injectable } from '@angular/core';
import { Art } from '../components/art-item.component';

@Injectable({ providedIn: 'root' })
export class ArtsService {
  public $arts: Array<Art> = [
    {
      title: 'steve-johnson',
      price: '423',
      release: '31/12/2021',
      image: 'steve-johnson--AugcHptjuQ-unsplash.jpg',
    },
    {
      title: 'Steve Johnson',
      price: '241',
      release: '31/12/2021',
      image: 'steve-johnson-eVaxJVA2zHI-unsplash.jpg',
    },
    {
      title: 'Claudio Schwarz',
      price: '321',
      release: '31/12/2021',
      image: 'claudio-schwarz-k39RGHmLoV8-unsplash.jpg',
    },
    {
      title: 'Mayur',
      price: '321',
      release: '31/12/2021',
      image: 'mayur-deshpande-zZPeoLxLRyM-unsplash.jpg',
    },
    {
      title: 'doug vos',
      price: '321',
      release: '31/12/2021',
      image: 'doug-vos-GQaq6Lp6jl8-unsplash.jpg',
    },
    {
      title: 'Steve Johnson',
      price: '321',
      release: '31/12/2021',
      image: 'steve-johnson-x4iP2RKzIdM-unsplash.jpg',
    },
  ];
}

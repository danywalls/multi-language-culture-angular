import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'navigation',
  template: `
    <nav>
      <ul>
        <li>Home</li>
        <li>Living</li>
        <li>Prints</li>
        <li>Prints</li>
      </ul>
    </nav>
  `,
  styles: `
    nav ul {
      display: flex;
      gap: 1rem;
      list-style: none;

      > li {
        &:hover {
          cursor: pointer;
          font-weight: bold;
        }
      }
    }
  `,
})
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

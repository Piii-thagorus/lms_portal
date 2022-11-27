import { Component } from '@angular/core';

@Component({
  selector: 'lms-portal-mfe-root',
  template: `
    <div class="loader">
      <img [src]="loadingImg" alt="Loadding..."/>
    </div>
  `,
  styles: [
    `
      .loader {
        height: 5rem;
        width: 5rem;

        margin: auto;

        animation: spin 2s infinite linear;
      }
      `,`
      @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
      }
    `
  ]
})
export class AppComponent {

    loadingImg = 'https://cdn.auth0.com/blog/hello-auth0/loader.svg';
}
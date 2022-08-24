import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template:`
  <mat-card  class="mat-elevation-z12">
    <mat-card-title>404: Página não Encontrada</mat-card-title>

    <mat-card-content>
      Não Encontramos a Página! Tente Novamente ou mude a rota.
    </mat-card-content>

    <mat-card-actions>
      <button mat-raised-button color="primary" routerLink="/">
        Página Inicial
      </button>
    </mat-card-actions>
  </mat-card>
  `,
  styles: [
    `
      :host {
        text-align: center;
      }
    `
  ]

})
export class PageNotFoundComponent {

}

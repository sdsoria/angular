import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-listadeseos';

  agregar(titulo: HTMLInputElement)	{
    console.log(titulo);
    }
}

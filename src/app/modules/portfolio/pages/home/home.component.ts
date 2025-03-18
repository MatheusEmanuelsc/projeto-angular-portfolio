import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { KwowledgeComponent } from "../../components/kwowledge/kwowledge.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, KwowledgeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

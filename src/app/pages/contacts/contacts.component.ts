import { Component, OnInit } from '@angular/core';
import { IonRow, IonCard, IonGrid, IonCol, IonIcon, IonText, IonLabel, IonContent } from '@ionic/angular/standalone';
import { TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  imports: [IonRow, IonCard, IonGrid, IonCol, IonIcon, IonText, IonLabel, NavbarComponent, FooterComponent, IonContent, TranslatePipe, TranslateDirective, ]
})
export class ContactsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

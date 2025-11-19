import { Component, OnInit } from '@angular/core';
import { TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { IonRow, IonCard, IonGrid, IonCol, IonIcon, IonText, IonLabel, IonContent, IonicSlides } from '@ionic/angular/standalone';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-about-us-mobile',
  templateUrl: './about-us-mobile.component.html',
  styleUrls: ['./about-us-mobile.component.scss'],
  imports: [IonRow, IonGrid, IonCol, NavbarComponent, FooterComponent, IonContent, TranslatePipe]
})
export class AboutUsMobileComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

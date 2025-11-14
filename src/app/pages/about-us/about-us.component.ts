import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { IonRow, IonCard, IonGrid, IonCol, IonIcon, IonText, IonLabel, IonContent, IonicSlides } from '@ionic/angular/standalone';
import { TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  imports: [IonRow, IonGrid, IonCol, NavbarComponent, FooterComponent, IonContent, TranslatePipe]
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}

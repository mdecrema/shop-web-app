import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { IonRow, IonCard, IonGrid, IonCol, IonIcon, IonText, IonLabel, IonContent, IonButton } from '@ionic/angular/standalone';
import { TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { IProduct } from 'src/app/models/product.model';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { IFeature } from 'src/app/models/feature.model';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-features-mobile',
  templateUrl: './features-mobile.component.html',
  styleUrls: ['./features-mobile.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonRow, IonCard, IonGrid, IonCol, IonIcon, IonText, IonLabel, NavbarComponent, FooterComponent, IonContent, TranslatePipe, TranslateDirective, IonButton]
})
export class FeaturesMobileComponent  implements OnInit {
  private _router = inject(Router);

  public featureList: IFeature[] = [];

  constructor(
  private menuCtrl: MenuController
) { }

  ngOnInit() {
    this.menuCtrl.close('main-menu');

this.featureList = [
      {
        id: 0,
        title: "new_opportunity",
        description: "Questi materiali possono essere adatti a sostituire plastiche convenzionali, utilizzate in diversi settori. \nPossono anche costituire una valida alternativa a sostanze e composti di sintesi comunemente utilizzati nelle mescole o nelle formulazioni. \nInoltre si può ricorrere anche all’accoppiamento con altri materiali, per creare nuove soluzioni di mercato.",
        image: "./assets/images/idrogeli-1.avif",
        active: true
      },
      {
        id: 1,
        title: "infinite_application",
        description: "Sono efficaci come matrici leganti per diversi tipi di materiali compositi, come resine ed addensanti in pitture e vernici, come membrane traspiranti protettive, come matrici inclusive di sostanze a lento rilascio in agricoltura biologica e come pellicole sottili per il settore packaging, anche a contatto con gli alimenti.",
        image: "./assets/images/img-1.jpg",
        active: false
      },
      {
        id: 2,
        title: "properties",
        description: "Le loro eccezionali proprietà li rendono unici: possono essere trasparenti, si puo’ modulare la resistenza meccanica, sono adatti come materiali a contatto coi cibi, hanno proprietà mediche e cosmetiche, sono chelanti di metalli pesanti, biodegradabili e alcuni addirittura edibili. Sono ritardanti di fiamma e agiscono come fertilizzanti naturali. Queste sono solo alcune delle proprietà scoperte finora.",
        image: "./assets/images/film-1.jpg",
        active: false
      },
      {
        id: 3,
        title: "competitive",
        description: "La loro grande disponibilità e l’efficacia già a basse quantità, gli consente di essere economicamente competitivi.",
        image: "./assets/images/idrogeli-2.jpg",
        active: false
      }
    ]
}
  
  public getFeatureActiveImage() {
    const featureActive = this.featureList.find(feature => feature.active);
    return featureActive?.image || '';
  }


}

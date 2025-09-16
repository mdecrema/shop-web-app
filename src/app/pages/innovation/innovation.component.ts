import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRow, IonCard, IonGrid, IonCol, IonIcon, IonText, IonLabel, IonContent, IonButton } from '@ionic/angular/standalone';
import { TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { IProduct } from 'src/app/models/product.model';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { IFeature } from 'src/app/models/feature.model';

@Component({
  selector: 'app-innovation',
  templateUrl: './innovation.component.html',
  styleUrls: ['./innovation.component.scss'],
  imports: [IonRow, IonCard, IonGrid, IonCol, IonIcon, IonText, IonLabel, NavbarComponent, FooterComponent, IonContent, TranslatePipe, TranslateDirective, IonButton]
})
export class InnovationComponent  implements OnInit {
  private _router = inject(Router);
  
  public featureList: IFeature[] = [];

  constructor() { }

  ngOnInit() {
    this.featureList = [
      {
        id: 0,
        title: "new_opportunity",
        description: "si possono  ottenere soluzioni utili sia per sostituire materiali e sostanze convenzionali, sia per creare nuove opportunità d’impiego.",
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
        title: "versatility",
        description: "La loro eccezionale versatilità li rende unici: possono essere trasparenti, si puo’ modulare la resistenza meccanica, sono adatti come materiali a contatto coi cibi, hanno proprietà mediche e cosmetiche, sono chelanti di metalli pesanti, biodegradabili e alcuni addirittura edibili.",
        image: "./assets/images/facial-sheet-mask.png",
        active: false
      },
      {
        id: 3,
        title: "cheap",
        description: "La loro grande disponibilità e l’efficacia già a basse quantità, gli consente di essere economicamente competitivi.",
        image: "./assets/images/idrogeli-2.jpg",
        active: false
      }
    ]


  }

  public getFeatureActiveTitle() {
    const featureActive = this.featureList.find(feature => feature.active);
    return featureActive?.title || '';
  }

  public getFeatureActiveDescription() {
    const featureActive = this.featureList.find(feature => feature.active);
    return featureActive?.description || '';
  }
  
  public getFeatureActiveImage() {
    const featureActive = this.featureList.find(feature => feature.active);
    return featureActive?.image || '';
  }

  public setFeatureActive(featureId: number) {
    this.featureList = this.featureList.map((feature: IFeature) => ({
      ...feature,
      active: feature.id == featureId ? true : false
    }));
  }

  public navigateToRoute(route: string) {
    return this._router.navigate([route]);
  }

}

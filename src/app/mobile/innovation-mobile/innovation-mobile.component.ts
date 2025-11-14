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
  selector: 'app-innovation-mobile',
  templateUrl: './innovation-mobile.component.html',
  styleUrls: ['./innovation-mobile.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonRow, IonGrid, IonCol, IonIcon, IonLabel, NavbarComponent, FooterComponent, IonContent, TranslatePipe]
})
export class InnovationMobileComponent  implements OnInit {
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
        description: "innovation_page_new_opportunity_description",
        image: "./assets/images/idrogeli-1.avif",
        active: true
      },
      {
        id: 1,
        title: "infinite_application",
        description: "innovation_page_infinite_application_description",
        image: "./assets/images/img-1.jpg",
        active: false
      },
      {
        id: 2,
        title: "properties",
        description: "innovation_page_properties_description",
        image: "./assets/images/film-1.jpg",
        active: false
      },
      {
        id: 3,
        title: "competitive",
        description: "innovation_page_competitive_description",
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

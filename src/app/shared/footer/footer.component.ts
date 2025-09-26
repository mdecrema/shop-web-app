import { Component, inject, OnInit } from '@angular/core';
import { IonRow, IonCard, IonCol, IonIcon, IonText, IonLabel, IonList, IonItem, IonInput, IonSearchbar } from '@ionic/angular/standalone';
import { TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { Router, RouterLinkActive } from "@angular/router";
import { IRoute } from 'src/app/models/route.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [TranslatePipe, TranslateDirective, IonRow, IonCard, IonCol, IonIcon, IonText, IonLabel, IonList, IonItem, IonInput, IonSearchbar]
})
export class FooterComponent  implements OnInit {
  private _router = inject(Router);
  public routeList: IRoute[] = [];

  constructor() { }

  ngOnInit() {
    this.routeList = [
      {
        id: 0,
        i18n: 'home',
        route: '/'
      },
      {
        id: 1,
        i18n: 'solutions',
        route: '/solutions'
      },
      {
        id: 1,
        i18n: 'innovation',
        route: '/innovation'
      },
      {
        id: 0,
        i18n: 'about_us',
        route: '/about-us'
      },
      {
        id: 0,
        i18n: 'contacts',
        route: '/contacts'
      }
    ];
  }

  public navigateToRoute(route: IRoute) {
    return this._router.navigate([route.route]);
  }

}

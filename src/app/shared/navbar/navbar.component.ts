import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, Input, OnInit } from '@angular/core';
import { IonRow, IonCard, IonCol, IonIcon, IonText, IonLabel, IonButton, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { ILanguage } from 'src/app/models/language.model';
import { IRoute } from 'src/app/models/route.model';
import {TranslateService, TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { Router, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [TranslatePipe, TranslateDirective, IonRow, IonCard, IonCol, IonIcon, IonText, IonLabel, IonButton, IonSelect, IonSelectOption, RouterLinkActive]
})
export class NavbarComponent  implements OnInit {
  private _router = inject(Router);
  private _collapse: boolean = false;
  private translate = inject(TranslateService);
  public routeList: IRoute[] = [];
  public languagesAvailable: ILanguage[] = [];

  constructor() { 
  }

  ngOnInit() {

        this.languagesAvailable = [
      {
        id: 0,
        code: 'it',
        description: 'Italiano'
      },
      {
        id: 1,
        code: 'en',
        description: 'English'
      },
      {
        id: 0,
        code: 'de',
        description: 'German'
      }
    ];

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
        i18n: 'services',
        route: '/services'
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

   @Input()
    public set collapse(value: boolean) {
        this._collapse = value;
    }

    public get collapse(): boolean {
        return this._collapse;
    }

  public getCurrentLang() {
    return this.translate.getCurrentLang();
  }

  public setLang(event: any) {
    const langCode = event.target.value;
    this.translate.use(langCode);
  }

  public navigateToRoute(route: IRoute) {
    return this._router.navigate([route.route]);
  }

}


import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonSelect, IonSelectOption, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, remove, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, chevronForwardOutline, logoFacebook, logoInstagram, mail, menuOutline, leafOutline, barChartOutline, flaskOutline, trendingUpOutline, languageOutline, chevronDownOutline, closeOutline, arrowForwardOutline, callOutline, timeOutline } from 'ionicons/icons';
import {
    TranslateService,
    TranslatePipe,
    TranslateDirective
} from "@ngx-translate/core";
import { FooterComponent } from './shared/footer/footer.component';
import { IRoute } from './models/route.model';
import { ILanguage } from './models/language.model';
import { filter } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [TranslatePipe, TranslateDirective, FooterComponent, RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonSelect, IonSelectOption, IonRouterLink, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  private _router = inject(Router);
  private translate = inject(TranslateService);
  public routeList: IRoute[] = [];
  public languagesAvailable: ILanguage[] = [];
  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    private menuCtrl: MenuController,
    private titleService: Title
  ) {
    this.translate.addLangs(['it', 'de', 'en']);
        this.translate.setFallbackLang('it');
        this.translate.use('it');
    addIcons({ closeOutline, chevronDownOutline, languageOutline, add, remove, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, chevronForwardOutline, logoFacebook, logoInstagram, mail, menuOutline, barChartOutline, flaskOutline, trendingUpOutline, leafOutline, arrowForwardOutline, callOutline, timeOutline });  
  
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
  ngOnInit(): void {
  this.titleService.setTitle('Loli Solutions');

    this._router.events.pipe(
    filter((event: any): event is NavigationEnd => event instanceof NavigationEnd)
).subscribe((event: NavigationEnd) => {
    // A route change has occurred, now close the side menu
    this.menuCtrl.close('main-menu');
});
  }

  public navigateToRoute(route: IRoute) {
    this.menuCtrl.close('main-menu');
    return this._router.navigate([route.route]);
  }

  public getCurrentLang() {
    return this.translate.getCurrentLang();
  }

  public setLang(event: any) {
    const langCode = event.target.value;
    this.translate.use(langCode);
  }

}

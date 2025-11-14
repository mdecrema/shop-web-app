import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, model, NgZone, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonGrid, IonRow, IonCard, IonCol, IonList, IonItem, IonIcon, IonText, IonLabel, IonButton, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { IProduct } from '../models/product.model';
import { addIcons } from 'ionicons';
import { chevronForwardOutline, logoFacebook, logoInstagram, mail } from 'ionicons/icons';
import { startWith, Subject, takeUntil } from 'rxjs';
import { IRoute } from '../models/route.model';
import { ILanguage } from '../models/language.model';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { Router, RouterLinkActive } from "@angular/router";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HomeMobileComponent } from '../mobile/home-mobile/home-mobile.component';
import { MenuController } from '@ionic/angular';
import { SeoService } from '../services/seo.service';
import { Swiper } from 'swiper/types';
import { SolutionsService } from '../services/solutions.service';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [NavbarComponent, FooterComponent, HomeMobileComponent, TranslatePipe, TranslateDirective, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonGrid, IonRow, IonCard, IonCol, IonList, IonItem, IonIcon, IonText, IonLabel, IonButton, IonSelect, IonSelectOption],
})
export class FolderPage implements OnInit, AfterViewInit, OnDestroy  {
  private _router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private io?: IntersectionObserver;
  private destroy$ = new Subject<void>();

  public collapse: boolean = false;
  public folder!: string;
  public productList: IProduct[] = [];

  public isMobile: boolean = false;

  @ViewChild('content', { static: false }) content!: IonContent;
  @ViewChildren('productCard', { read: ElementRef }) productCards!: QueryList<ElementRef<HTMLElement>>;
  // @ViewChild('solutionSwiper', { static: false }) solutionSwiper!: ElementRef;
  @ViewChild('solutionSwiper', { static: false }) swiperRef?: ElementRef<SwiperContainer>;

  constructor(
    private ngZone: NgZone,
    private breakpointObserver: BreakpointObserver,
    private menuCtrl: MenuController,
    private solutionsService: SolutionsService,
    private seoService: SeoService
  ) {
    addIcons({ chevronForwardOutline, logoFacebook, logoInstagram, mail });

    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isMobile = result.matches;
    });
  }

  ngAfterViewInit(): void {}

  ngOnInit() {
    this.menuCtrl.close('main-menu');

    // SEO
    this.seoService.updateMeta(
      'Home - Loli Solutions',
      'Offriamo soluzioni alternative ed ecologiche. Le soluzioni si basano su estratti polimerici capaci di funzionare come agenti legati, addensanti, filmanti ed inclusivi. Questi estratti sono completamente naturali, biodegradabili ed addirittura edibili.'
    );

    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;

    
  setTimeout(() => {
    this.loadProducts().then(() => {
      this.initializeSwiperAutoplay();
    });
  
  },100)
  }

  onScroll(ev: any) {
    const currentY = (ev.detail as any).scrollTop;
    if (currentY >= 200) {
      this.collapse = true;
    } else {
      this.collapse = false;
    }
  }

  public navigateToSolution(solutionId: number) {
    if ([0, 3, 5].includes(solutionId)) {
      return this._router.navigate(['/solutions', solutionId])
    }
    return;
  }

  public navigateToRoute(route: string) {
    return this._router.navigate([route])
  }

  public setBackgroundImage(item: IProduct): string {
    return `./../../../assets/images/${item?.image}`;
  
  }
  public setBackgroundPosition(i: number): string {
    return i == 0 ? '0 -200px' : '0';  
  }

  initializeSwiperAutoplay() {
    setTimeout(() => {
      if (this.swiperRef?.nativeElement) {
        
        this.ngZone.run(() => {
          const swiper = this.swiperRef!.nativeElement;

          swiper.swiper.params.autoplay = true;
          
          swiper.swiper.autoplay.start();
          console.log("Swiper Autoplay Started Manually!");
        });
      }
    }, 50);
  }

  loadProducts() {
    return new Promise(resolve => {
      this.productList = this.solutionsService.getSolutionList();
      resolve(true);
    });
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
    this.destroy$.next();
    this.destroy$.complete();
  }

}

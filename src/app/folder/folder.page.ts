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

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [NavbarComponent, FooterComponent, TranslatePipe, TranslateDirective, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonGrid, IonRow, IonCard, IonCol, IonList, IonItem, IonIcon, IonText, IonLabel, IonButton, IonSelect, IonSelectOption],
})
export class FolderPage implements OnInit, AfterViewInit, OnDestroy  {
  private _router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  public collapse: boolean = false;
  public folder!: string;
  public productList: IProduct[] = [];


   private io?: IntersectionObserver;
  private destroy$ = new Subject<void>();

  // @ViewChild(IonContent) content!: IonContent;
  @ViewChild('content', { static: false }) content!: IonContent;
  @ViewChildren('productCard', { read: ElementRef }) productCards!: QueryList<ElementRef<HTMLElement>>;
  constructor(private ngZone: NgZone) {
    addIcons({ chevronForwardOutline, logoFacebook, logoInstagram, mail });
  }
  ngOnDestroy(): void {
     this.io?.disconnect();
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngAfterViewInit(): void {
    // Watch QueryList changes (handles async data)
    this.productCards.changes
      .pipe(startWith(this.productCards), takeUntil(this.destroy$))
      .subscribe((ql: any) => {
        console.log('[productCards] count', ql.length, ql.toArray().map((c: any) => c.nativeElement.id));
        this.initObserver(ql);
      });
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;

    this.productList = [
      {
        id: 0,
        name: 'Paint',
        mainDescription: 'Biopolimeri alternativi alle tradizionali resine sintetiche come acrilati, siliconi, poliuretani',
        description: 'Queste matrici polimeriche offrono la possibilità di formulare pitture e vernici completamente naturali, prive di VOC e ritardanti di fiamma. Sono particolarmente adatte ad essere applicate nel settore delle pitture per l’infanzia,  per l’uso sulla pelle e decorative indoor, essendo prive di sostanze tossiche, anzi addirittura edibili e aventi proprietà cosmetiche dermocompatibili.'
      },
      {
        id: 1,
        name: 'Phyto',
        mainDescription: 'Biopolimeri adatti ad essere dispensati su foglie e frutti delle piante nel settore agricolo',
        description: 'Perfetti per l’agricoltura biologica, questi polimeri vengono formulati per creare dei gel adatti ad inglobare additivi e sostanze anticrittogamiche, erbicidi e insetticidi. Spesso queste sostanze sono instabili e una volta che sono applicati sulla vegetazione, vengono facilmente degradati e dilavati dagli agenti atmosferici. Questi prodotti permettono un maggior tempo di permanenza, una maggiore esposizione ed un lento rilascio che garantisce una minore frequenza di applicazione e minori sprechi.'
      },
      {
        id: 2,
        name: 'Compo',
        mainDescription: 'Biopolimeri utili come alternativa ai tradizionali polimeri leganti di cariche inerti in materiali compositi',
        description: 'Scopri le proprietà delle nuove matrici polimeriche che possono offrire una valida soluzione nel creare materiali compositi resistenti, senza VOC e leggeri. La speciale matrice offre inoltre ottime proprietà ritardanti di fiamma, trasparenza e possibilità di cross-linking modulare. Se si vuole concepire nuovi compositi adatti ad essere facilmente smaltiti o addirittura biodegradabili, LoLicompo potrebbe essere la soluzione giusta!'
      },
      {
        id: 3,
        name: 'Pack',
        mainDescription: 'Biopolimeri per una nuova generazione di packaging plastic-free',
        description: 'Molte Aziende nel mondo stanno sviluppando film sottili, contenitori rigidi, finestre trasparenti con questi nuovi materiali. Abbiamo collaborato con diverse di queste Aziende, leader nel settore, per aiutarle a sviluppare valide alternative ai prodotti in commercio.'
      },
      {
        id: 4,
        name: 'Layer',
        mainDescription: 'Biopolimeri che creano film sottili adatti ad essere poliaccoppiati ad altri materiali',
        description: 'Una valida alternativa alla plastica conferendo elasticità al materiale. Adatti anche a produrre membrane porose particolarmente utili ad essere applicate nell’industria tessile come strati piu’ o meno sottili aventi proprietà isolanti e traspiranti.'
      },
      {
        id: 5,
        name: 'Beauty',
        mainDescription: 'Biopolimeri che creano film sottili adatti ad essere poliaccoppiati ad altri materiali',
        description: 'Una valida alternativa alla plastica conferendo elasticità al materiale. Adatti anche a produrre membrane porose particolarmente utili ad essere applicate nell’industria tessile come strati piu’ o meno sottili aventi proprietà isolanti e traspiranti.'
      },
      {
        id: 5,
        name: 'Idea',
        mainDescription: 'Proponici una tua idea',
        description: 'Se hai un’idea che pensi possa essere interessante per  lo sviluppo di un nuovo prodotto aziendale o per migliorare quelli già esistenti, rivolgiti a noi! Siamo a tua disposizione per valutare le opzioni possibili e per supportarti nello sviluppo del prodotto piu’ adatto alle tue esigenze.'
      }
    ];
  }


    private async initObserver(ql: QueryList<ElementRef<HTMLElement>>) {
    if (!ql || ql.length === 0) {
      console.log('[initObserver] no product cards yet');
      return;
    }

    if (this.io) {
      this.io.disconnect();
      this.io = undefined;
    }

    try {
      const scrollEl = await this.content.getScrollElement();
      console.log('[initObserver] scroll element found', scrollEl);

      this.io = new IntersectionObserver((entries) => {
        this.ngZone.run(() => {
          entries.forEach(entry => {
            const el = entry.target as HTMLElement;

            if (entry.intersectionRatio >= 1) {
              el.classList.remove('close');
              el.classList.add('open');
            } 
          });
        });
      }, {
        root: scrollEl,
        threshold: 0.5
      });

      ql.forEach(card => {
        try { this.io!.observe(card.nativeElement); }
        catch (e) { console.warn('observe failed for', card.nativeElement, e); }
      });
    } catch (err) {
      console.error('[initObserver] error getting scroll element', err);
    }
  }

  onScroll(ev: any) {
    const currentY = (ev.detail as any).scrollTop;
    if (currentY >= 200) {
      this.collapse = true;
    } else {
      this.collapse = false;
    }

    const scrollEl = ev.target as HTMLElement;
    const contentRect = scrollEl.getBoundingClientRect();

    this.productCards.forEach(card => {
      const el = card.nativeElement as HTMLElement;
      const rect = el.getBoundingClientRect();

      const visibleHeight = Math.min(rect.bottom, contentRect.bottom) - Math.max(rect.top, contentRect.top);
      const visibleRatio = Math.max(0, visibleHeight) / rect.height;

      if (visibleRatio >= 1) {
        el.classList.remove('close');
        el.classList.add('open');
      }
    });
  }

  public navigateToRoute(solutionId: number) {
    this._router.navigate(['/solutions', solutionId])
  }

}

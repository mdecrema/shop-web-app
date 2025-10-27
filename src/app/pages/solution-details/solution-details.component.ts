import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonCol, IonIcon, IonText, IonLabel, IonContent } from '@ionic/angular/standalone';
import { TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { IProduct } from 'src/app/models/product.model';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { MenuController } from '@ionic/angular';
import { PaintComponent } from './paint/paint.component';
import { BeautyComponent } from './beauty/beauty.component';

@Component({
  selector: 'app-solution-details',
  templateUrl: './solution-details.component.html',
  styleUrls: ['./solution-details.component.scss'],
  imports: [IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonCol, IonIcon, IonText, IonLabel, NavbarComponent, FooterComponent, NgSwitch, NgSwitchCase, IonContent, TranslatePipe, TranslateDirective, PaintComponent, BeautyComponent]
})
export class SolutionDetailsComponent  implements OnInit {
  private _activatedRoute = inject(ActivatedRoute);
  public solutionList: IProduct[] = [];
  public solution!: IProduct;

  constructor(
    private menuCtrl: MenuController
  ) { }

  ngOnInit() {
    this.menuCtrl.close('main-menu');

    this.solutionList = [
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
        id: 6,
        name: 'Idea',
        mainDescription: 'Proponici una tua idea',
        description: 'Se hai un’idea che pensi possa essere interessante per lo sviluppo di un nuovo prodotto aziendale o per migliorare quelli già esistenti, rivolgiti a noi! Siamo a tua disposizione per valutare le opzioni possibili e per supportarti nello sviluppo del prodotto piu’ adatto alle tue esigenze.'
      }
    ];

    
    const solutionId = Number(this._activatedRoute.snapshot.paramMap.get('id'));

    this.solution = this.setSolutionById(solutionId);

  }

  public setSolutionById(solutionId: number): IProduct {
      return (this.solutionList || [])
        .find(solution => solution.id == solutionId) || this.solutionList[0];
  }

}

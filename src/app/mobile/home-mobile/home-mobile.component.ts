import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { IonRow, IonCard, IonGrid, IonCol, IonIcon, IonText, IonLabel, IonContent, IonButton } from '@ionic/angular/standalone';
import { TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { IProduct } from 'src/app/models/product.model';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { IFeature } from 'src/app/models/feature.model';
import { MenuController } from '@ionic/angular';
import { SolutionsService } from 'src/app/services/solutions.service';

@Component({
  selector: 'app-home-mobile',
  templateUrl: './home-mobile.component.html',
  styleUrls: ['./home-mobile.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonRow, IonGrid, IonCol, IonIcon, IonLabel, NavbarComponent, FooterComponent, IonContent, TranslatePipe, IonButton]
})
export class HomeMobileComponent  implements OnInit {
  private _router = inject(Router);
  public productList: IProduct[] = [];

  @ViewChild('content', { static: false }) content!: IonContent;
  @ViewChildren('productCard', { read: ElementRef }) productCards!: QueryList<ElementRef<HTMLElement>>;
  constructor(
    private menuCtrl: MenuController,
    private solutionsService: SolutionsService,
  ) { }

  ngOnInit() {
    this.menuCtrl.close('main-menu');

    this.productList = this.solutionsService.getSolutionList();
  }

  public navigateToSolution(solutionId: number) {
    return this._router.navigate(['/solutions', solutionId])
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

}

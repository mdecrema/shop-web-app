import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonCol, IonIcon, IonText, IonLabel, IonContent } from '@ionic/angular/standalone';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { BeautyMobileComponent } from 'src/app/mobile/solutions-mobile/beauty-mobile/beauty-mobile.component';
import { IProduct } from 'src/app/models/product.model';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';

@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.scss'],
  imports: [IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, TranslatePipe, BeautyMobileComponent]
})
export class BeautyComponent  implements OnInit {
  public _solution: IProduct;
  public isMobile: boolean = false;

  constructor(
    private breakpointObserver: BreakpointObserver,     
  ) {
    this._solution = {} as IProduct;

    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isMobile = result.matches;
    });
  }

  ngOnInit() {}

  @Input()
  public set solution(solution: IProduct) {
    this._solution = solution;
  }

  public get solution(): IProduct {
    return this._solution;
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonCol, IonIcon, IonText, IonLabel, IonContent } from '@ionic/angular/standalone';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { IProduct } from 'src/app/models/product.model';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';

@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.scss'],
  imports: [IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonCol, IonIcon, IonText, IonLabel, NavbarComponent, FooterComponent, IonContent, TranslatePipe, TranslateDirective]
})
export class BeautyComponent  implements OnInit {
  public _solution: IProduct;

  constructor() {
    this._solution = {} as IProduct;
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

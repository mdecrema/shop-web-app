import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonCol, IonIcon, IonText, IonLabel, IonContent } from '@ionic/angular/standalone';
import { TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { IProduct } from 'src/app/models/product.model';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';

@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.scss'],
  imports: [IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonCol, IonIcon, IonText, IonLabel, NavbarComponent, FooterComponent, IonContent, TranslatePipe, TranslateDirective]
})
export class PaintComponent  implements OnInit {
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

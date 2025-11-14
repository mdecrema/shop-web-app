import { Component, Input, OnInit } from '@angular/core';
import { IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonCol, IonIcon, IonText, IonItem, IonLabel, IonContent } from '@ionic/angular/standalone';
import { TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { IProduct } from 'src/app/models/product.model';

@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.html',
  styleUrls: ['./pack.component.scss'],
    imports: [IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonCol, IonIcon, IonItem, IonLabel, TranslatePipe]
})
export class PackComponent implements OnInit {
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

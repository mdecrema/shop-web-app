import { Component, OnInit } from '@angular/core';
import { IonRow, IonCard, IonCol, IonIcon, IonText, IonLabel } from '@ionic/angular/standalone';
import { TranslatePipe, TranslateDirective} from "@ngx-translate/core";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [TranslatePipe, TranslateDirective, IonRow, IonCard, IonCol, IonIcon, IonText, IonLabel]
})
export class FooterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

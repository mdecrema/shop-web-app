import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonCol, IonIcon, IonText, IonLabel, IonContent } from '@ionic/angular/standalone';
import { TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-paint-mobile',
  templateUrl: './paint-mobile.component.html',
  styleUrls: ['./paint-mobile.component.scss'],
  imports: [IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonCol, TranslatePipe]
})
export class PaintMobileComponent  implements OnInit, AfterViewInit {

  @ViewChild('mainSplide') mainSplideRef!: ElementRef;
  private splideInstance!: Splide;

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  
 ngAfterViewInit() {
  setTimeout(() => {
  
      this.splideInstance = new Splide(
        this.mainSplideRef.nativeElement,
        {
          type: 'loop',
          arrows: false,
          autoplay: true,
          interval: 5000, 
          pauseOnHover: true,
        }
      );
      this.splideInstance.mount();
      this.cdr.detectChanges();
    }, 0);
  }

  ngOnInit() {}

}

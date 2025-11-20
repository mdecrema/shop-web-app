import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonCol, IonIcon, IonText, IonLabel, IonContent } from '@ionic/angular/standalone';
import { TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-pack-mobile',
  templateUrl: './pack-mobile.component.html',
  styleUrls: ['./pack-mobile.component.scss'],
  imports: [IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon, IonCol, TranslatePipe]
})
export class PackMobileComponent  implements OnInit, AfterViewInit {

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

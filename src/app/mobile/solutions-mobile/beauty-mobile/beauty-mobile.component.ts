import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonCol, IonIcon, IonText, IonLabel, IonContent } from '@ionic/angular/standalone';
import { TranslatePipe } from '@ngx-translate/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-beauty-mobile',
  templateUrl: './beauty-mobile.component.html',
  styleUrls: ['./beauty-mobile.component.scss'],
  imports: [IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, TranslatePipe]
})
export class BeautyMobileComponent  implements OnInit, AfterViewInit {
  @ViewChild('mainSplide') mainSplideRef!: ElementRef;
  private splideInstance!: Splide;

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {}

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

}

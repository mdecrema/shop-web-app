import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { IonRow, IonCard, IonGrid, IonCol, IonIcon, IonText, IonLabel, IonContent, IonicSlides } from '@ionic/angular/standalone';
import { TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { MenuController } from '@ionic/angular';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AboutUsMobileComponent } from 'src/app/mobile/about-us-mobile/about-us-mobile.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  imports: [IonRow, IonGrid, IonCol, NavbarComponent, FooterComponent, IonContent, TranslatePipe, AboutUsMobileComponent]
})
export class AboutUsComponent implements OnInit {
    public isMobile: boolean = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) {

    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isMobile = result.matches;
    });

  }

  ngOnInit(): void {
    
  }

}

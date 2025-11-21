import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { IonRow, IonCard, IonGrid, IonCol, IonIcon, IonText, IonLabel, IonContent } from '@ionic/angular/standalone';
import { TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  imports: [IonRow, IonGrid, IonCol, IonIcon, NavbarComponent, FooterComponent, IonContent, TranslatePipe]
})
export class ContactsComponent  implements OnInit {
   public isMobile: boolean = false;

  constructor(
    private menuCtrl: MenuController,
     private breakpointObserver: BreakpointObserver,  
  ) { 
    
     this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isMobile = result.matches;
    });
  }

  ngOnInit() {
    this.menuCtrl.close('main-menu');
  }

}

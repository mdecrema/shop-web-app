import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRow, IonCard, IonGrid, IonCol, IonIcon, IonText, IonLabel, IonContent, IonButton } from '@ionic/angular/standalone';
import { TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { IProduct } from 'src/app/models/product.model';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { MenuController } from '@ionic/angular';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { SolutionsService } from 'src/app/services/solutions.service';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss'],
  imports: [IonRow, IonGrid, IonCol, IonIcon, NavbarComponent, FooterComponent, IonContent, TranslatePipe]
})
export class SolutionsComponent  implements OnInit {
  private _router = inject(Router);
  public productList: IProduct[] = [];
  public isMobile: boolean = false;

  constructor(
    private menuCtrl: MenuController,
    private solutionsService: SolutionsService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver.observe(
      [
        Breakpoints.Handset,
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium
      ]
    ).subscribe(result => {
        this.isMobile = result.matches;
    });
  }

  ngOnInit() {
    this.menuCtrl.close('main-menu');
    
    this.productList = this.solutionsService.getSolutionList();

  }

  public navigateToDetails(solutionId: number) {
    if ([0, 3, 5].includes(solutionId)) {
      this._router.navigate(['/solutions', solutionId]);
    }
  }

  public setBackgroundImage(item: IProduct): string {
    return `./../../../assets/images/${item.image}`;
  }

}

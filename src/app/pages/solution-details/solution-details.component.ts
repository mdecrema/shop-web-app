import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonCol, IonIcon, IonText, IonLabel, IonContent } from '@ionic/angular/standalone';
import { TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { IProduct } from 'src/app/models/product.model';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { MenuController } from '@ionic/angular';
import { PaintComponent } from './paint/paint.component';
import { BeautyComponent } from './beauty/beauty.component';
import { SolutionsService } from 'src/app/services/solutions.service';
import { PackComponent } from './pack/pack.component';

@Component({
  selector: 'app-solution-details',
  templateUrl: './solution-details.component.html',
  styleUrls: ['./solution-details.component.scss'],
  imports: [IonRow, IonGrid, IonCol, NavbarComponent, FooterComponent, IonContent, TranslatePipe, PaintComponent, BeautyComponent, PackComponent]
})
export class SolutionDetailsComponent  implements OnInit {
  private _activatedRoute = inject(ActivatedRoute);
  public solutionList: IProduct[] = [];
  public solution!: IProduct;

  constructor(
    private menuCtrl: MenuController,
    private solutionsService: SolutionsService
  ) { }

  ngOnInit() {
    this.menuCtrl.close('main-menu');

    this.solutionList = this.solutionsService.getSolutionList();

    
    const solutionId = Number(this._activatedRoute.snapshot.paramMap.get('id'));

    this.solution = this.setSolutionById(solutionId);

  }

  public setSolutionById(solutionId: number): IProduct {
      return (this.solutionList || [])
        .find(solution => solution.id == solutionId) || this.solutionList[0];
  }

}

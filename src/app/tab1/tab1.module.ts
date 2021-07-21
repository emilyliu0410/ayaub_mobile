import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { CalendarService } from 'ion2-calendar/dist/services/calendar.servICE';
import { CalendarComponentOptions } from 'ion2-calendar/dist/calendar.model';
import { CalendarModule } from 'ion2-calendar';
import { ModalController } from '@ionic/angular';

import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    CalendarModule,
    
  ],
  declarations: [Tab1Page],
  // providers: [CalendarService]
})
export class Tab1PageModule {}

import { CommonModule, CurrencyPipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonIcon, IonTitle, IonButton, IonButtons, IonContent, IonInput, IonRange, IonItem, IonFooter, ModalController } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { arrowBackOutline, arrowForwardOutline, chevronForwardOutline } from 'ionicons/icons';
import { CurrencyFormatterDirective } from 'src/app/core/directives/currency-formatter.directive';
import { InstitutesModalComponent } from '../institutes-modal/institutes-modal.component';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
  standalone: true,
  imports: [IonContent, IonIcon,IonButton, IonHeader, IonToolbar,IonButtons, IonTitle,IonInput,IonRange, IonItem, IonFooter, FormsModule, CommonModule, CurrencyFormatterDirective ],
  providers: [CurrencyPipe]
})
export class FilterModalComponent  implements OnInit, AfterViewInit {
  @ViewChild('tuitionRangeSlider', { static: false }) tuitionRangeSlider!: ElementRef;

  minTuition = 50000;
  maxTuition = 120000;
  tuitionRange = { lower: 50000, upper: 120000 };
  minKnobPosition = 25;
  maxKnobPosition = 60; 

  filterCategories = [
    { id: 1, title: 'Institutes', selection: 'None selected' },
    { id: 2, title: 'Education Level', selection: 'None selected' },
    { id: 3, title: 'Country', selection: 'United States, United Kingdom' },
    { id: 4, title: 'Discipline', selection: 'Law, Mathematics' },
    { id: 5, title: 'Study Language', selection: 'None selected' },
    { id: 6, title: 'Attendance', selection: 'None selected' }
  ];

  constructor(private modalCtrl: ModalController) {
    addIcons({ arrowBackOutline, arrowForwardOutline, chevronForwardOutline,  });
  }
  
  
  ngAfterViewInit(){
    setTimeout(() => {
      this.updateKnobPositions();
    }, 100);
    
  }

  ngOnInit() {}

  updateInputFromSlider() {
    this.minTuition = this.tuitionRange.lower;
    this.maxTuition = this.tuitionRange.upper;
  }

  updateSliderFromInput(type: 'min' | 'max') {
    if (type === 'min') {
      this.tuitionRange = { ...this.tuitionRange, lower: this.minTuition };
    } else {
      this.tuitionRange = { ...this.tuitionRange, upper: this.maxTuition };
    }
  }

  navigateToSelection(category: any) {
    console.log(`Navigate to ${category.title} selection`);
    if (category.title === 'Institutes') {
      this.openModal()
    } else { return; }
    // Implementation would navigate to a selection screen for this category
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: InstitutesModalComponent ,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      //this.message = `Hello, ${data}!`;
    }
  }

  clearAll() {
    this.filterCategories = this.filterCategories.map(cat => ({
      ...cat,
      selection: 'None selected'
    }));
    this.minTuition = 0;
    this.maxTuition = 200000;
    this.tuitionRange = { lower: 0, upper: 200000 };
  }

  viewResults() {
    this.openModal();
  }

  dismiss(data?: any) {
    return this.modalCtrl.dismiss(data);
  }
  updateKnobPositions() {
    const rangeMin = 0;
    const rangeMax = 200000;
    const rangeWidth = rangeMax - rangeMin;
    this.minKnobPosition = ((this.tuitionRange.lower - rangeMin) / rangeWidth) * 100;
    this.maxKnobPosition = ((this.tuitionRange.upper - rangeMin) / rangeWidth) * 100;
  }
  
  formatLabel(value: number): string {
    return Math.round(value / 1000) + 'k';
  }
}


import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonIcon, IonTitle, IonButton, IonButtons, IonSearchbar, IonContent, IonFooter, ModalController, IonRadio, IonList, IonRadioGroup, IonItem, IonLabel } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { checkmarkCircle, chevronBackOutline, flagOutline, searchOutline } from 'ionicons/icons';
import { CurrencyFormatterDirective } from 'src/app/core/directives/currency-formatter.directive';
import { Institute } from 'src/app/core/models/program';

@Component({
  selector: 'app-institutes-modal',
  templateUrl: './institutes-modal.component.html',
  styleUrls: ['./institutes-modal.component.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonRadioGroup, IonList, IonRadio, IonContent, IonSearchbar, IonIcon,IonButton, IonHeader, IonToolbar,IonButtons, IonTitle, IonFooter, FormsModule, CommonModule],
})
export class InstitutesModalComponent  implements OnInit {
  selectedInstituteId: number | null = null;
  searchQuery: string = '';
  institutes: Institute[] = [
    {
      id: 1,
      name: 'University of Graz',
      country: 'Canada',
      programs: 629,
      logo: 'assets/icon/uni-graz.svg',
      selected: false
    },
    {
      id: 2,
      name: 'University of Graz',
      country: 'Canada',
      programs: 629,
      logo: 'assets/icon/uni-graz.svg',
      selected: false
    },
    {
      id: 3,
      name: 'University of Graz',
      country: 'Canada',
      programs: 629,
      logo: 'assets/icon/uni-graz.svg',
      selected: false
    },
    {
      id: 4,
      name: 'University of Liverpool',
      country: 'Canada',
      programs: 629,
      logo: 'assets/icon/uni-graz.svg',
      selected: true
    },
    {
      id: 5,
      name: 'University of Graz',
      country: 'Canada',
      programs: 629,
      logo: 'assets/icon/uni-graz.svg',
      selected: false
    },
    {
      id: 6,
      name: 'University of Graz',
      country: 'Canada',
      programs: 629,
      logo: 'assets/icon/uni-graz.svg',
      selected: false
    },
    {
      id: 7,
      name: 'University of Graz',
      country: 'Canada',
      programs: 629,
      logo: 'assets/icon/uni-graz.svg',
      selected: false
    }
  ];
  filteredInstitutes: Institute[] = [];

  constructor(private modalCtrl: ModalController) {
    addIcons({chevronBackOutline,flagOutline,checkmarkCircle,searchOutline,});
  }

  ngOnInit() {
    this.filteredInstitutes = [...this.institutes];
    const selectedInstitute = this.institutes.find(i => i.selected);
    this.selectedInstituteId = selectedInstitute ? selectedInstitute.id : null;

  }

  filterInstitutes() {
    if (!this.searchQuery.trim()) {
      this.filteredInstitutes = [...this.institutes];
      return;
    }

    const query = this.searchQuery.toLowerCase().trim();
    this.filteredInstitutes = this.institutes.filter(
      institute => institute.name.toLowerCase().includes(query) || institute.country.toLowerCase().includes(query)
    );
  }
  toggleSelection(selectedId: number) {
    this.institutes.forEach(institute => {
      institute.selected = institute.id === selectedId;
    });
  
    this.filteredInstitutes.forEach(institute => {
      institute.selected = institute.id === selectedId;
    });
  
    this.selectedInstituteId = selectedId;
  }

  clearAll() {
    this.institutes = this.institutes.map(institute => ({
      ...institute,
      selected: false
    }));
    this.filteredInstitutes = this.filteredInstitutes.map(institute => ({
      ...institute,
      selected: false
    }));
  }

  applyFilter() {
    const selectedInstitutes = this.institutes.filter(institute => institute.selected);
    this.dismiss(selectedInstitutes);
  }

  dismiss(data?: any) {
    return this.modalCtrl.dismiss(data);
  }

}

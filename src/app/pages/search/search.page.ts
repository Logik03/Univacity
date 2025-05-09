import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonLabel, ModalController } from '@ionic/angular/standalone';
import { ProgramCardComponent } from 'src/app/shared/components/program-card/program-card.component';
import { Program, Tag } from 'src/app/core/models/program';
import { SearchHeaderComponent } from 'src/app/shared/components/search-header/search-header.component';
import { addIcons } from 'ionicons';
import { closeCircle, closeOutline } from 'ionicons/icons';
import { PillButtonsComponent } from 'src/app/shared/components/pill-buttons/pill-buttons.component';
import { FilterModalComponent } from 'src/app/shared/modals/filter-modal/filter-modal.component';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonLabel, IonContent, IonHeader, CommonModule, FormsModule, ProgramCardComponent, SearchHeaderComponent, PillButtonsComponent]
})
export class SearchPage implements OnInit {

  activeFilterCount = 0; 
  programs: Program[] = [
    {
      id: 1,
      programTitle: 'Computer Technologies and Environmental Engineering',
      universityName: 'University of Liverpool',
      imageUrl: 'assets/images/univacityImage.svg',
      logoUrl: 'assets/icon/uni-graz.svg',
      country: 'Canada',
      degreeType: 'Masters',
      studyMode: 'Fulltime',
      duration: '2 years',
      language: 'English Language',
      price: '€363.36',
      isOfficialPartner: true,
      views : 191126,
      impressions: 293612,
      programDescription : "The master's programme in Environmental Systems Sciences / Climate and Environmental Monitoring at the University of Graz offers a wide spectrum of disciplines, challenging students to develop improved strategies and solutions. This unique programme equips students with the skills to tackle environmental problems effectively."
    },
    {
      id: 2,
      programTitle: 'Computer Technologies and Environmental Engineering',
      universityName: 'University of Liverpool',
      imageUrl: 'assets/images/univacityImage.svg',
      logoUrl: 'assets/icon/uni-graz.svg',
      country: 'Canada',
      degreeType: 'Masters',
      studyMode: 'Fulltime',
      duration: '2 years',
      language: 'English Language',
      price: '€363.36',
      isOfficialPartner: true,
      programDescription : "The master's programme in Environmental Systems Sciences / Climate and Environmental Monitoring at the University of Graz offers a wide spectrum of disciplines, challenging students to develop improved strategies and solutions. This unique programme equips students with the skills to tackle environmental problems effectively."
    },
    {
      id: 3,
      programTitle: 'Computer Technologies and Environmental Engineering',
      universityName: 'University of Liverpool',
      imageUrl: 'assets/images/univacityImage.svg',
      logoUrl: 'assets/icon/uni-graz.svg',
      country: 'Canada',
      degreeType: 'Masters',
      studyMode: 'Fulltime',
      duration: '2 years',
      language: 'English Language',
      price: '€363.36',
      isOfficialPartner: true,
      programDescription : "The master's programme in Environmental Systems Sciences / Climate and Environmental Monitoring at the University of Graz offers a wide spectrum of disciplines, challenging students to develop improved strategies and solutions. This unique programme equips students with the skills to tackle environmental problems effectively."
    },
    {
      id: 4,
      programTitle: 'Computer Technologies and Environmental Engineering',
      universityName: 'University of Liverpool',
      imageUrl: 'assets/images/univacityImage.svg',
      logoUrl: 'assets/icon/uni-graz.svg',
      country: 'Canada',
      degreeType: 'Masters',
      studyMode: 'Fulltime',
      duration: '2 years',
      language: 'English Language',
      price: '€363.36',
      isOfficialPartner: true,
      programDescription : "The master's programme in Environmental Systems Sciences / Climate and Environmental Monitoring at the University of Graz offers a wide spectrum of disciplines, challenging students to develop improved strategies and solutions. This unique programme equips students with the skills to tackle environmental problems effectively."
    },
    {
      id: 5,
      programTitle: 'Computer Technologies and Environmental Engineering',
      universityName: 'University of Liverpool',
      imageUrl: 'assets/images/univacityImage.svg',
      logoUrl: 'assets/icon/uni-graz.svg',
      country: 'Canada',
      degreeType: 'Masters',
      studyMode: 'Fulltime',
      duration: '2 years',
      language: 'English Language',
      price: '€363.36',
      isOfficialPartner: true,
      programDescription : "The master's programme in Environmental Systems Sciences / Climate and Environmental Monitoring at the University of Graz offers a wide spectrum of disciplines, challenging students to develop improved strategies and solutions. This unique programme equips students with the skills to tackle environmental problems effectively."
    },
  ];
  tags: Tag[] = [
    { id: 1, label: 'Design' },
    { id: 2, label: 'Programming' },
    { id: 3, label: 'Database' },
    { id: 4, label: 'Javascript' },
    { id: 5, label: 'Typescript' }
  ];


  constructor(private modalCtrl : ModalController, private router : Router) {
    addIcons({closeOutline,closeCircle});
   }

  ngOnInit() {
  }



  onFilterModalOpen(value:boolean) {
    console.log('Filter clicked event received in page:', value);
    if (value == true) {
      this.openModal();
    }
    // this.modalController.create(...)
  }
  
  onSortModalOpen() {
    console.log('Open sort modal here');
  }

  handleRemoveTag(tag:Tag) {
    const index = this.tags.findIndex(t => t.id === tag.id); 
    if (index > -1) {
      this.tags.splice(index, 1);
    }
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: FilterModalComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      //this.message = `Hello, ${data}!`;
    }
  }

  goToPage(program: Program) {
    console.log('Clicked program:', program); // ✅ Log for debugging
  
    const navigationExtras: NavigationExtras = {
      state: { program }
    };
  
    this.router.navigateByUrl(`/tabs/tab1/program-details/${program.id}`, navigationExtras);
  }
}

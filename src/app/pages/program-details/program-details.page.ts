import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle,  IonToolbar, IonCard, IonImg, IonButton, IonIcon, IonCardTitle, IonCardHeader, IonCardContent, IonText, IonItem, IonLabel, IonFooter } from '@ionic/angular/standalone';
import { ProgramDetailsCardComponent } from 'src/app/shared/components/program-details-card/program-details-card.component';
import { ListItem, Program } from 'src/app/core/models/program';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { documentTextOutline, chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';
import { ProgramInfoGridComponent } from 'src/app/shared/components/program-info-grid/program-info-grid.component';
import { ExpandableSectionComponent } from 'src/app/shared/components/expandable-section/expandable-section.component';
import { CampusListComponent } from 'src/app/shared/components/campus-list/campus-list.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.page.html',
  styleUrls: ['./program-details.page.scss'],
  standalone: true,
  imports: [IonFooter, IonContent, CommonModule, IonIcon, IonButton, FormsModule, IonLabel,  ProgramDetailsCardComponent, ProgramInfoGridComponent, ExpandableSectionComponent, CampusListComponent ]
})
export class ProgramDetailsPage implements OnInit {

  program!: Program;
  programInfoItems = [
    { title: '2 Years', subtitle: 'Duration' },
    { title: 'Masters', subtitle: 'Level' },
    { title: '$377.06 per semester', subtitle: 'Tuition Fee' },
    { title: 'On Campus', subtitle: 'Attendance' },
    { title: 'Fulltime', subtitle: 'Attendance' },
    // 
  ];
  feeInfoItems = [
    { title: '$0', subtitle: 'Housing Fee' },
    { title: '$0', subtitle: 'Acceptance Fee' },
    { title: '$377.06 per semester', subtitle: 'Tuition Fee' },
    { title: '$51.88', subtitle: 'Application Fee' },
    { title: '$0', subtitle: 'Living Fee' }
  ]
  pageListItems: ListItem[] = [
    {
      icon: 'checkmark-done-outline',
      text: 'Completed relevant degree program'
    },
    {
      icon: 'checkmark-done-outline',
      text: 'Copy of a valid Identification Card or Passport'
    },
    {
      icon: 'checkmark-done-outline',
      text: 'Degree Diploma'
    },
    {
      icon: 'checkmark-done-outline',
      text: "Documents of completed university degree with a minimum study duration of three years (bachelor's program or diploma's program)"
    }
   
  ];
  extraItems: ListItem[] = [
    {
      icon: 'alert-circle-outline',
      text: 'Main, Portierloge Wall, Portierloge ReSoWi, Portierloge Hauptgebäude',
      subtitle: 'campuse(s)',
    },
    {
      icon: 'alert-circle-outline',
      text: 'Winter 2024',
      subtitle: 'intakes',
    },
    {
      icon: 'alert-circle-outline',
      text: 'English Language',
      subtitle: 'study language',
    },
  ];
  yourHeaderText = " Studying Environmental Systems Sciences / Climate and Environmental Monitoring at the University of Graz opens up a world of opportunities. By combining various disciplines and developing cross-sectional approaches, students gain a deep understanding of natural sciences and technological aspects. The programme emphasizes the importance of legal aspects in handling chemical compounds, running processes, and plants. Through interactions with diverse research groups and engaging in small research projects, students can tailor their learning experience to suit their interests and career goals.Career Opportunities:Graduates of this program can pursue rewarding careers in environmental consulting, climate change research, renewable energy, sustainability management, and more.";

  yourFullText = 'The Environmental Engineering program at University of Technology provides advanced knowledge in sustainable solutions. This interdisciplinary program combines elements of civil engineering, chemistry, ecology, and policy to prepare students for tackling complex environmental challenges.\n\n' +
  'Throughout this two-year Master\'s program, you\'ll work closely with renowned faculty on cutting-edge research projects addressing water quality, air pollution, waste management, and renewable energy implementation. Our state-of-the-art laboratories offer hands-on experience with the latest environmental monitoring and remediation technologies.\n\n' +
  'Graduates of this program have gone on to successful careers in environmental consulting firms, government regulatory agencies, research institutions, and sustainable development organizations around the world.';

  constructor( private router: Router, private location: Location) { 
    const nav = this.router.getCurrentNavigation();
    this.program = nav?.extras?.state?.['program'];

    console.log('Received program data:', this.program);
    addIcons({chevronBackOutline,chevronForwardOutline,documentTextOutline});
  }

  ngOnInit() {
  }

  back( value: boolean) {
    console.log(value);
    if(value === true) {
      this.location.back(); 
    }
  }

}

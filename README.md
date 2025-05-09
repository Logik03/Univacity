# Univacity Test 

This is a Ionic/Angular mobile application designed for the test at univacity.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About

This task recreates specific screens from a Figma design using Ionic Framework with Angular..

## Features

- List of key features.
- A search page, Program details Page,  Filter Modal, Institutes modal,
- Technologies used include Angular (Typescript), Control Flow Syntax, Signals, standalone Components  Ionic Framework

## Installation

### Prerequisites

- Latest version of Angular (Angular 19.0.0), Ionic Framework 8.0.0, capacitor, ion-icons
  
### Steps

1. Clone this repository:
   git clone https://github.com/logik03/univacity.git
2. Navigate into the project directory:
   cd repository-name
3. Install dependencies:
   npm install --legacy-peer-deps
4. Run the Project
   Ionic serve
### Component Architecture 
Main pages are search.page and program-details.page
application follows the component-based architecture folder structure src -> app -> core(Directives, Models, Guards, Pipes, Services)-> pages -> shared (Components, Modals)
The application follows a component-based design architecture where each page consists of reusable components leveraging the Input and Output decorators for data flow and use of EventEmitters to pass data from parent to child and vice versa. The application heavily uses given ionic components like ion-card, ion-lists, ion-item e.t.c to style components to a more native appeal, ionic css utilities are also greatly used to give a refined look and feel on mobile devices e.g ionic css classes like ion-padding , ion-text-center e.t.c, the ion-grid system of responsiveness was also used to ensure components stay responsive across various screens. uses modern Navigation styles like NavigationExtras for passing data to pages and modals, worthy of note is the data flow from the search page to the program details page when clicking on each program-cards. for data types interfaces where used to state the expected parameters for each data type.

### Known Limitations 
The use of angular router doesnt give a smooth navigation when dealing with mobile devices hence it will be preferrable to use NavigationController provided by Ionic framework for more mobile and native feel, on mobile devices angular Router should be swapped for NavigationController to have a smooth and fine-grained navigation which also helps with navigating forward and backwards 

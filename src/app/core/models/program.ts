export interface Program {
    id: number;
    programTitle: string;
    universityName: string;
    imageUrl: string;
    logoUrl: string;
    country: string;
    degreeType: string;
    studyMode: string;
    duration: string;
    language: string;
    price: string;
    isOfficialPartner: boolean;
    programDescription?:string;
    badgeText?: string;
    views?: number;
    impressions?: number;
}

export interface Tag {
    id: number;
    label: string;
}

export interface Institute {
    id: number;
    name: string;
    country: string;
    programs: number;
    logo: string;
    selected: boolean;
}
export interface InfoItem {
    title: string;
    subtitle: string;
}
export interface ListItem {
    icon?: string;
    text: string;
    subtitle?: string;
  }
  
  
export interface ContentSection {
  id: string;
  title: string;
  shortText: string;
  images: {
    url: string;
    caption: string;
    type: 'photo' | 'plan';
  }[];
}

import { ContentSection } from './types';

export const SECTIONS: ContentSection[] = [
  {
    id: 'about',
    title: 'About us',
    shortText: 'Kastraki is more than just an archaeological site; it is a living testament to the layers of human presence in the Peloponnese. Our mission is to preserve this "place of memory" and offer visitors a unique "experience" that bridges the past with the present.',
    images: [
      {
        url: 'https://picsum.photos/seed/kastraki-about-1/800/600',
        caption: 'Panoramic view of the Kastraki hill.',
        type: 'photo'
      },
      {
        url: 'https://www.kastra.eu/pics/meligou1.jpg',
        caption: 'The Kastraki tower.',
        type: 'photo'
      }
    ]
  },
  {
    id: 'history',
    title: 'History',
    shortText: 'From the Mycenaean period to the Byzantine era, Kastraki has served as a strategic stronghold and a center of local life. Excavations have revealed continuous habitation, showing how each generation built upon the foundations of the last, creating a rich historical tapestry.',
    images: [
      {
        url: 'https://picsum.photos/seed/kastraki-history-1/800/600',
        caption: 'Ancient pottery fragments found on site.',
        type: 'photo'
      },
      {
        url: 'https://picsum.photos/seed/kastraki-history-2/800/600',
        caption: 'Timeline of the site\'s occupation.',
        type: 'plan'
      }
    ]
  },
  {
    id: 'architecture',
    title: 'Architecture',
    shortText: 'The architectural remains at Kastraki showcase the evolution of defensive and residential structures. Of particular interest are the cyclopean walls and the intricate layout of the early Christian basilica, reflecting both local traditions and broader Mediterranean influences.',
    images: [
      {
        url: 'https://picsum.photos/seed/kastraki-arch-1/800/600',
        caption: 'Ground plan of the central fortification.',
        type: 'plan'
      },
      {
        url: 'https://picsum.photos/seed/kastraki-arch-2/800/600',
        caption: 'Detail of the stone masonry techniques.',
        type: 'photo'
      }
    ]
  },
  {
    id: 'culture',
    title: 'Culture',
    shortText: 'Culture at Kastraki is found in the everyday objects and sacred spaces. The site hosts seasonal events that bring ancient myths and local traditions back to life, allowing visitors to experience the intangible heritage of the region.',
    images: [
      {
        url: 'https://picsum.photos/seed/kastraki-culture-1/800/600',
        caption: 'Traditional festival held near the site.',
        type: 'photo'
      },
      {
        url: 'https://picsum.photos/seed/kastraki-culture-2/800/600',
        caption: 'Artistic reconstruction of ancient daily life.',
        type: 'plan'
      }
    ]
  }
];

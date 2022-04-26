export interface Section {
  name: string;
  musicians: string[];
}

export enum MusicianPosition {
  Concertmaster = 'Concertmaster',
  AssistantConcertmaster = 'Assistant Concertmaster',
  Principal = 'Principal',
  AssistantPrincipal = 'Assistant Principal',
  Vacant = 'Position Vacant',
  Leave = 'On Leave',
}

export const sections: Section[] = [
  {
    name: 'First Violin',
    musicians: [
      `Carole Cowan (${MusicianPosition.Concertmaster})`,
      `Marka Young (${MusicianPosition.AssistantConcertmaster})`,
      'Olga Dusheina',
      'Irene Fitzgerald-Cherry',
      'Rachel Handman',
      'Linda Howard',
      'Marla Rathbun',
      'Michelle Stewart',
      'Mitsuko Suzuki',
      'Heather Vogel',
    ],
  },
  {
    name: 'Second Violin',
    musicians: [
      `Ji Min Lee (${MusicianPosition.Principal})`,
      `Uli Speth (${MusicianPosition.AssistantPrincipal})`,
      'Rachel Crozier',
      'Emily Frederick',
      'Rhonni Hallman',
      'Emily Kalish',
      'Francia Mann',
      `Sarah Tusch (${MusicianPosition.Leave})`,
      `[${MusicianPosition.Vacant}]`,
    ],
  },
  {
    name: 'Viola',
    musicians: [
      `Charlotte Malin (${MusicianPosition.Principal})`,
      `Gregory Williams (${MusicianPosition.AssistantPrincipal})`,
      'Elizabeth Handman',
      'Isabella Mensz',
      'Yumi Oshima',
      `[${MusicianPosition.Vacant}]`,
    ],
  },
  {
    name: 'Cello',
    musicians: [
      `Susan Seligman (${MusicianPosition.Principal})`,
      `Erica Pickhardt (${MusicianPosition.AssistantPrincipal})`,
      'Aminda Asher',
      'Joanne Choi',
      'Madeline Fayette',
      'Nanette Koch',
    ],
  },
  {
    name: 'Bass',
    musicians: [
      `Phillip Helm (${MusicianPosition.Principal})`,
      `Richard Sosinsky (${MusicianPosition.AssistantPrincipal})`,
      'Dan Merriman',
      'Edith Stratton',
    ],
  },
  {
    name: 'Flute',
    musicians: [
      `Marcia Gates (${MusicianPosition.Principal})`,
      'Jill Sokol',
      'Amy Hersh',
    ],
  },
  {
    name: 'Piccolo',
    musicians: ['Amy Hersh'],
  },
  {
    name: 'Oboe',
    musicians: [`[${MusicianPosition.Vacant}]`, 'Joel Evans'],
  },
  {
    name: 'English Horn',
    musicians: ['Joel Evans'],
  },
  {
    name: 'Clarinet',
    musicians: [
      `Daniel Spitzer (${MusicianPosition.Principal})`,
      'Adam Gallob',
      'Larry Tietze',
    ],
  },
  {
    name: 'Bass Clarinet',
    musicians: ['Larry Tietze'],
  },
  {
    name: 'Bassoon',
    musicians: [
      `Jeffrey Marchand (${MusicianPosition.Principal})`,
      'Harvey Feldman',
    ],
  },
  {
    name: 'Horn',
    musicians: [
      `Nick Caluori (${MusicianPosition.Principal})`,
      'Matthew Smith',
      'Cody Halquist',
      'Daniel Salera',
    ],
  },
  {
    name: 'Trumpet',
    musicians: [
      `Terry Szor (${MusicianPosition.Principal})`,
      'Sam Singeltary',
      '[position vacant]',
    ],
  },
  {
    name: 'Trombone',
    musicians: [`Bradley Ward (${MusicianPosition.Principal})`, 'Paul Bellino'],
  },
  {
    name: 'Bass Trombone',
    musicians: ['Jack Noble'],
  },
  {
    name: 'Tuba',
    musicians: ['Ferran Martinez Miguel'],
  },
  {
    name: 'Timpani',
    musicians: [`Michael Singer (${MusicianPosition.Principal})`],
  },
  {
    name: 'Percussion',
    musicians: [
      `Kyle Ritenauer (${MusicianPosition.Principal})`,
      'Matthew Beaumont',
      'Aya Kaminaguchi',
    ],
  },
  {
    name: 'Keyboard',
    musicians: [`Yalin Chi (${MusicianPosition.Principal})`],
  },
  {
    name: 'Harp',
    musicians: [`Frances Duffy (${MusicianPosition.Principal})`],
  },
  {
    name: 'Orchestra Librarian',
    musicians: ['Rhonni Hallman'],
  },
  {
    name: 'Personnel Manager',
    musicians: ['Marcia Gates'],
  },
];

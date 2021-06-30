export interface Musicbrainz {
  created: Date;
  count: number;
  offset: number;
  artists: Artist[];
}

export interface Artist {
  id: string;
  type: string;
  'type-id': string;
  score: number;
  'gender-id': string;
  name: string;
  'sort-name': string;
  gender: string;
  country: string;
  area: Area;
  'begin-area': Area;
  isnis: string[];
  'life-span': ArtistLifeSpan;
  aliases: Alias[];
  tags: Tag[];
}

export interface Alias {
  'sort-name': string;
  'type-id': string;
  name: string;
  locale: string;
  type: string;
  primary: boolean | null;
  'begin-date': null;
  'end-date': null;
}

export interface Area {
  id: string;
  type: string;
  'type-id': string;
  name: string;
  'sort-name': string;
  'life-span': AreaLifeSpan;
}

export interface AreaLifeSpan {
  ended: null;
}

export interface ArtistLifeSpan {
  begin: Date;
  ended: null;
}

export interface Tag {
  count: number;
  name: string;
}

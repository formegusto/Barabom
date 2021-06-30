export default interface Track {
  tracks: Tracks;
}

export interface Tracks {
  href: string;
  items: Item[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}

export interface Item {
  album: Album;
  artists: Artist[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIDS;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url: null | string;
  track_number: number;
  type: ItemType;
  uri: string;
}

export interface Album {
  album_type: AlbumTypeEnum;
  artists: Artist[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: Date;
  release_date_precision: ReleaseDatePrecision;
  total_tracks: number;
  type: AlbumTypeEnum;
  uri: string;
}

export enum AlbumTypeEnum {
  Album = 'album',
  Single = 'single',
}

export interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: ArtistType;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}

export enum ArtistType {
  Artist = 'artist',
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export enum ReleaseDatePrecision {
  Day = 'day',
}

export interface ExternalIDS {
  isrc: string;
}

export enum ItemType {
  Track = 'track',
}
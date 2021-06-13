import { albums } from '../../musicData';

export const filterAlbums = (filterProperty, filterTerm) => {
  // filterProperty: string = albumTitle | albumYear | albumArt (path)
  return albums
    .map(album => album)
    .filter(
      filteredAlbum =>
        filteredAlbum[filterProperty || 'albumTitle'] === filterTerm
    );
};

import { albums } from '../../musicData';

export const filterAlbums = (filterProperty, filterTerm) => {
  return albums
    .map(album => album)
    .filter(filteredAlbum => filteredAlbum[filterProperty] === filterTerm);
};

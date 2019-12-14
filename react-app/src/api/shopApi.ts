import {delay, tryFetch} from './common';
import {Observable, from} from 'rxjs';
import {CatalogItem} from '../models/catalog-item';
import {mockedCatalogItems} from '../shop/reducer';

const fetchCatalog = async (userid: string) => {
    let items: CatalogItem[] = [];
    const {res, err} = await tryFetch<CatalogItem[]>('Catalog API', `https://catalog.arla-sigl.fr/v1/items?userid=${userid}`)
    if (res) {
      items = res;
    }
    return {items, err};
}

export const getCatalogItemForUser = (userid: string): Observable<{items: CatalogItem[]; err?: string}> => {
    return from(fetchCatalog(userid));
}
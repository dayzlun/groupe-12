import {delay} from './common';
import {Observable, from} from 'rxjs';
import {CatalogItem} from '../models/catalog-item';
import {mockedCatalogItems} from '../shop/reducer';

export const getCatalogItemForUser = (userid: string): Observable<{items: CatalogItem[];}> => {
    const fakeApi = async (userid: string) => {
        await delay(2000);
        return {items: mockedCatalogItems};
    }
    return from(fakeApi(userid));
}
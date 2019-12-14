import {Action} from 'redux';
import {CatalogItem} from '../models/catalog-item';
import { ApiError } from '../state/store';

export const LOAD_CATALOG = 'shop#loadCatalog';
export type LoadCatalog = Action & {
  userid: string;
};
export const loadCatalog = (userid: string): LoadCatalog => ({
  type: LOAD_CATALOG,
  userid
});

export const CATALOG_LOADED = 'shop#catalogLoaded';
export type CatalogLoaded = Action & {
  items: CatalogItem[];
};
export const catalogLoaded = (items: CatalogItem[]): CatalogLoaded => ({
  type: CATALOG_LOADED,
  items
});

export const CATALOG_API_ERROR = 'shop#catalogApiError';
export type CatalogApiError = Action & ApiError;

export const catalogApiError = (err: string): CatalogApiError => ({
   type: CATALOG_API_ERROR,
   err
});


export type ShopActions = LoadCatalog | CatalogLoaded | CatalogApiError;

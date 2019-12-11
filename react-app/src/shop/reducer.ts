import {Reducer} from 'redux';
import {AnyActions} from '../actions';
import {CatalogItem} from '../models/catalog-item';
import {LOAD_CATALOG, CATALOG_LOADED, CatalogLoaded} from './actions';

export type ShopState = {
  items: CatalogItem[];
  loading: boolean;
};

export const initialShopState: ShopState = {
  items: [],
  loading: false
};

export const mockedCatalogItems: CatalogItem[] = [
  {
    title: 'Montain boots',
    description: `
            Boots that fits your feets!

            All you need for hiking in forest, mountains or country side.
        `,
    imageUrl: 'https://www.switchbacktravel.com/sites/default/files/articles%20/Hiking%20Boots%20Round-up%20%28m%29.jpg',
    itemid: '1'
  },
  {
    title: 'Hiking cape',
    description: `
            Against the rain, or any windy weather.

            Amazingly light and robust. 
            
            First choice for our hiker who doesn't want to get wet!
        `,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41VyfLTGLTL._SX425_.jpg',
    itemid: '2'
  },
  {
    title: 'Gloves against cold',
    description: `
            Those gloves enables you to use your smartphone without taking
            them off.

            It's now the end of cold finger while doing your selfies!
        `,
    imageUrl: 'https://cdn3.volusion.com/qtksh.budjt/v/vspfiles/photos/U15-9390M-BLCK-2.jpg?v-cache=1544430212',
    itemid: '3'
  },
  {
    title: 'Backpack',
    description: `
            Best backpack for hikers who wants to hike for more than 6 hours per days.

            Fits your back shape and relax your spine.
        `,
    imageUrl: 'https://static.mammut.com/pdmainHq/2510-02031-5713_main_5875.jpg',
    itemid: '4'
  },
  {
    title: 'Short pants',
    description: `
            Approved by many as the state of the art of hiking shorts.

            Hike with style and let your ankles free while you're hiking!
        `,
    imageUrl: 'https://s7d9.scene7.com/is/image/JCPenney/DP1031201417031330M?resmode=sharp2&op_sharpen=1&wid=550&hei=550',
    itemid: '5'
  },
  {
    title: 'Bottle',
    description: `
            Don't get thirsty while you hike.

            This bottle enables you to carry your precious water, keeping it cold!
        `,
    imageUrl: 'https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/25/2B/646e01ff-0ccc-4f18-bfea-dd694eecc59e.JPG',
    itemid: '6'
  }
];

export const shopReducer: Reducer<ShopState, AnyActions> = (
  shopState: ShopState | undefined,
  action: AnyActions
) => {
  if (!shopState) return initialShopState;
  switch (action.type) {
    case LOAD_CATALOG:
      return {
        ...shopState,
        loading: true,
        items: []
      };
    case CATALOG_LOADED:
      const items = (action as CatalogLoaded).items;
      return {
        ...shopState,
        loading: false,
        items
      };
    default:
      return shopState;
  }
};

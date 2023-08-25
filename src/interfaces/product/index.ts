import { PurchaseInterface } from 'interfaces/purchase';
import { ReservationInterface } from 'interfaces/reservation';
import { ReviewInterface } from 'interfaces/review';
import { UserInterface } from 'interfaces/user';
import { MarketplaceInterface } from 'interfaces/marketplace';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description: string;
  availability: boolean;
  user_id: string;
  marketplace_id: string;
  created_at?: any;
  updated_at?: any;
  purchase?: PurchaseInterface[];
  reservation?: ReservationInterface[];
  review?: ReviewInterface[];
  user?: UserInterface;
  marketplace?: MarketplaceInterface;
  _count?: {
    purchase?: number;
    reservation?: number;
    review?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  user_id?: string;
  marketplace_id?: string;
}

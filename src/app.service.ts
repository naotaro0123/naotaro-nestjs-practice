import { Injectable } from '@nestjs/common';
import { Item } from './models/Item';

export type PublicItem = Omit<Item, 'deletePassword'>;
const items: Item[] = [
  {
    id: 1,
    title: 'Item title1',
    body: 'Hello World1',
    deletePassword: '12340000'
  },
  {
    id: 2,
    title: 'Item title2',
    body: 'Hello World2',
    deletePassword: '12341111'
  }
]

@Injectable()
export class AppService {
  getAllItems(): Item[] {
    return [...items];
  }

  getPublicItems(): PublicItem[] {
    return this.getAllItems().map((item) => {
      const publicItem = { ...item };
      delete publicItem.deletePassword;
      return publicItem;
    })
  }

  getHello(): string {
    return 'Hello World!';
  }
}

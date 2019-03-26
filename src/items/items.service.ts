import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '12342353',
      name: 'Item One',
      qty: 4,
      description: 'This is item one',
    },
    {
      id: '345647567657',
      name: 'Item Two',
      qty: 24,
      description: 'This is item two',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find(item => item.id === id);
  }
}

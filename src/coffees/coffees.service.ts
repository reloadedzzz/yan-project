import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffess: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Rost',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffess;
  }

  findOne(id: string) {
    const coffee = this.coffess.find((i) => i.id === +id);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  create(createCoffeeDto: any) {
    this.coffess.push(createCoffeeDto);
    return createCoffeeDto;
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      for (const item in existingCoffee) {
        if (updateCoffeeDto[item]) existingCoffee[item] = updateCoffeeDto[item];
      }
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffess.findIndex((i) => i.id === +id);
    if (coffeeIndex >= 0) {
      this.coffess.splice(coffeeIndex, 1);
    }
  }
}

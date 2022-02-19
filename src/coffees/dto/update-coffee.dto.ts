import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

//PartialType函数的作用是返回我们传递给它的类的类型，将所有的属性都设置为可选
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}

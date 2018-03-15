import { Get, Controller } from '@nestjs/common';

@Controller('items')
export class ItemController {
    constructor() { }
    
	@Get()
	getAll(): string {
    return 'Hello Items!';
  }
}

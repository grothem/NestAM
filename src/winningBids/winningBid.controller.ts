import { Get, Controller } from '@nestjs/common';

@Controller('winningBids')
export class WinningBidController {
    constructor() { }
    
	@Get()
	getAll(): string {
    return 'Hello Winning Bidders!';
  }
}

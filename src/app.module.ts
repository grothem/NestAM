import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from './app.controller';
import { BidderModule } from './bidders/bidder.module';
import { WinningBidModule } from './winningBids/winningBid.module';
import { ItemModule } from './items/item.module';

@Module({
  imports: [TypeOrmModule.forRoot(), 
    BidderModule, 
    ItemModule, 
    WinningBidModule],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule { }

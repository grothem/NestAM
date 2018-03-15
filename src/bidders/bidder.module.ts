import { Module } from '@nestjs/common';
import { BidderService } from './bidder.service';
import { BidderController } from './bidder.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bidder } from './bidder.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bidder])],
  components: [BidderService],
  controllers: [BidderController],
})
export class BidderModule {}
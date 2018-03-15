import { Module } from '@nestjs/common';
import { WinningBidService } from './winningBid.service';
import { WinningBidController } from './winningBid.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinningBid } from './winningBid.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WinningBid])],
  components: [WinningBidService],
  controllers: [WinningBidController],
})
export class WinningBidModule {}
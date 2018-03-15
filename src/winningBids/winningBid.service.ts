import { Component } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WinningBid } from './winningBid.entity';

@Component()
export class WinningBidService {
  constructor(
    @InjectRepository(WinningBid)
    private readonly winningBidRepository: Repository<WinningBid>,
  ) {}

  async findAll(): Promise<WinningBid[]> {
    return await this.winningBidRepository.find();
  }
}
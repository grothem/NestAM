import { Component } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bidder } from './bidder.entity';

@Component()
export class BidderService {
  constructor(
    @InjectRepository(Bidder)
    private readonly bidderRepository: Repository<Bidder>,
  ) {}

  async create(bidder: Bidder): Promise<Bidder> {
    return await this.bidderRepository.save(bidder);
  }

  async findAll(): Promise<Bidder[]> {
    return await this.bidderRepository.find();
  }
}
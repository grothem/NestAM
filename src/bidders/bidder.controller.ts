import { Body, Get, Controller, Post } from "@nestjs/common";
import { BidderService } from "./bidder.service";
import { Bidder } from "./bidder.entity";

@Controller("bidders")
export class BidderController {
  constructor(private readonly bidderService: BidderService) {}

  @Get()
  async getAll(): Promise<Bidder[]> {
    return this.bidderService.findAll();
  }

  @Post()
  async createBidder(@Body() bidder: Bidder): Promise<Bidder> {
      return this.bidderService.create(bidder);
  }
}

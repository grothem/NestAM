import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne} from "typeorm";
import { Bidder } from "../bidders/bidder.entity";
import { Item } from "../items/item.entity";

@Entity()
export class WinningBid {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Bidder, b => b.winningBids)
    bidder: Bidder;
    
    @OneToOne(type => Item, item => item.winningBid)
    item: Item;

    @Column()
    amount: number;

    @Column()
    paid: boolean;
}

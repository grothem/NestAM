import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { WinningBid } from "../winningBids/winningBid.entity";

@Entity()
export class Bidder {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    bidNumber: number;

    @OneToMany(type => WinningBid, wb => wb.bidder)
    winningBids: WinningBid[];
}

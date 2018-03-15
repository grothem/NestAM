import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import { WinningBid } from "../winningBids/winningBid.entity";

@Entity()
export class Item {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    number: string;

    @Column()
    description: string;

    @OneToOne(type => WinningBid, wb => wb.item)
    @JoinColumn()
    winningBid: WinningBid;

}

import { MyBaseEntity } from "src/common/my_base_entity";
import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity(`my_events`)
export class MyEvent {
    @PrimaryGeneratedColumn()
    ID: number;
    // Column for creation timestamp
    @CreateDateColumn({ type: 'timestamp with time zone' })
    createdAt: Date;

    @Column({ nullable: false })
    @Index()
    projectToken: string;

    @Column({ nullable: false })
    @Index()
    eventName: string;

    @Column({ nullable: true })
    @Index()
    deviceID?: string;

    @Column({ nullable: true })
    @Index()
    userID?: string;

    @Column({ nullable: true, default: null, type: 'jsonb' })
    parameters?: any;

    @Column({ nullable: true, default: null })
    happenedAt?: string;
}

import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
export class MyBaseEntity {
    @PrimaryGeneratedColumn()
    ID: number;
    // Column for creation timestamp
    @CreateDateColumn({ type: 'timestamp with time zone' })
    createdAt: Date;
    // Column for last update timestamp
    @UpdateDateColumn({ type: 'timestamp with time zone' })
    updatedAt: Date;
    // Column for soft deletion timestamp (optional, if you're implementing soft delete)
    @DeleteDateColumn({ nullable: true, type: 'timestamp with time zone' })
    deletedAt?: Date;
}
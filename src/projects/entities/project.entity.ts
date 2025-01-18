import { MyBaseEntity } from "src/common/my_base_entity";
import { Column, Entity, Index } from "typeorm";

@Entity(`projects`)
export class Project extends MyBaseEntity {
    @Column()
    @Index()
    name: string;

    @Column()
    @Index()
    accessToken: string;
}
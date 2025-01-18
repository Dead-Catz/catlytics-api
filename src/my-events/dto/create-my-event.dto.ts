import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateMyEventDto {
    @ApiProperty({ required: true })
    projectToken: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    eventName: string;

    @ApiProperty({ required: false })
    deviceID?: string;

    @ApiProperty({ required: false })
    userID?: string;

    @ApiProperty({ required: false })
    parameters?: any;

    @ApiProperty({ required: false })
    happenedAt?: string;
}

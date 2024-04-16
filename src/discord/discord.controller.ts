import { Controller, Param, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { firstValueFrom } from 'rxjs';
import { DiscordService } from './discord.service';
import { UserData } from './dto/user.dto';
import { UserProfileData } from './dto/userProfile.dto';

@Controller('v1')
export class DiscordController {

    constructor(private discordService: DiscordService) {}

    @Get('/')
    index() {
        return { 
            status: 200,
            message: 'Hello 💀',
        }
    }

    @Get('/user/:id')
    async user(@Param('id') id: string) {
        const userData: UserProfileData = (await firstValueFrom(this.discordService.getUserProfileData(id))).data;
        delete userData.mutual_guilds;

        return userData;
    }

    @Get('/avatar/:id')
    async avatar(@Param('id') id: string, @Res() response: Response) {
        const userData: UserData = await this.getUserData(id);
        const avatar = await firstValueFrom(this.discordService.getAvatarUrl(userData));
        const contentType = avatar.headers['content-type'];

        response.setHeader('Content-Type', contentType);
        response.send(avatar.data);
    }

    @Get('/banner/:id')
    async banner(@Param('id') id: string, @Res() response: Response) {
        const userData: UserData = await this.getUserData(id);
        const banner = await firstValueFrom(this.discordService.getBannerUrl(userData));
        const contentType = banner.headers['content-type'];

        response.setHeader('Content-Type', contentType);
        response.send(banner.data);
    }

    @Get('/badge/:id')
    async badge(@Param('id') id: string, @Res() response: Response) {
        const badge = await firstValueFrom(this.discordService.getBadgeUrl(id));
        const contentType = badge.headers['content-type'];

        response.setHeader('Content-Type', contentType);
        response.send(badge.data);
    }

    async getUserData(id: string): Promise<any> {
        const response = await firstValueFrom(this.discordService.getUserData(id));

        return response.data;
    }
}

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { UserProfileData } from './dto/userProfile.dto';

@Injectable()
export class DiscordService {
    constructor(private httpService: HttpService) { }

    getUserProfileData(id: string): Observable<AxiosResponse<UserProfileData>> {
        const endpointUrl = `https://discord.com/api/v9/users/${id}/profile`;
        const headers = {
            Authorization: process.env.TOKEN,
        };

        return this.httpService.get<UserProfileData>(endpointUrl, { headers });
    }

    getAvatarUrl(userData: UserProfileData): Observable<AxiosResponse> {
        const endpointUrl = `https://cdn.discordapp.com/avatars/${userData.user.id}/${userData.user.avatar}?size=2048`;
        const responseType = 'arraybuffer';
        const headers = {
            "Content-Type": "image/*",
        };

        return this.httpService.get(endpointUrl, { headers, responseType });
    }

    getBannerUrl(userData: UserProfileData): Observable<AxiosResponse> {
        const endpointUrl = `https://cdn.discordapp.com/banners/${userData.user.id}/${userData.user.banner}?size=2048`;
        const responseType = 'arraybuffer';
        const headers = {
            "Content-Type": "image/*"
        };

        return this.httpService.get(endpointUrl, { headers, responseType });
    }

    getBadgeUrl(id: string): Observable<AxiosResponse> {
        const endpointUrl = `https://cdn.discordapp.com/badge-icons/${id}`;
        const responseType = 'arraybuffer';
        const headers = {
            "Content-Type": "image/*"
        };

        return this.httpService.get(endpointUrl, { headers, responseType });
    }
}

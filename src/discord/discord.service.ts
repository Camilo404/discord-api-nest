import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { UserData } from './dto/user.dto';
import { UserProfileData } from './dto/userProfile.dto';

@Injectable()
export class DiscordService {
    constructor(private httpService: HttpService) { }

    getUserData(id: string): Observable<AxiosResponse<UserData>> {
        const endpointUrl = `https://discord.com/api/v9/users/${id}`;
        const headers = {
            Authorization: process.env.TOKEN,
        };

        return this.httpService.get<UserData>(endpointUrl, { headers });
    }

    getUserProfileData(id: string): Observable<AxiosResponse<UserProfileData>> {
        const endpointUrl = `https://discord.com/api/v9/users/${id}/profile`;
        const headers = {
            Authorization: process.env.TOKEN,
        };

        return this.httpService.get<UserProfileData>(endpointUrl, { headers });
    }

    getAvatarUrl(userData: UserData): Observable<AxiosResponse> {
        const endpointUrl = `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}?size=2048`;
        const responseType = 'arraybuffer';
        const headers = {
            "Content-Type": "image/*"
        };

        return this.httpService.get(endpointUrl, { headers, responseType });
    }

    getBannerUrl(userData: UserData): Observable<AxiosResponse> {
        const endpointUrl = `https://cdn.discordapp.com/banners/${userData.id}/${userData.banner}?size=2048`;
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

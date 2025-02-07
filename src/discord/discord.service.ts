import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { UserProfileData } from './dto/userProfile.dto';
import { ProfileEffects } from './dto/profileEffects.dto';

@Injectable()
export class DiscordService {
    constructor(private httpService: HttpService) { }

    getUserProfileData(id: string): Observable<AxiosResponse<UserProfileData>> {
        const endpointUrl = `https://discord.com/api/v9/users/${id}/profile`;
        const headers = {
            Authorization: process.env.TOKEN,
            "x-super-properties": "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwic3lzdGVtX2xvY2FsZSI6ImVzLUVTIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEzMy4wLjAuMCBTYWZhcmkvNTM3LjM2IiwiYnJvd3Nlcl92ZXJzaW9uIjoiMTMzLjAuMC4wIiwib3NfdmVyc2lvbiI6IjEwIiwicmVmZXJyZXIiOiIiLCJyZWZlcnJpbmdfZG9tYWluIjoiIiwicmVmZXJyZXJfY3VycmVudCI6IiIsInJlZmVycmluZ19kb21haW5fY3VycmVudCI6IiIsInJlbGVhc2VfY2hhbm5lbCI6InN0YWJsZSIsImNsaWVudF9idWlsZF9udW1iZXIiOjM2NjY3NSwiY2xpZW50X2V2ZW50X3NvdXJjZSI6bnVsbCwiaGFzX2NsaWVudF9tb2RzIjpmYWxzZX0="
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

    getEffectUrl(): Observable<AxiosResponse> {
        const endpointUrl = `https://discord.com/api/v9/user-profile-effects`;
        const headers = {
            Authorization: process.env.TOKEN
        };

        return this.httpService.get<ProfileEffects>(endpointUrl, { headers });
    }
}

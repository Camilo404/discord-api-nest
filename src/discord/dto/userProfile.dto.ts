export interface UserProfileData {
    user: User;
    connected_accounts: ConnectedAccount[];
    premium_since: null;
    premium_type: null;
    premium_guild_since: null;
    profile_themes_experiment_bucket: number;
    user_profile: UserProfileClass;
    badges: Badge[];
    guild_badges: any[];
    mutual_guilds: MutualGuild[];
}

export interface Badge {
    id: string;
    description: string;
    icon: string;
    link: string;
}

export interface ConnectedAccount {
    type: string;
    id: string;
    name: string;
    verified: boolean;
}

export interface MutualGuild {
    id: string;
    nick: null;
}

export interface User {
    id: string;
    username: string;
    global_name: string;
    avatar: string;
    avatar_decoration_data: AvatarDecorationData;
    discriminator: string;
    public_flags: number;
    clan: null;
    flags: number;
    banner: null;
    banner_color: string;
    accent_color: number;
    bio: string;
}

export interface AvatarDecorationData {
    asset: string;
    sku_id: string;
}

export interface UserProfileClass {
    bio: string;
    accent_color: number;
    pronouns: string;
    profile_effect: ProfileEffect;
}

export interface ProfileEffect {
    id: string;
}

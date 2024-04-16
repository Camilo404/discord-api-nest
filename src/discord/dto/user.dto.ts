export interface UserData {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    public_flags: number;
    flags: number;
    banner: null;
    accent_color: number;
    global_name: string;
    avatar_decoration_data: AvatarDecorationData;
    banner_color: string;
    clan: null;
}

export interface AvatarDecorationData {
    asset: string;
    sku_id: string;
}

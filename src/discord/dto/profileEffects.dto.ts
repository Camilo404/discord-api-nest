export interface ProfileEffects {
    profile_effect_configs: ProfileEffectConfig[];
}

export interface ProfileEffectConfig {
    type: number;
    id: string;
    sku_id: string;
    title: string;
    description: string;
    accessibilityLabel: string;
    animationType: number;
    thumbnailPreviewSrc: string;
    reducedMotionSrc: string;
    effects: Effect[];
    staticFrameSrc?: string;
}

export interface Effect {
    src: string;
    loop: boolean;
    height: number;
    width: number;
    duration: number;
    start: number;
    loopDelay: number;
    position: Position;
    zIndex: number;
    randomizedSources: RandomizedSource[];
}

export interface Position {
    x: number;
    y: number;
}

export interface RandomizedSource {
    src: string;
}

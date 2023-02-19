
export interface Fairings {
    reused?: boolean;
    recovery_attempt?: boolean;
    recovered?: boolean;
    ships: string[];
}

export interface Patch {
    small: string;
    large: string;
}

export interface Reddit {
    campaign: string;
    launch: string;
    media: string;
    recovery: string;
}

export interface Flickr {
    small: any[];
    original: string[];
}

export interface Links {
    patch: Patch;
    reddit: Reddit;
    flickr: Flickr;
    presskit: string;
    webcast: string;
    youtube_id: string;
    article: string;
    wikipedia: string;
}

export interface Failure {
    time: number;
    altitude?: number;
    reason: string;
}

export interface Crew {
    crew: string;
    role: string;
}

export interface Core {
    core: string;
    flight?: number;
    gridfins?: boolean;
    legs?: boolean;
    reused?: boolean;
    landing_attempt?: boolean;
    landing_success?: boolean;
    landing_type: string;
    landpad: string;
}

export interface LaunchItem {
    fairings: Fairings;
    links: Links;
    static_fire_date_utc?: Date;
    static_fire_date_unix?: number;
    net: boolean;
    window?: number;
    rocket: string;
    success?: boolean;
    failures: Failure[];
    details: string;
    crew: Crew[];
    ships: string[];
    capsules: string[];
    payloads: string[];
    launchpad: string;
    flight_number: number;
    name: string;
    date_utc: Date;
    date_unix: number;
    date_local: Date;
    date_precision: string;
    upcoming: boolean;
    cores: Core[];
    auto_update: boolean;
    tbd: boolean;
    launch_library_id: string;
    id: string;
}

export type LaunchesResponse = LaunchItem[];
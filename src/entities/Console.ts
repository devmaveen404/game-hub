export interface platform {
    id: number;
    name: string
    image_background: string;
}

export interface Console {
    id: number;
    name: string;
    year_start: number;
    year_end: number;
    platforms: platform[];
}
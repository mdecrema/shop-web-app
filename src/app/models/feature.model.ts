export interface IFeature {
    id: number;
    title: string;
    description: string;
    image: string;
    active: boolean;
}

export const enum FEATURE_KEY {
    TITLE = 'title',
    DESCRIPTION = 'description',
    IMAGE = 'image'
}
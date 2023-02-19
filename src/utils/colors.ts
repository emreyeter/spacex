export enum COLORS {
    BLACK = '#000000',
    WHITE = '#FFFFFF',
    WHITE_LIGHTER = '#EBEBEB',
    
    //ligther pink
    LIGHT_PINK = '#F8E0E0',
    DOLPHIN = '#635985',
    MULLED_WINE = '#443C68',
    MARTINIQUE = '#393053',
    EBONY = '#18122B',
    BLACK_RUSSIAN = '#0D0A1A',

    SUCCESS = '#00C853',
    ERROR = '#D50000',

    RED= '#FF0000',

    GREY = '#808080',
    BORDER_GREY = '#AFAFAF',
    DARK_GREY = '#4F4F4F',
    DARKER_GREY = '#333333',
    DARKEST_GREY = '#1f1f1f',
}

export const shadow = () => {
    return `
        shadow-color: #000;
        shadow-offset: 0px 1px;
        shadow-opacity: 0.18;
        shadow-radius: 1.00px;
        elevation: 1;
    `
}
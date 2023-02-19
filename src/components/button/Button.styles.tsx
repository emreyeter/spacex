import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components';
import { COLORS } from '../../utils/colors';
import { font, FONT_SIZE, FONT_WEIGHT } from '../../utils/font';
import TranslatedText from '../translated-text/TranslatedText';
import { ButtonProps } from './Button';

export enum BUTTON_TYPE {
  NONE,
  PRIMARY,
  SECONDARY,
}

export const ButtonText = styled(TranslatedText)<ButtonProps>`
    ${font(FONT_SIZE.MEDIUM, FONT_WEIGHT.BOLD)}
    color: ${(props) => {
    switch (props.buttonType) {
        case BUTTON_TYPE.PRIMARY:
            return COLORS.LIGHT_PINK
        case BUTTON_TYPE.SECONDARY:
            return COLORS.WHITE
        default:
            return COLORS.BLACK
    }
    }
    }

`

const ButtonStyledCss = css`
    padding: 10px 20px;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
`

export const Container = styled(TouchableOpacity)<ButtonProps>`
    ${(props) => {
    switch (props.buttonType) {
      case BUTTON_TYPE.PRIMARY:
        return css`
                    ${ButtonStyledCss}
                    background-color: ${COLORS.MARTINIQUE};
                `
      case BUTTON_TYPE.SECONDARY:
        return css`
                    ${ButtonStyledCss}
                    background-color: ${COLORS.EBONY};
                `
      default:
        return ``

    }
    }
    }
`
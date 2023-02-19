import AnimatedLottieView from "lottie-react-native";
import styled from "styled-components";
import { COLORS } from "../../utils/colors";
import { font, FONT_SIZE, FONT_WEIGHT } from "../../utils/font";
import Button from "../button/Button";
import TranslatedText from "../translated-text/TranslatedText";
import { View } from "react-native";

export const Container = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${COLORS.WHITE};
`

export const Lottie = styled(AnimatedLottieView).attrs({
    autoplay: true,
    loop: true,
    
    ref : (ref: any) => {
         setTimeout(() => {
            ref?.play()
          }, 0
        )
    }
})`
    width: 128px;
    height: 128px;
    background-color:  transparent;
`

export const ErrorText = styled(TranslatedText)`
    margin-top: 20px;
    ${font(FONT_SIZE.XLARGE, FONT_WEIGHT.REGULAR)}
    padding: 0 20px;
`

export const ErrorButton = styled(Button)`
    background-color: ${COLORS.BLACK};
    margin-top: 20px;
`
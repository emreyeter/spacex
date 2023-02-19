import { Text } from "react-native";
import styled from "styled-components";
import { font, FONT_SIZE, FONT_WEIGHT } from "../../utils/font";

export const Container = styled(Text)`
    ${font(FONT_SIZE.MEDIUM, FONT_WEIGHT.REGULAR)}
`
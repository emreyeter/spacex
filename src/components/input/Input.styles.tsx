import { TextInput } from "react-native";
import styled from "styled-components";
import { COLORS } from "../../utils/colors";
import { font, FONT_SIZE, FONT_WEIGHT } from "../../utils/font";

export const Container = styled(TextInput)`
    border: 0.5px solid ${COLORS.GREY};
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    color: ${COLORS.BLACK};
    ${font(FONT_SIZE.MEDIUM, FONT_WEIGHT.REGULAR)}

`
import { KeyboardAvoidingView, LayoutChangeEvent, ScrollView } from "react-native";
import Animated from "react-native-reanimated";

import styled from 'styled-components';
import { COLORS } from "../../utils/colors";

export const Container = styled(KeyboardAvoidingView)<{ backgroundColor?: string }>`
    flex: 1;
    background-color: ${props => props.backgroundColor ?? COLORS.WHITE};
`

export const ScrollViewContent = styled(Animated.ScrollView)``
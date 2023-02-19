import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { ButtonText, BUTTON_TYPE, Container } from './Button.styles'


export interface ButtonProps {
    onPress?: () => void
    buttonType: BUTTON_TYPE
    children?: React.ReactNode
    text?: string
    style?: StyleProp<ViewStyle>
}

const Button = (props : ButtonProps) => {

  const { onPress, buttonType, children, text, style } = props

  const handlePress = () => {
      onPress?.()
  }

  const contentRender = children ?? <ButtonText buttonType={buttonType} text={text} />

  return (
    <Container 
      activeOpacity={0.7}
      style={style} 
      onPress={handlePress} 
      buttonType={buttonType}>
      {contentRender}
    </Container>
  )
}

export default Button
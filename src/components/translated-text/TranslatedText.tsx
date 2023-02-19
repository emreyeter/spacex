import { StyleProp, TextStyle } from 'react-native'
import React from 'react'
import { Container } from './TranslatedText.styles'

interface TranslatedTextProps {
    text?: string
    style?: StyleProp<TextStyle>
    numberOfLines?: number
}

const TranslatedText = (props : TranslatedTextProps) => {

    const { text, style, numberOfLines } = props

  return (
    <Container numberOfLines={numberOfLines} style={style} >
      {text}
    </Container>
  )
}

export default TranslatedText
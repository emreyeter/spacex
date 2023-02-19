import { View, Text } from 'react-native'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Container } from './Input.styles'
import { useDebounce } from 'use-debounce'
import { COLORS } from '../../utils/colors'

interface InputProps {
    defaultValue?: string
    placeholder?: string
    onChangeText?: (text: string) => void
}



const Input = (props : InputProps) => {

    const { defaultValue, placeholder, onChangeText } = props

    const [text, setText] = useState(defaultValue ?? '')
    const [value] = useDebounce(text, 500)
    
    useEffect(() => {
        onChangeText?.(value)
    }, [value])
    

  return (
    <Container placeholderTextColor={COLORS.GREY} placeholder={placeholder} value={text} onChangeText={setText} />
  )
}

export default Input
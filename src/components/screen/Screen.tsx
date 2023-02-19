import { View, Text, KeyboardAvoidingView, Platform, LayoutChangeEvent, StyleProp, ViewStyle } from 'react-native'
import React, { useState } from 'react'
import { Container, ScrollViewContent } from './Screen.styles'
import Header from '../header/Header'
import { SharedValue, useAnimatedScrollHandler } from 'react-native-reanimated'

interface ScreenProps {
  children: React.ReactNode
  headerText?: string
  back ? : boolean
  headerVisible ? : boolean
  translationY?: SharedValue<number>
  scrollEnabled ? : boolean
  backgroundColor ? : string
}

const isIos = Platform.OS === 'ios'
const behavior = isIos ? 'padding' : 'height'


const Screen = (props : ScreenProps) => {

  const { children, headerText, back, headerVisible, scrollEnabled, backgroundColor } = props

  const [headerLayout, setHeaderLayout] = useState<number>(0)
  const [scrollViewLayout, setScrollViewLayout] = useState<number>(0)


  const isHeaderVisible = headerVisible ?? true

  const scrollHandler = props.translationY ? useAnimatedScrollHandler((event) => {
    props.translationY!.value = event.contentOffset.y;
  }) : undefined;

  const handleLayoutChange = (event: LayoutChangeEvent) => {
    setScrollViewLayout(event.nativeEvent.layout.height)
  }

  const contentContainerStyle:  StyleProp<ViewStyle> = 
  {
    paddingTop : headerLayout
  }

  const isScrollEnabled = scrollEnabled === undefined ? true : scrollEnabled
  if(!isScrollEnabled){
    contentContainerStyle.maxHeight = scrollViewLayout
  }

  const _children = isScrollEnabled ? children : <View>{children}</View>


  return (
    <Container 
    backgroundColor={backgroundColor}
    behavior={behavior}>
      <Header headerVisible={isHeaderVisible} layoutChange={setHeaderLayout} back={back} headerText={headerText} />
      <ScrollViewContent 
      horizontal={!isScrollEnabled}
      onLayout={handleLayoutChange}
      scrollEnabled={isScrollEnabled}
      scrollEventThrottle={16}
      onScroll={scrollHandler}
      contentContainerStyle={contentContainerStyle}
      >
      {_children}
    </ScrollViewContent>
  </Container>
  )
}

export default Screen
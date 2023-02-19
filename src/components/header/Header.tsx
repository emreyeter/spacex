import {  Image, LayoutChangeEvent } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

import { BackButton, Container, HeaderText, InnerContainer, OverrideButton, SideContainer } from './Header.styles'
import {SvgUri} from 'react-native-svg'
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context'
import { BUTTON_TYPE } from '../button/Button.styles';
import { useNavigation , useRoute} from '@react-navigation/native';

const noInsets: EdgeInsets = { top: 0, bottom: 0, left: 0, right: 0 }

interface HeaderProps {
    headerText?: string
    back ? : boolean
    layoutChange ? : ((height: number) => void)
    headerVisible ? : boolean
}

const Header = (props : HeaderProps) => {

  const route = useRoute()
  

  const insets = (route.params as any)?.modal ? noInsets   : useSafeAreaInsets()
  const navigation = useNavigation()


  const { headerText, back, layoutChange, headerVisible } = props

  const handleLayoutChange = (event: LayoutChangeEvent) => {
    layoutChange?.(event.nativeEvent.layout.height)
  }

  const handleBackPress = () => {
    navigation.goBack()
  }

  const backRender = back ?
    <OverrideButton 
      insets={insets}
      headerVisible={headerVisible} 
      buttonType={BUTTON_TYPE.NONE} 
      onPress={handleBackPress} >
      <BackButton />
    </OverrideButton>
    : null


  if(!props.headerVisible) 
    return backRender

  
  const hasHeaderText = headerText ? <HeaderText text={headerText} /> : <SvgUri fill="white"  uri="https://upload.wikimedia.org/wikipedia/commons/2/2e/SpaceX_logo_black.svg" height={15} width="100%" />

  return (
    <Container onLayout={handleLayoutChange} insets={insets} >
      <StatusBar  style='inverted' />
      <InnerContainer>
        <SideContainer>
          {backRender}
        </SideContainer>
        {hasHeaderText}
        <SideContainer/>
      </InnerContainer>
    </Container>
  )
}

export default Header
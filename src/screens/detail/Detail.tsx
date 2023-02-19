import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Screen from '../../components/screen/Screen'
import { LaunchItem } from '../../api/response'
import { COLORS } from '../../utils/colors'
import { getLaunchStatus } from '../../utils/helper'
import moment from 'moment'
import { unixToDate } from '../../utils/date'
import { BodyContainer, DescriptionText, LaunchDate, Title, TopContainer } from './Detail.styles'
import YoutubePlayer from "react-native-youtube-iframe";

export interface DetailProps {
  route: any
}

const Detail = (props : DetailProps) => {

  const item = props.route.params?.item as LaunchItem

  const status = getLaunchStatus(item)

  const text= `${status} Launch`
  const dateFromNow = moment(unixToDate(item.date_unix)).fromNow()

  return (
    <Screen  backgroundColor={COLORS.BLACK_RUSSIAN} back headerText={item.name} >
      
      <TopContainer>
        <Title text={text} />
        <LaunchDate text={dateFromNow} />
      </TopContainer>

      <BodyContainer>

      { 
        item.details && 
        <DescriptionText text={item.details}  /> 
      }

      
      {
        item.links.youtube_id &&
        <YoutubePlayer
        
        height={300}
        videoId={item.links.youtube_id }
        />
      }
      </BodyContainer>

    </Screen>
  )
}

export default Detail
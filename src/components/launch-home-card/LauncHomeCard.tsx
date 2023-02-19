import React from 'react'
import { Container, DescriptionContainer, DescriptionLeftContainer, DescriptionRightContainer, LaunchDateText, LaunchLogo, LaunchNameContainer, LaunchNameInnerContainer, LaunchNameText, LaunchStatusText, PlayIcon, YoutubeIcon, YoutubeIconContainer, YoutubeIconText } from './LaunchHomeCard.styles'
import { BUTTON_TYPE } from '../button/Button.styles'
import Button from '../button/Button'
import { LaunchItem } from '../../api/response'
import { getLaunchStatus, getURIByStatus } from '../../utils/helper'
import moment from 'moment'
import { unixToDate } from '../../utils/date'
import { useNavigation } from '@react-navigation/native'

interface LauncHomeCardProps {
    item: LaunchItem;
}

const LauncHomeCard = (props : LauncHomeCardProps) => {

    const {item} = props;


    const status = getLaunchStatus(item)
    const image = getURIByStatus(status)
    const navigation = useNavigation<any>()

    const text= `${status} Launch`
    const dateFromNow = moment(unixToDate(item.date_unix)).fromNow()

    const handlePress = () => {
        navigation.navigate('Detail', {item})
    }

  return (
    <Button onPress={handlePress} buttonType={BUTTON_TYPE.NONE}>   
        <Container source={{uri : image}}  >
            <LaunchLogo source={{uri : item.links.patch.small}}  />
            <LaunchNameContainer>
                <LaunchNameInnerContainer>
                    <LaunchNameText text={item.name?.toUpperCase?.()} />
                </LaunchNameInnerContainer>
            </LaunchNameContainer>
            <DescriptionContainer>
                <DescriptionLeftContainer>
                    <LaunchStatusText text={text} />
                    <LaunchDateText text={dateFromNow} />
                </DescriptionLeftContainer>

                <DescriptionRightContainer>
                    {
                        item.links.webcast && 
                        <YoutubeIconContainer>
                            <YoutubeIcon/>
                            <YoutubeIconText text="Watch" />
                        </YoutubeIconContainer>
                    }
                    <Button buttonType={BUTTON_TYPE.NONE}>
                        <PlayIcon/>
                    </Button>
                </DescriptionRightContainer>
            </DescriptionContainer>
        </Container>
    </Button>
  )
}

export default LauncHomeCard
import { View, Text } from 'react-native'
import React from 'react'

import Screen from '../../components/screen/Screen'
import { useGetLaunches } from '../../api/launches'
import { DateData, MarkedDates } from 'react-native-calendars/src/types'
import { COLORS } from '../../utils/colors'
import { CustomCalendar, ExplanationContainer, ExplanationItemContainer, ExplanationItemShape, ExplanationText } from './Filter.styles'
import { markDates } from '../../utils/mark-dates'
import { useRoute } from '@react-navigation/native'

const EXPLANATIONS = [
  { key: 'upcoming', color: COLORS.DOLPHIN, text: 'Upcoming' },
  { key: 'success', color: COLORS.SUCCESS, text: 'Success' },
  { key: 'error', color: COLORS.ERROR, text: 'Failed' },
]

interface FilterProps {
  navigation: any
}

const Filter = (props: FilterProps) => {

  const { data } = useGetLaunches()
  const route = useRoute<any>()


  const handlePressDay = (day: DateData) => {


    route.params?.onDayPress?.(day.dateString)
    props.navigation.goBack()

  }
  
  const markedDates = data ? markDates(data) : {}

  const maxDate = Object.keys(markedDates).pop()

  console.log(markedDates)

  return (
    <Screen headerText='Filter' back scrollEnabled={false} >
      <ExplanationContainer>
        {
          EXPLANATIONS.map(item => (
            <ExplanationItemContainer key={item.key}>
              <ExplanationItemShape color={item.color} />
              <ExplanationText text={item.text} />
            </ExplanationItemContainer>
          ))
        }
      </ExplanationContainer>
      {
        data && 
        <CustomCalendar 
        maxDate={maxDate}
        onDayPress={handlePressDay}
        markedDates={markedDates}      
        />
      }
    </Screen>
  )
}

export default Filter
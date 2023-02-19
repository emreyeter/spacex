import React, { useCallback, useState } from 'react'
import Screen from '../../components/screen/Screen'
import { useGetLaunches } from '../../api/launches'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import Button from '../../components/button/Button'
import { BUTTON_TYPE } from '../../components/button/Button.styles'
import moment from 'moment'
import { unixToDate } from '../../utils/date'
import LauncHomeCard from '../../components/launch-home-card/LauncHomeCard'
import { DescriptionText, HeaderText, LeftContainer, TopContainer } from './Home.styles'

const Home = () => {

  const dispatch = useDispatch()
  const { data, error } = useGetLaunches()

  const [selectedDate, setSelectedDate] = useState<string>()

  const navigation = useNavigation<any>()

  const onDayPress = (date: string) => {
    setSelectedDate(date)
  }

  const handlePickDatePress = useCallback(() => {
    navigation.navigate('Filter', { onDayPress })
  }, [])

  const filtered = data?.filter(item => moment(selectedDate).diff(unixToDate(item.date_unix), "d" ) == 0 )


  return (
    <Screen >
      
      <TopContainer>
        <LeftContainer>
          <HeaderText  text='Launches'  />
          <DescriptionText  text='To see launches, pick a date from calendar'  />
        </LeftContainer>
        <Button onPress={handlePickDatePress} buttonType={BUTTON_TYPE.PRIMARY} text='Calendar' />
      </TopContainer>

      {
        filtered?.map(item => <LauncHomeCard key={item.id} item={item} />)
      }



      {/* <TouchableOpacity onPress={() => dispatch(setError('The app is crashed'))}>
        <Text>SEND ERROR MESSAGE</Text>
      </TouchableOpacity>
     */}
    </Screen>
  )
}

export default Home
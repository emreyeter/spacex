import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Container, Lottie, LottieCircleView } from './Loader.styles'
import LottieView from 'lottie-react-native';
import { useIsFetching, isError, useQueryErrorResetBoundary, } from '@tanstack/react-query';

const DELAY = 0

const Loader = () => {

  
  
  const lottieRef = useCallback((node: LottieView | null | undefined) => {
    setTimeout(() => {
      node?.play()
    }, DELAY);
  }, [])

  const MemoizedLottie = useCallback(() => 
        <Lottie
          ref={lottieRef}
          loop
          autoPlay
          source={require('../../assets/lottie/loader.json')}
        />
  , [])
  
  const isFetching = useIsFetching() > 0
    

  return (
    <Container isLoading={isFetching}>
       <MemoizedLottie/>
    </Container>
  )
}

export default React.memo(Loader)
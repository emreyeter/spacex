
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import RootStack from './src/navigator/root-stack'
import Loader from './src/components/loader/Loader'
import ErrorBoundary from './src/components/error-boundary/ErrorBoundary'
import { queryClient } from './src/api/client'
import { QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import store from './src/store/store'

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient} >
        <ErrorBoundary>
          <NavigationContainer >
            <RootStack />
            <Loader />
          </NavigationContainer>
        </ErrorBoundary>
      </QueryClientProvider>
    </Provider>
  )
}

export default App
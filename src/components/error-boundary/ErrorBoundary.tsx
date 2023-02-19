import React, { ErrorInfo, useCallback } from 'react';
import { Lottie, ErrorText, ErrorButton, Container } from './ErrorBoundary.styles';
import { BUTTON_TYPE } from '../button/Button.styles';
import * as Updates from 'expo-updates';
import { connect } from 'react-redux';
import { RootState } from '../../store/store';


interface Props {
    children: React.ReactNode;
    errorMessage?: string;
}

interface State {
  hasError: boolean;
  error?: Error | null;
  info: ErrorInfo | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({ hasError: true, error, info });
  }
  
  

  hasError = () => this.state?.error?.message || this.props.errorMessage

  render() {

    if (!!this.hasError()) {
      return (
        <Container>
            <Lottie source={require('../../assets/lottie/error.json')}/>
            <ErrorText text={this.hasError()} />
            <ErrorButton onPress={() => Updates.reloadAsync()} buttonType={BUTTON_TYPE.PRIMARY} text='Restart App' />
        </Container>
      );
    }

    return this.props.children;
  }
}

const mapStateToProps = (state: RootState) => ({
    errorMessage: state.common.error
})


export default connect(mapStateToProps)(ErrorBoundary);

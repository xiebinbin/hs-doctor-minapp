import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import configStore from "./store";
import './app.scss'
import {
  ConfigProvider,
} from '@antmjs/vantui'

const store = configStore();

const themeVars = {
  primaryColor: '#e19a9a',
  rateIconFullColor: '#e19a9a',
  buttonSmallHeight: '50px',
  buttonSmallFontSize: '30px',
  buttonSmallBorderRadius: '20px',
  buttonSmallMinWidth: '50px'
}


function App({ children }: PropsWithChildren<any>) {
  return <ConfigProvider themeVars={themeVars}>
    <Provider store={store}>
      {children}
    </Provider>
  </ConfigProvider>
}

export default App

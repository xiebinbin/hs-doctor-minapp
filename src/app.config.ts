export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/detail/order-detail',
    'pages/login/mobile-login',
    'pages/login/wechat-login',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})

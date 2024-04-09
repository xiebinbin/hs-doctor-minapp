import { View, Text,Button } from '@tarojs/components'
import { Image, Divider, Checkbox } from '@antmjs/vantui'

import './login.scss'
import { useState } from 'react'

function WeLogin() {
  const [checked, setChecked] = useState(false)
  return <View className='login_container'>
    <View className='login_body' style={{ marginTop: 'auto'}}>
      <View className='logo_area' >
        <Image src={require('@/assets/images/logo.png')} width={100} height={100}></Image>
        <Text className='item_margin' style={{ fontWeight: 700, fontSize: '20px' }}>三林康德卫生服务中心-医生端</Text>
      </View>
      <View className='button_area'>
        <Button className='login_button_item' style={{backgroundColor: '#0369A1',color: 'white'}}   size='normal'>微信登录</Button>
        <Button className='login_button_item' style={{backgroundColor: '#FFFFFF',color:'#0369A1',border:'1px solid #0369A1 '}}  size='normal' type="primary">
          手机登录
        </Button>
      </View>
    </View>
    <View className='login_bottom' style={{ marginTop: 'auto'}}>
      <View>
        <Checkbox value={checked} onChange={(e) => setChecked(e.detail)} checkedColor="#0369A1" iconSize="30">
          <Text style={{ fontSize: 12, fontWeight: 400 }}>
            请阅读并勾选页面底部协议
          </Text>
        </Checkbox>
      </View>
      <View style={{ fontSize: 12, fontWeight: 400 }}>
        查看 <Text className='a_link'>《用户协议》</Text> <Text className='a_link'>《隐私政策》</Text>
      </View>
    </View>
  </View>
}

export default WeLogin

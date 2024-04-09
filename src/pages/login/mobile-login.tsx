import { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { Image, Button, CellGroup, Field } from '@antmjs/vantui'
import './login.scss'

function WeLogin() {
  const [state, setState] = useState({
    phone: '',
    code: ''
  })
  return <View className='login_container'>
    <View className='login_body'>
      <View className='logo_area' >
        <Image src={require('@/assets/images/logo.png')} width={100} height={100}></Image>
        <Text className='item_margin' style={{ fontWeight: 700, fontSize: '20px' }}>三林康德卫生服务中心-医生端</Text>
      </View>
      <View>
        <CellGroup style={{ margin: 0, padding: 0 }}>
          <Field
            style='padding:0'
            titleWidth="150"
            className='field_item'
            value={state.phone}
            label="手机号码"
            placeholder="请输入手机号"
            border={true}
          />
          <Field
            style='padding:0;margin:0'
            titleWidth="150"
            className='field_item'
            center
            clearable
            label="短信验证码"
            placeholder="请输入短信验证码"
            border
            renderButton= {
              <Button size="small" plain type="primary" style={{alignSelf: 'center',margin:0}}>
                发送验证码
              </Button>
            }
          />
        </CellGroup>
      </View>
    </View>

  </View>
}

export default WeLogin

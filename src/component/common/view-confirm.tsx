
import { View, ScrollView } from '@tarojs/components'
import { Button } from '@antmjs/vantui'

const preview_container: any = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
}
const preview_content = {
  margin: '10px'
}

const preview_click: any = {
  position: 'fixed',
  width: '80%',
  padding: '10px',
  bottom: '40px',
  left: '50%',
  fontSize: '30rpx',
  transform: 'translate(-50%, -50%)'
}

// h5的确认详情页
export default function ViewConfirm(props: { content: string, style?: any, onConfirm?: () => void, clickLabel?: string | boolean }) {

  return <ScrollView style={preview_container}>
    <View style={{ preview_content, ...props.style }} dangerouslySetInnerHTML={{ __html: props.content }}>
    </View>
    {props.clickLabel === false ? null :
      <Button size='normal' round type='primary' style={{ ...preview_click }} onClick={props.onConfirm ?? (() => { })
      }>{props.clickLabel ?? '我已阅读并同意该协议'}</Button>}
  </ScrollView>
}

import { View } from '@tarojs/components'
export default function SideTopic(props: { label: string,style?: any }) {

  const styles = {
    borderLeft: '8px solid #0369A1' ,
    fontWeight: 400,
    fontSize: '18px',
    paddingLeft: 5
  }

  return <View style={{
    ...styles,
    ...props.style
  }}>{props.label}</View>
}


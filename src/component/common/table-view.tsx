
import { CommonTableViewType } from '@/api/types/common'
import { View, Text } from '@tarojs/components'
export function TableView(props: { items: CommonTableViewType[] }) {

  const styles = {
    confirmLine: {
      padding: '12px',
      borderBottom: '1px solid #EBEDF0'
    },
    end: {
      border: 'none'
    }
  }
  return <View style={{
    display: 'flex',
    flexDirection: 'column', marginTop: 14
  }}>
    {props.items.map((i, index) => {
      return <View style={{
        ...styles.confirmLine,
        ... (index === props.items.length - 1) ? styles.end : {}
      }}>
        <Text style={{ marginRight: 20 }}>{i.describe}</Text>
        <Text>{i.value}</Text>
      </View>
    })}
  </View >

}

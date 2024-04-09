
import { useEffect, useState, forwardRef, useImperativeHandle } from 'react'
import { ScrollView, Text, View } from '@tarojs/components'
import { Icon } from '@antmjs/vantui'
export interface TabSwiperItem {
  id: string
  title: string
  label: string
}


export const TabSwiper = (props: {
  data: TabSwiperItem[],
  prevClick?: () => void,
  nextClick?: () => void,
  onClickTab?: (id: string) => void
}) => {
  const [sel, setSel] = useState('')
  const [data, setData] = useState<TabSwiperItem[]>([])

  useEffect(() => {
    setData(props.data)
    if (props.data.length > 0) {
      onClickTab(props.data[0].id)
    }
  }, [props.data])

  const onClickTab = (id: string) => {
    if (props.onClickTab) {
      props.onClickTab(id)
    }
    setSel(id)
  }

  return <View style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  }} >
    <Icon name='arrow-left' style={styles.icon} onClick={props.prevClick} />
    <ScrollView scrollX enableFlex style={styles.tabsSwiper} scrollLeft={0} >
      {data.map(d => {
        return <View style={{
          ...styles.tabStyle,
          borderBottom: (sel === d.id) ? '2px solid #0369A1' : 'none'
        }} key={d.id} onClick={() => { onClickTab(d.id) }}>
          <Text style={{ marginBottom: 5 }}>{d.title}</Text>
          <Text>{d.label}</Text>
        </View>
      })}
    </ScrollView>
    <Icon name='arrow' style={styles.icon} onClick={props.nextClick} />
  </View >
}

/**
 *
 */
const styles = {
  icon: { fontSize: '14px', color: '#CDCDCD' },
  tabsSwiper: {
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    padding: 0,
    margin: 0
  },
  tabStyle: {
    margin: '0 10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap'
  },
}

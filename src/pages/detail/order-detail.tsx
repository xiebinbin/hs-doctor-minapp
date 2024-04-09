import { useEffect, useState } from 'react'
import { View, Text } from '@tarojs/components'
import { Button, RadioGroup, Radio, Image } from '@antmjs/vantui'
import SideTopic from '@/component/common/side-topic'
import './order-detail.scss'
definePageConfig({
  navigationBarTitleText: '预约详情'
})
// 专家门诊确认

interface OrderDetailType {
  hospitalId: string
  hospitalName: string
  departmentId: string
  departmentName: string
  orderDate: string
  orderTime: string
  type: number
  jobTitle: string
  avatar: string
  status: number // 1 成功，2 取消
  userId: string
  docAvatar: string
  docName: string
  docJobTitle: string
  orderStamp: number
}

interface UserItem {
  id: string
  name: string
  idCard: string
  gender: number
  phone: string
}

const styles = {
  confirmLine: {
    padding: '12px',
    borderBottom: '1px solid #EBEDF0'
  },

}

const previewClick: any = {
  width: '80%',
  padding: '10px',
  fontSize: '30rpx',
  margin: '20px',
  alignSelf: 'center'
}


function OrderDetail(props: { data: OrderDetailType }) {

  const [orderDetail, setOrderDetail] = useState<OrderDetailType>()
  const [user, setUser] = useState<UserItem>()
  useEffect(() => {

    setOrderDetail({
      hospitalId: '1',
      hospitalName: '三林康德社区卫生服务中心',
      departmentId: '2',
      departmentName: '骨科',
      orderDate: '2023年1月1日/周四',
      orderTime: '上午 11:00-12:00',
      type: 2,
      jobTitle: '主治医师',
      avatar: 'https://avatars.githubusercontent.com/u/122279700',
      docName: '陈皮',
      status: 1,
      userId: '1',
      docAvatar: 'https://avatars.githubusercontent.com/u/122279700',
      docJobTitle: '主任医师',
      orderStamp: Date.now()
    })
    setUser({
      id: '1',
      name: '赵靖宇',
      idCard: '51078*********357x',
      phone: '176****1524',
      gender: 1
    })
  }, [props.data])

  const statusLabel = (status: number) => {
    if (status < 0) {
      return <Text></Text>
    }
    if (status === 1) {
      return <Text style={{ color: '#0369A1' }}>预约成功</Text>
    } else {
      return <Text style={{ color: '#A3A3A3' }}>已取消</Text>
    }
  }

  const enableCancel = (status: number): boolean => {
    const current = Date.now();
    return (status === 1) && ((orderDetail?.orderStamp ?? 0) > current)
  }

  return <View style={{
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '10px'
  }}>



    <View style={{
      display: 'flex',
      flexDirection: 'column', marginTop: 14
    }}>
      <SideTopic label='患者信息' />
      <View style={styles.confirmLine}>
        <Text style={{ marginRight: 20 }}>姓名</Text>
        <Text>{user?.name}</Text>
      </View>
      <View style={styles.confirmLine}>
        <Text style={{ marginRight: 20 }}>身份证</Text>
        <Text>{user?.idCard}</Text>
      </View>
      <View style={styles.confirmLine}>
        <Text style={{ marginRight: 20 }}>电话</Text>
        <Text>{user?.phone}</Text>
      </View>
      <View style={{ ...styles.confirmLine, border: 'none' }}>
        <Text style={{ marginRight: 20 }}>性别</Text>
        <Text>{user?.gender === 1 ? '男' : '女'}</Text>
      </View>

    </View>


    <View style={{
      display: 'flex',
      flexDirection: 'column', marginTop: 14
    }}>
      <SideTopic label='预约信息' />
      <View style={styles.confirmLine}>
        <Text style={{ marginRight: 20 }}>院区</Text>
        <Text>{orderDetail?.hospitalName}</Text>
      </View>
      <View style={styles.confirmLine}>
        <Text style={{ marginRight: 20 }}>科室</Text>
        <Text>{orderDetail?.departmentName}</Text>
      </View>
      <View style={styles.confirmLine}>
        <Text style={{ marginRight: 20 }}>日期</Text>
        <Text>{orderDetail?.orderDate}</Text>
      </View>
      <View style={styles.confirmLine}>
        <Text style={{ marginRight: 20 }}>时间</Text>
        <Text>{orderDetail?.orderTime}</Text>
      </View>
      <View style={{ ...styles.confirmLine }}>
        <Text style={{ marginRight: 20 }}>类型</Text>
        <Text>{orderDetail?.type === 1 ? '普通门诊' : '专家门诊'}</Text>
      </View>
      <View style={{ ...styles.confirmLine, border: 'none' }}>
        <Text style={{ marginRight: 20 }}>状态</Text>
        {statusLabel(orderDetail?.status ?? -1)}
      </View>
    </View>

    {enableCancel(orderDetail?.status ?? -1) ? (
      <Button size='normal' round type='primary' style={previewClick} onClick={(() => { })
      }>取消预约</Button>
    ) : null}

  </View>
}

export default OrderDetail

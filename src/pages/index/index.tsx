// 预约记录
import { useEffect, useState } from 'react'
import { View, Text, Input, Picker } from '@tarojs/components'
import { Button, Tabs, Tab, Icon, Image, Popup, DropdownMenu, DropdownItem, Field, Row, Col } from '@antmjs/vantui'
import './index.scss'
import { PageButton } from '@/component/page/pagination'

interface DoctorType {
  id: string
  name: string
  jobTitle: string
  avatar: string
  describe: string
  hospitalId: string
  hospitalName: string
}

interface RecordItem {
  id: string
  hospitalName: string
  departmentName: string
  doctorName?: string
  type: number
  orderDate: string
  orderTime: string
  status: number
}

function OrderRecordView(props) {
  const [active, setActive] = useState(0)
  const [simpleRecords, setSimpleRecords] = useState<RecordItem[]>([])
  const [expertRecords, setExpertRecords] = useState<RecordItem[]>([])
  const [currentPage1, setCurrentPage1] = useState(1)
  const [currentPage2, setCurrentPage2] = useState(1)
  const [doc, setDoc] = useState<DoctorType>()
  const [filterConsole, setFilterConsole] = useState(true)
  const [queryState, setQueryState] = useState({
    hospitals: [
      {
        text: '院区1',
        value: '0',
      },
      {
        text: '院区3',
        value: '1',
      },
      {
        text: '院区2',
        value: '2',
      },
    ],
    selectedHospital: { text: '', value: '' },
    startTime: '',
    endTime: ''
  })
  const queryPage1 = (page: number) => {
    setCurrentPage1(page)
  }
  const queryPage2 = (page: number) => {
    setCurrentPage2(page)
  }
  const filterConsoleFunc = () => {
    setFilterConsole(!filterConsole)
  }
  useEffect(() => {
    let i = 1
    setDoc({
      id: '1',
      name: '陈平',
      jobTitle: '主治医师',
      avatar: 'https://avatars.githubusercontent.com/u/122279700',
      describe: '华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解华西耳鼻喉科副主任医的自己的见解',
      hospitalId: '1',
      hospitalName: '上海市中医医院'
    })
    setSimpleRecords([
      {
        id: (i++).toString(),
        hospitalName: '中心医院',
        departmentName: '骨科',
        type: 1,
        orderDate: '2024年1月1日/周四/',
        orderTime: '上午11:00-12:00',
        status: 1
      },
      {
        id: (i++).toString(),
        hospitalName: '中心医院',
        departmentName: '骨科',
        type: 1,
        orderDate: '2024年1月1日/周四/',
        orderTime: '上午11:00-12:00',
        status: 2
      }
    ])
    setExpertRecords([
      {
        id: (i++).toString(),
        hospitalName: '中心医院',
        departmentName: '骨科',
        type: 1,
        orderDate: '2024年1月1日/周四/',
        orderTime: '上午11:00-12:00',
        status: 1,
        doctorName: '陈平'
      },
      {
        id: (i++).toString(),
        hospitalName: '中心医院',
        departmentName: '骨科',
        type: 1,
        orderDate: '2024年1月1日/周四/',
        orderTime: '上午11:00-12:00',
        status: 2,
        doctorName: '陈平'
      }
    ])
  }, [1])

  return <View style={{ padding: '10px' }}>
    <Popup show={filterConsole} position='left' onClose={() => setFilterConsole(false)}
      style={{
        width: '80%', height: '100%', padding: '10px',
        display: 'flex', flexDirection: 'column', flexWrap: 'nowrap'
      }}
    >
      <View>
        <Button round size='normal' style={{ marginRight: '10px' }}>只看已预约</Button>
        <Button round size='normal'>只看已预约</Button>
      </View>
      <View style={{ display: 'flex', margin: '10px' ,marginTop: '30px'}}>
        <Row>
          <Col span="8" className="dark">
            <Text style={{ marginRight: '20px' }}>院区:</Text>
          </Col>
          <Col span="16" style={{ display: 'flex', alignItems: 'center', flexWrap: 'nowrap' }}>

            <Picker mode='selector' range={queryState.hospitals} rangeKey='text' onChange={(e) => {
              setQueryState({
                ...queryState,
                selectedHospital: queryState.hospitals[e.detail.value]
              })
            }}>
              <Input
                style='height: 16px'
                placeholder="请输入用户名"
                value={queryState.selectedHospital.text}
              />
            </Picker>
            <Icon name='arrow' size={28}></Icon>
          </Col>
        </Row>
      </View>
      <View style={{ display: 'flex', margin: '10px' }}>
        <Row>
          <Col span="8" className="dark">
            <Text style={{ marginRight: '20px' }}>开始日期:</Text>
          </Col>
          <Col span="16" style={{ display: 'flex', alignItems: 'center', flexWrap: 'nowrap' }}>

            <Picker mode='date' value={queryState.startTime} onChange={(e) => {
              console.log(e);
              setQueryState({
                ...queryState,
                startTime: e.detail.value
              })
            }}>
              <Input
                style='height: 16px'
                placeholder="请选择日期"
                value={queryState.startTime}
              />
            </Picker>
            <Icon name='arrow' size={28}></Icon>
          </Col>
        </Row>
      </View>
      <View style={{ display: 'flex', margin: '10px' }}>
        <Row>
          <Col span="8" className="dark">
            <Text style={{ marginRight: '20px' }}>结束日期:</Text>
          </Col>
          <Col span="16" style={{ display: 'flex', alignItems: 'center', flexWrap: 'nowrap' }}>
            <Picker mode='date' value={queryState.endTime} onChange={(e) => {
              setQueryState({
                ...queryState,
                endTime: e.detail.value
              })
            }}>
              <Input
                style='height: 16px'
                placeholder="请选择日期"
                value={queryState.endTime}
              />
            </Picker>
            <Icon name='arrow' size={28}></Icon>
          </Col>
        </Row>
      </View>
      <View style={{ marginTop: 'auto', marginBottom: '10%',display:'flex',flexDirection: 'column',alignItems: 'center' }}>
        <Button className='login_button_item' style={{ backgroundColor: '#0369A1', color: 'white' }} size='normal'>微信登录</Button>
        <Button className='login_button_item' style={{ backgroundColor: '#FFFFFF', color: '#0369A1', border: '1px solid #0369A1 ' }} size='normal' type="primary">
          手机登录
        </Button>
      </View>
    </Popup>
    <View className='detail_header'>
      <Image className='detail_avatar' round src={doc?.avatar ?? ''} ></Image>
      <View className='detail_label'>
        <View>
          <Text style={{ color: '#374151', fontWeight: 600, fontSize: '18px', margin: '0 5px' }}>{doc?.name ?? ''}</Text>
          <Text style={{ color: '#ABABAB', fontWeight: 400, fontSize: '12px' }}>{doc?.jobTitle}</Text>
        </View>
        <View style={{ color: '#8B8B8B', fontWeight: 400, fontSize: '12px', margin: '5px' }}>{doc?.hospitalName ?? ''}</View>
      </View>
    </View>
    <Tabs
      className='order_record_tabs'
      active={active}
      onChange={(e) => {
        setActive(e.detail.index)
      }}
    >
      <Tab title="普通门诊" >
        <View style={{ fontSize: 12, color: '#0369A1' }} onClick={filterConsoleFunc}>
          <Image src={require('@/assets/iconFont/filter.svg')} width={24} height={24} /> 筛选
        </View>
        {simpleRecords.map(r => {
          return <View className="position_item" key={r.id} >
            <View className="position_title">
              <Text style={{ marginTop: 10, fontSize: '16px', fontWeight: 400 }}>{r.hospitalName}</Text>
              <Text style={{ marginTop: 10, fontSize: '14px', color: '#585858' }}>普通-{r.departmentName}</Text>
              <Text style={{ marginTop: 10, fontSize: '12px', color: '#9F9F9F' }}>{r.orderDate}-{r.orderDate}</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
              <Text style={{ fontSize: 12, color: (r.status === 1) ? '#0369A1' : '#8F8F8F' }}>{r.status === 1 ? '预约成功' : '已取消'}</Text>
              <Icon name="arrow" color="#969799" size={36}></Icon>
            </View>
          </View>
        })}
        <PageButton modelValue={currentPage1}
          pageCount={12}
          onChange={queryPage1}>
        </PageButton>
      </Tab>
      <Tab title="专家门诊">
        <View style={{ fontSize: 12, color: '#0369A1' }} onClick={filterConsoleFunc}>
          <Image src={require('@/assets/iconFont/filter.svg')} width={24} height={24} /> 筛选
        </View>
        {expertRecords.map(r => {
          return <View className="position_item" key={r.id} >
            <View className="position_title">
              <Text style={{ marginTop: 10, fontSize: '16px', fontWeight: 400 }}>{r.hospitalName}</Text>
              <Text style={{ marginTop: 10, fontSize: '14px', color: '#585858' }}>专家-{r.doctorName}</Text>
              <Text style={{ marginTop: 10, fontSize: '12px', color: '#9F9F9F' }}>{r.orderDate}-{r.orderDate}</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
              <Text style={{ fontSize: 12, color: (r.status === 1) ? '#0369A1' : '#8F8F8F' }}>{r.status === 1 ? '预约成功' : '已取消'}</Text>
              <Icon name="arrow" color="#969799" size={36}></Icon>
            </View>
          </View>
        })}
        <PageButton modelValue={currentPage1}
          pageCount={12}
          onChange={queryPage2}>
        </PageButton>
      </Tab>
    </Tabs>

  </View>


}

export default OrderRecordView

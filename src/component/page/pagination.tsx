
import { Pagination, Icon } from '@antmjs/vantui'
import './page.css'
export function PageButton(props) {
  return <Pagination
    className='page_button'
    style={{ padding: 0, margin: 0, alignItems: 'center', justifyContent: 'center' }}
    mode="simple"
    {...props}
    prevText={<Icon name='arrow-left' color='#969799' size='24rpx' />}
    nextText={<Icon name='arrow' color='#969799' size='24rpx' />}
  />
}


import styled from 'styled-components'
import { AutoComplete as AntAutoComplete } from 'antd'
import { getActiveDirection } from '../utils'

const AutoComplete = styled(AntAutoComplete)`
  direction: ${getActiveDirection()};

  .ant-select-selection__placeholder {
    text-align: ${getActiveDirection() === 'rtl' && 'right'}
  } 
`

export { AutoComplete }
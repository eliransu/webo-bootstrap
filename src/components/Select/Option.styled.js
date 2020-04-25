import styled from 'styled-components'
// import { Select } from 'antd'
import { getActiveDirection } from '../utils'
// const { Option: WeboOption } = Select

export const Option = styled("div")`
color: black;
.ant-select-dropdown-menu-item {
  &&{
  text-align: right !important;
  }
}
direction: ${_ => getActiveDirection()};
display: ${props => props.type};
justify-content: ${props => props.justify};
align-items: center;
text-align: right !important;

`
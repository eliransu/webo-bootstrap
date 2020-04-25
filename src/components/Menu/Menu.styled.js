import { Menu as AntMenu } from 'antd'
import styled from 'styled-components'

const Menu = styled(AntMenu)`
&&& {
  position: relative;
  top: -10px;
  left: -100px;
}
.ant-dropdown-menu-item {
  direction: rtl;
  text-align: right;
  width: 140px;
}

`

export { Menu }
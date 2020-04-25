import styled from 'styled-components'
import { Modal as WeboModal } from 'antd'
import { getActiveDirection } from '../utils'

export const Modal = styled(WeboModal)`

.ant-modal-header {
  direction: rtl;
}
.ant-modal-close {
  left: 0;
}

.ant-modal-body {
  direction: ${getActiveDirection()}
}

display: ${props => props.type};
justify-content: ${props => props.justify};
align-items: center;
flex-wrap: wrap;
`
import styled from 'styled-components'
import { Select as WeboSelect } from 'antd'

export const Select = styled(WeboSelect)`
width: 500px;
.ant-select-selection__placeholder {
  text-align: right;
}
.ant-select-selection__rendered {
  display: flex;
  justify-content: right;
}
.ant-select-selection-selected-value {
  margin-right: 5px;
}

.ant-select-dropdown-menu-item {
  text-align: right;
}

display: ${props => props.type};
justify-content: ${props => props.justify};
text-align: right;
z-index: 2;
align-items: center;
`
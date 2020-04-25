import styled from 'styled-components'
import { Input as AntInput } from 'antd'
import { getActiveDirection } from '../utils'

const Input = styled(AntInput)`
margin: ${props => props.margin};
direction: ${getActiveDirection()};
&& {
  margin: ${props => props.margin};
  width: ${props => props.width};
}
`
const TextArea = styled(AntInput.TextArea)`
margin: ${props => props.margin};
direction: ${getActiveDirection()};
&& {
  min-height: ${props => props.minHeight};
  margin: ${props => props.margin};
  width: ${props => props.width};
}
`

export { Input, TextArea }
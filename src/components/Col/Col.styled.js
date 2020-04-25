import styled from 'styled-components'
import { Col as WeboCol } from 'antd'

export const Col = styled(WeboCol)`
display: ${props => props.type || "flex"};
justify-content: ${props => props.justify};
flex-shrink: ${props => props.shrink};
min-width: ${props => props.minWidth};
`
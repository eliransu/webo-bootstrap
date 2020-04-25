import styled from 'styled-components'
import { Row as WeboRow } from 'antd'

export const Row = styled(WeboRow)`
display: ${props => props.type};
justify-content: ${props => props.justify};
text-align: ${props => props.align};
margin: ${props => props.margin};
align-items: center;
flex-wrap: wrap;
`
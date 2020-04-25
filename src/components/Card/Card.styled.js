import { Card as AntCard } from 'antd'
import styled from 'styled-components'

const Card = styled(AntCard)`
&&& {
margin: ${props => props.margin || '15px'};
padding: ${props => props.padding || '2px'};
width: ${props => props.width || '400px'};
background: ${props => props.background};
color: ${props => props.color};
position: ${props => props.position};
-webkit-box-shadow: 0px 0px 39px -22px rgba(64,64,64,1);
-moz-box-shadow: 0px 0px 39px -22px rgba(64,64,64,1);
box-shadow: 0px 0px 39px -22px rgba(64,64,64,1);

}

.ant-card-body {
  flex-wrap: wrap;
  display: ${props => props.display};
  justify-content: ${props => props.justify};
}
`

export { Card }
import { Layout } from 'antd'
import styled from 'styled-components'
const { Footer: AntFooter } = Layout;

export const Footer = styled(AntFooter)`
background-color: #fff;
display: flex;
position: absolute;
width: 100%;
/* bottom: 0; */
z-index: 999;
justify-content: center;
align-items: flex-end;
`
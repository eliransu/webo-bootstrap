import styled from 'styled-components'
import { Bar as AntBar, Pie as AntPie } from 'ant-design-pro/lib/Charts';

export const Bar = styled(AntBar)`
`

export const Pie = styled(AntPie)`

`

export const StatsWrapper = styled('div')`
  max-width: ${props => !props.free && '600px'};
`
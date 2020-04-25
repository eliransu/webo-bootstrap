import styled from 'styled-components'
import { Table as AntTable } from 'antd'
import { getActiveDirection } from '../utils'

export const Table = styled(AntTable)`
z-index: 999;
  direction: ${props => getActiveDirection()};

  &&.ant-table-wrapper {
    z-index: 999;
    display: flex;
    justify-content: center;
    .ant-pagination {
      direction: ltr;
    } 
    .ant-table-pagination {
      direction: ltr;
     }
    .ant-spin-nested-loading {
      z-index: 999;
      margin: ${props => props.margin || "25px 0 0 0"};
      width: ${props => props.width};
    }
  }
`
import styled from 'styled-components';
import { Button as AntButton } from 'antd';
import { getActiveDirection } from '../utils';

const Button = styled(AntButton)`
  direction: ${getActiveDirection()};
  z-index: 2;
  color: ${props => props.theme['@text-color'] || props.color};
  margin-right: ${props => props.marginRight};
  margin: ${props => props.margin};
  font-weight: ${props => props.bold && '600'};
  &.ant-btn-link {
    color: ${props => props.color || props.theme['@nav-item-color'] || 'white'};
  }
  span {
    margin-right: ${props => props.loading && "30px"};
  }
`;

export { Button };
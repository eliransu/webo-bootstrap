import styled from 'styled-components';
import { Icon as AntIcon } from 'antd';
import { getActiveDirection, mapSizeToFontSize } from '../utils';

const Icon = styled(AntIcon)`
  &&& {
    margin: 0;
    margin-right: ${props => props.marginRight || (props.inButton && '5px')};
    margin-right: ${props => props.size === 'title' && '15px'};
    font-size: ${props => props.size && mapSizeToFontSize[props.size]};
    cursor: ${props => props.onClick && "pointer"};
    :hover {
      transition: 0.3s;
      color: ${props => props.onClick && (props.theme['@icon-hover-color'] || '#56BDF0')}
    }
  }
  direction: ${getActiveDirection()};
`;

export { Icon };
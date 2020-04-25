import styled from 'styled-components';
import { mapSizeToFontSize } from '../utils';

const Text = styled('div')`
text-shadow: ${props => props.size === 'title' && '2px 2px 3px rgba(0,0,0,0.1)'};
  text-align: center;
  font-size: ${props => mapSizeToFontSize[props.size || 'default']};
  padding: ${props => props.size === 'title' && '30px'};
  font-weight: ${props => props.bold && '600'};
  margin: ${props => `${props.margin}px`};
  z-index: 2;
  display: ${props => props.flex && 'flex'};
  color: ${props => props.color || props.theme['@text-color'] || "#353b48"};
  align-items: center;
  justify-content: center;
`;

const TextSpan = styled('span')`
  z-index: 2;
  font-size: ${props => mapSizeToFontSize[props.size || 'default']};
  font-weight: ${props => props.bold && '600px'};
  color: ${props => props.color || props.theme['@text-color'] || "#353b48"};
`;

const Center = styled('div')`
  text-align: center;
`;

const FlexDivCenter = styled('div')`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-items: ${props => props.align || "center"};
  justify-content:${props => props.justify || "center"};
`;

export { Text, TextSpan, Center, FlexDivCenter };
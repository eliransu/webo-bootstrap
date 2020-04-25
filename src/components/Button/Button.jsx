import React from 'react';
import useMedia from '../../customHooks/UseMedia';
import { Button as WeboButton } from './Button.styled';
import { LARGE } from '../types';
import Icon from '../Icon/Icon';

function Button(props) {
  const { isDevice } = useMedia();
  return (
    <WeboButton size={!isDevice && LARGE} {...props} icon={undefined}>
      {props.children}
      {props.icon && <Icon inButton type={props.icon} />}
    </WeboButton>
  );

}

export default Button;
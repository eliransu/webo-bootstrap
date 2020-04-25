import React from 'react';
import { Icon as WeboIcon } from './Icon.styled';
import useMedia from '../../customHooks/UseMedia';
import { LARGE } from '../types'
;
function Icon(props) {
  const { isDevice } = useMedia();
  return (
    <WeboIcon size={!isDevice && LARGE} {...props} />
  );

}

export default Icon;
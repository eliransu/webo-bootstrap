import React from 'react'
import { Select as WeboSelect } from './Select.styled'
import useMedia from '../../customHooks/UseMedia'
import { LARGE } from '../types'
function Select(props) {
  const { isDevice } = useMedia()
  return (
    <WeboSelect size={!isDevice && LARGE} {...props} />
  )

}

export default Select
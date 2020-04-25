import React from 'react'
import { Input as WeboInput } from './Input.styled'
import useMedia from '../../customHooks/UseMedia'
import { LARGE } from '../types'
function Input(props) {
  const { isDevice } = useMedia()
  return (
    <WeboInput size={!isDevice && LARGE} {...props} />
  )

}

export default Input
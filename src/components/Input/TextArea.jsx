import React from 'react'
import { TextArea as WeboTextArea } from './Input.styled'
import useMedia from '../../customHooks/UseMedia'
import { LARGE } from '../types'

function TextArea(props) {
  const { isDevice } = useMedia()
  return (
    <WeboTextArea size={!isDevice && LARGE} {...props} />
  )

}

export default TextArea
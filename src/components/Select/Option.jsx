import React from 'react'
import { Option as WeboOption } from './Option.styled'
import useMedia from '../../customHooks/UseMedia'
import { LARGE } from '../types'

function Option(props) {
  const { isDevice } = useMedia()
  return (
    <WeboOption size={!isDevice && LARGE} {...props} />
  )

}

export default Option
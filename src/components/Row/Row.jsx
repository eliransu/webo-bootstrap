import React from 'react'
import { Row as WeboRow } from './Row.styled'
import useMedia from '../../customHooks/UseMedia'
import { LARGE } from '../types'
function Row(props) {
  const { isDevice } = useMedia()
  return (
    <WeboRow size={!isDevice && LARGE} {...props} />
  )

}

export default Row
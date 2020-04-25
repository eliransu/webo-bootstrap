import React from 'react'
import { Col as WeboCol } from './Col.styled'
import useMedia from '../../customHooks/UseMedia'
import { LARGE } from '../types'

function Col(props) {
  const { isDevice } = useMedia()
  return (
    <WeboCol size={!isDevice && LARGE} {...props} />
  )
}

export default Col
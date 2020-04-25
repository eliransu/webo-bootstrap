import React from 'react'
import { Pie as WeboPie, StatsWrapper } from './Charts.styled'
import useMedia from '../../customHooks/UseMedia'
import { LARGE } from '../types'

function Col(props) {
  const { isDevice } = useMedia()
  return (
    <StatsWrapper>
      <WeboPie size={!isDevice && LARGE} {...props} />
    </StatsWrapper>
  )
}

export default Col
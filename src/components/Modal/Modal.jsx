import React from 'react'
import { Modal as WeboModal } from './Modal.styled'
import useMedia from '../../customHooks/UseMedia'
import { LARGE } from '../types'
import { useTranslation } from 'react-i18next'
function Modal(props) {
  const { t } = useTranslation();
  const { isDevice } = useMedia()
  return (
    <WeboModal okText={props.okText || t('ok')}
      cancelText={props.cancelText || t('cancel')}
      size={!isDevice && LARGE} {...props} />
  )

}

export default Modal
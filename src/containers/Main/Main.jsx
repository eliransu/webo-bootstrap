import React from 'react';
import { useTranslation } from 'react-i18next';
import { MainWrapper } from './Main.styled';
import { changeLanguage, getActiveLanguage } from '../../config/translations/utils';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';
import { Text } from '../../components/Typography/Typography';

export default () => {
  const { t } = useTranslation();

  function onToggleLanguage() {
    return getActiveLanguage() === 'en'
      ? changeLanguage('he')
      : changeLanguage('en');
  }

  return (
    <MainWrapper>
      <Card>
        <Text size="title">{t('welcome_to_webo_app')}</Text>
        <Button onClick={onToggleLanguage}>{t('change_language')} <Icon inButton type="thunderbolt" /></Button>
      </Card>
    </MainWrapper>
  );
};
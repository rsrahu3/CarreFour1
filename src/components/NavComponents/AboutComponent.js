import * as React from 'react';
import Header from './../common/Header';
import constants from './../common/constant';
import TopHeader from './../common/TopHeader';
import { useTranslation, Trans } from 'react-i18next';

const AboutComponent = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <TopHeader />
      <Header active="about" />
      {constants.aboutData}
      <br />
      {t('Welcome to React')}
      <br />
      <Trans>Welcome to React</Trans>
      <button onClick={e => changeLanguage('de')}>de</button>
      <button onClick={e => changeLanguage('en')}>en</button>
    </div>
  );
};
export default AboutComponent;

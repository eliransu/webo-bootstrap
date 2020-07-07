![](https://webo-tech.com/wp-content/uploads/2020/02/webo-logo.png)
# Technology Solutions

### Webo App bootstrap
##### based on React, Redux, Ant Design, Styled Components, I18N and Firebase.

this boilerplate will provide you the ability to deliver designed and translatable applications in fast, with the best development practices.

eslint Airbnb plugin installation as a dev dependency required in order to format your code.

#### Getting started:
##### clone the repository and then
* run `npm install` 
* run `npm start` 
* edit the fb.js file with your private firebase project configurations.
* replace YOUR_PROJECT_ID value in the package.json with your firebase project_id

------------


##### Add new redux entity (action + reducer end 2 end):
* run `npm run add-redux` and answer the CLI questions

------------


##### Firebase deployment
* connect your firebase project and navigate to: https://console.firebase.google.com/u/0/project/YOUR_PROJECT/hosting
* verify that you have changed your credentials in the firebase.js file + the package.json PROJECT_ID attribute with yours
* run `npm run deploy` and your app is in production!

------------


##### Translate your app
* add you translation keys to the "he.json" + "en.json" files and use as:
        import { useTranslation } from 'react-i18next';
        const { t } = useTranslation();
        import { Text } from '../../components/Typography/Typography';
        return <Text size="title">{t('welcome_to_webo_app')}</Text>

------------



##### Typography: 
* exposing the next components:
	-  "Text" a DIV wrapper with a several props, the most importantn is the "size" field, which accept the next options:
	 ` small: '12px',
  default: '14px',
  large: '16px',
  xlarge: '20px',
  xxlarge: '24px',
  xxxlarge: '28px',
  title: '40px'`
	- "TextSpan" a SPAN wrapper which accept the same fields as the Text above.
	- "FlexDivCenter" a flexed centered DIV, which accept the same fields as the Text above.
	- visit Typography.jsx for more details.

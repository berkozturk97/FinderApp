import {observable} from 'mobx';
import * as RNLocalize from 'react-native-localize';

const languageTR = require('../Languages/tr.json');
const languageEN = require('../Languages/en.json');

class MenuStore {
  @observable resource =
    RNLocalize.getLocales()[0].languageCode === 'tr' ? languageTR : languageTR;
  @observable userToken = null;

  setUserToken = token => {
    this.userToken = token;
  };
  setLanguageEN = () => {
    this.resource = languageEN;
  };
  setLanguageTR = () => {
    this.resource = languageTR;
  };
}

export default new MenuStore();

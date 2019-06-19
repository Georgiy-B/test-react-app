import React from 'react';
import { connect } from 'react-redux';
import { fetchTranslation } from '../../actions/translator';
import { getSupportedLanguages } from '../../helpers/translator';
import { getAudioUrlFotText } from '../../api/voice';
import { getLongCodeByShortCode } from '../../helpers/translator';
import './Translator.css';

class Translator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      fromLang: navigator.language.slice(0, 2),
      toLang: 'en',
      inputTimer: null,
      inputTranslationDelay: 1000
    };

    this.translate = this.translate.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.onFromLanguageChange = this.onFromLanguageChange.bind(this);
    this.onToLanguageChange = this.onToLanguageChange.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.onVocalizeInput = this.onVocalizeInput.bind(this);
    this.onVocalizeTranslation = this.onVocalizeTranslation.bind(this);
  }

  translate() {
    if (this.state.text.length === 0) return;
    this.props.fetchTranslation(this.state.text, this.state.fromLang, this.state.toLang);
  }

  vocalize(text, lang) {
    lang = getLongCodeByShortCode(lang);
    if (!lang) return;

    let url = getAudioUrlFotText(text, lang);
    let audio = new Audio(url);
    audio.play();
  }

  onFromLanguageChange(e) {
    this.setState({ fromLang: e.target.value }, this.translate);
  }
  
  onToLanguageChange(e) {
    this.setState({ toLang: e.target.value }, this.translate);
  }

  onTextChange(e) {
    clearTimeout(this.state.inputTimer);
    let inputTimer = setTimeout(this.translate, this.state.inputTranslationDelay);
    this.setState({text: e.target.value, inputTimer});
  }

  onVocalizeInput() {
    if (this.state.text.length === 0) return;
    this.vocalize(this.state.text, this.state.fromLang);
  }

  onVocalizeTranslation() {
    if (!this.props.translator.translations || !this.props.translator.translations[0]) return;
    this.vocalize(this.props.translator.translations[0], this.state.toLang);
  }

  clearInput() {
    this.setState({text: ''});
  }

  renderLanguageOptions() {
    let langs = getSupportedLanguages();
    if (langs.length === 0) return;

    return langs.map((lang, index) => (
      <option key={index} value={lang.get('code')}>
        {lang.get('language')}
      </option>
    ));
  }

  render() {
    const inputVocalizerDisabled = this.state.text.length === 0 || !getLongCodeByShortCode(this.state.fromLang);
    const outputVocalizerDisabled = this.state.text.length === 0
      || !getLongCodeByShortCode(this.state.toLang)
      || !(this.props.translator.translations && this.props.translator.translations[0]);
    return (
      <div className="translator">
        <div className="input-container">
          <div className="tool-bar">
            <button
              title="Close"
              onClick={this.clearInput}
              disabled={this.state.text.length === 0}
            >
              <img src={`${process.env.PUBLIC_URL}/img/close.png`} alt="Close"/>
            </button>
            <button
              title="Vocalize"
              onClick={this.onVocalizeInput}
              disabled={inputVocalizerDisabled}
            >
              <img src={`${process.env.PUBLIC_URL}/img/speaker.png`} alt="Vocalize"/>
            </button>
            <select value={this.state.fromLang} onChange={this.onFromLanguageChange}>
              {this.renderLanguageOptions()}
            </select>
          </div>
          <textarea
            rows="8"
            placeholder="Please, enter text here."
            value={this.state.text}
            onChange={this.onTextChange}
          />
        </div>
        <div className="output-container">
          <div className="tool-bar">
              <button
                title="Vocalize"
                onClick={this.onVocalizeTranslation}
                disabled={outputVocalizerDisabled}
              >
                <img src={`${process.env.PUBLIC_URL}/img/speaker.png`} alt="Vocalize"/>
              </button>
            <select value={this.state.toLang} onChange={this.onToLanguageChange}>
              {this.renderLanguageOptions()}
            </select>
          </div>
          <div className="translation">
            {this.state.text.length > 0 && this.props.translator.translations}  
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    translator: state.translator
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTranslation: (text, fromLang, toLang) => dispatch(fetchTranslation(text, fromLang, toLang))
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (Translator);
import View from './View';
import previewView from './previewView';
import icons from 'url:../../img/icons.svg'; //p1

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'We couldnt find that';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
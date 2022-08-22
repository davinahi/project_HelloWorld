import Component from '../../../core/Component.js';
import store from '../../../store/store.js';

class ViewPlanCover extends Component {
  render() {
    return `
    <div class="cover" style="background-image: url('${store.state.coverImg}')">
    <div class="cover__inner">
        <div class="cover__content">
        <h2 class="cover__content__title">${store.state.title}</h2>
        <p class="cover__content__summary">${store.state.summary}</p>
        </div>
        <div class="cover__buttonbox">
        <button class="edit-btn"><img src="./assets/images/post-edit.svg" alt="글 수정" /></button>
        <button class="remove-btn"><img src="/assets/images/cancel.svg" alt="글 삭제" /></button>
        </div>
        </div>
        </div>
        `;
  }

  loadCoverImg() {
    document.querySelector('.cover').style.backgroundImage = `url(${store.state.coverImg})  `;
  }

  // addEventListener() {
  //   return [{ type: 'DOMContentLoaded', selector: 'window', handler: this.loadCoverImg }];
  // }
}

export default ViewPlanCover;
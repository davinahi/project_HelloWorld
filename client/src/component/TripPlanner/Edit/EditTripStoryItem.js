import Component from '../../../core/Component.js';
import EditTripArticle from './EditTripArticle.js';
import { getFormattedDate } from '../../DatePicker/dateUtils.js';

class EditTripStoryItem extends Component {
  render() {
    const {
      userInfo,
      item: { date, country, cells },
      idx,
    } = this.props;

    const $editTripArticle = cells.map(cell => new EditTripArticle({ userInfo, cell }).render()).join('');

    return `
      <li class="trip-story__day-item">
        <div class="trip-story__day-content">
          <h3 class="trip-story__day-content__title">Day ${idx + 1}</h3>
          <p class="trip-story__day-content__summary">${getFormattedDate(date)} | ${country}</p>
        </div>
        ${$editTripArticle}
      </li>
    `;
  }
}

export default EditTripStoryItem;

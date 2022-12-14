import Component from '../../../core/Component.js';
import store from '../../../store/store.js';
import DatePicker from '../../DatePicker/DatePicker.js';

class EditPlanner extends Component {
  render() {
    const {
      tripSchedule,
      localDatePicker,
      tripSchedule: { title, content, startDate, endDate, numberOfPeople },
    } = this.props;

    const startDatePickerProps = {
      ...tripSchedule,
      ...localDatePicker,
      inputId: 'newTripStartDate',
      calendarId: 'startDate',
      inputPlaceholder: '출발일',
      labelContent: '출발 날짜',
      date: startDate,
      startDate,
      endDate,
      unableType: 'none',
    };
    const endDatePickerProps = {
      ...tripSchedule,
      ...localDatePicker,
      inputId: 'newTripEndDate',
      calendarId: 'endDate',
      inputPlaceholder: '도착일',
      labelContent: '도착 날짜',
      date: endDate,
      startDate,
      endDate,
      unableType: 'term',
    };

    return `
    <div class="trip-planner">
      <div class="trip-planner__create">
        <div class="trip-planner__create__title">
          <input class="trip-planner__title" placeholder="어떤 여행인지 간단히 설명해주세요." minlength="3" maxlength="50" value="${title}"/>
        </div>
        <div class="trip-planner__create__content">
          <textarea class="trip-planner__content" placeholder="당신의 여행 스토리를 남겨보세요." minlength="10" maxlength="500">${content}</textarea>
        </div>
        <div class="trip-planner__create__option">
          <div class="trip-date trip-start-date">
            <span class="trip-date__span">여행 시작일</span>
            ${new DatePicker(startDatePickerProps).render()}
          </div>
          <div class="trip-date trip-end-date">
            <span class="trip-date__span">여행 도착일</span>
            ${new DatePicker(endDatePickerProps).render()}
          </div>
          <div class="trip-people"><input type="number" value="${numberOfPeople}" max="99" /><span>명</span></div>
        </div>
      </div>
    </div>
    `;
  }

  setTitle(e) {
    if (!e.target.classList.contains('trip-planner__title')) return;

    store.state = { tripSchedule: { ...store.state.tripSchedule, title: e.target.value } };
  }

  setContent(e) {
    if (!e.target.classList.contains('trip-planner__content')) return;
    store.state = { tripSchedule: { ...store.state.tripSchedule, content: e.target.value } };
  }

  addEventListener() {
    return [
      { type: 'input', selector: '.trip-planner__title', handler: this.setTitle },
      { type: 'input', selector: '.trip-planner__content', handler: this.setContent },
    ];
  }
}

export default EditPlanner;

/* eslint-disable import/extensions */
import Component from '../core/Component.js';
import store from '../store/store.js';
import CellDatePicker from './DatePicker/CellDatePicker.js';

// store.state = {
//   isShowModal: 'newScheduleCellPopup',
//   newScheduleCell: {
//     showDatePicker: false,
//     type: '',
//     date: '',
//     startTime: '',
//     endTime: '',
//     location: '',
//     memo: '',
//     todos: [],
//   },
// };

class NewScheduleCellPopup extends Component {
  toggleDatePicker(e) {
    if (!e.target.matches('.datePicker')) return;
    store.state = {
      tripSchedule: {
        ...store.state.tripSchedule,
        activeCalendar: 'newScheduleCellDate',
      },
    };
  }

  render() {
    const { newScheduleCell, tripSchedule } = store.state;
    const { type, startTime, endTime, location, memo, todos } = newScheduleCell.info;
    const { activeCalendar, currentDate, startDate, endDate } = tripSchedule;

    const typeList = [
      { id: 'type__accomodation', value: 'accomodation', content: '숙박' },
      { id: 'type__sightseeing', value: 'sightseeing', content: '관광' },
      { id: 'type__transportation', value: 'transportation', content: '교통' },
      { id: 'type__etc', value: 'etc', content: '기타' },
    ];

    const $datePicker = new CellDatePicker({
      calendarId: 'newScheduleCellDate',
      activeCalendar,
      inputPlaceholder: 'yyyy-mm-dd',
      labelContent: 'Select a day',
      unableType: 'term',
      date: tripSchedule.newScheduleCellDate,
      currentDate,
      startDate,
      endDate,
      toggle: this.toggleDatePicker,
    }).render();

    const timeList = [
      '00:00',
      '01:00',
      '02:00',
      '03:00',
      '04:00',
      '05:00',
      '06:00',
      '07:00',
      '08:00',
      '09:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
      '23:00',
    ];

    // prettier-ignore
    return `<div class="dimmed__layer newCard">
    <div class="modal newCard__popup">
      <div class="modal__header">
        <div class="modal__header__title">새 스케쥴 추가</div>
        <button class="modal__header__close__btn" aria-label="닫기"></button>
      </div>
      <form class="newCard__popup__form">
        <div class="newCard__popup__form__container type">
          <h3 class="newCard__popup__form__title">타입</h3>
          <ul class="type__list">
          ${typeList.map(({ id, value, content }) => `<li class="type__item">
              <input id="${id}" name="type" type="radio" value="${value}" ${type === value? 'checked': ''}/>
              <label for="${id}">${content}</label>
            </li>`)
            .join('')}
          </ul>
        </div>
        <div class="newCard__popup__form__container time">
          <h3 class="newCard__popup__form__title">시간</h3>
          <div class="time__form">
            ${$datePicker}
            <div class="time__form__select">
              <label for="newCard__startTime">Start with</label>
              <select name="startTime" id="newCard__startTime" value="${startTime}">
                ${timeList.map(time => `<option value="${time}" ${startTime === time? 'selected':''}>${time}</option>`)}
              </select>
            </div>
            <div class="time__form__select">
              <label for="newCard__endTime">End with</label>
              <select name="endTime" id="newCard__endTime" value="${endTime}">
                ${timeList.map(time => `<option value="${time}" ${endTime === time? 'selected':''}>${time}</option>`)}
              </select>
            </div>
          </div>
        </div>
        <div class="newCard__popup__form__container location">
          <h3 class="newCard__popup__form__title">위치</h3>
          <input type="text" name="location" class="location" value="${location.name === undefined ? '': location.name}"/>
        </div>
        <div class="newCard__popup__form__container memo">
          <h3 class="newCard__popup__form__title">메모</h3>
          <div class="memo__container">
            <div class="memo__title">
              <input type="text" class="memo-input" placeholder="메모를 입력해주세요." name="memo" value="${memo}" minLength="3" maxLength="100"/>
              <button class="memo__title__add__todo__btn" type="button" aria-label="todo 추가"></button>
            </div>
            <ul class="memo__todo__list">
            ${todos.map(
                ({ id, todo, completed }) => `<li class="memo__todo__item" data-id="${id}">
                <input type="checkbox" class="todo-chk" name="todo" id="todo${id}" ${completed ? 'checked' : ''}/>
                  <label class="memo__todo__item__chk" for="todo${id}">todo</label>
                  <input type="text" class="todo-input" value="${todo}" name="todo" placeholder="할 일을 적어주세요."/>
                <button class="memo__delete__btn" type="button" aria-label="삭제"></button>
              </li>`).join('')}
            </ul>
          </div>
        </div>
        <button class="newCard__popup__form__submit">완료</button>
      </form>
    </div>
  </div>`;
  }

  addSchedule(e) {
    e.preventDefault();

    const { newScheduleCell, tripSchedule } = store.state;
    const { scheduleId, info } = newScheduleCell;
    const {
      newScheduleCellDate,
      itinerary: { schedule },
    } = tripSchedule;
    const id = Math.max(...schedule.map(sche => Math.max(...sche.cells.map(s => s.id), 0, 0))) + 1;
    console.log(id, scheduleId, info, newScheduleCellDate);
    store.state = {
      isShowModal: '',
      tripSchedule: {
        ...tripSchedule,
        newScheduleCellDate: null,
      },
    };
  }

  closeModal(e) {
    if (!e.target.matches('.newCard.dimmed__layer') && !e.target.matches('.newCard .modal__header__close__btn')) return;
    store.state = { isShowModal: '' };
  }

  changeTypeNTimeNMemo(e) {
    const { name, value } = e.target;
    const { newScheduleCell } = store.state;
    const { info } = newScheduleCell;

    store.state = {
      newScheduleCell: {
        ...newScheduleCell,
        info: {
          ...info,
          [name]: value,
        },
      },
    };
  }

  initAutoComplete(e) {
    // strictBounds: 쿼리가 전송될 때 자동 완성 위젯이 자동 완성 위젯의 경계 내에 있는 장소만 반환해야 함
    // false(기본값)로 설정하면 결과가 경계 내에 포함된 장소로 편향되지만 이에 국한되지는 않습니다.
    // types : 반환될 예측 유형
    // establishment : 비즈니스 결과만 반환하도록 장소 자동 완성 서비스에 지시합니다.
    const options = {
      fields: ['formatted_address', 'geometry', 'name'],
      strictBounds: false,
      types: ['establishment'],
    };
    const autocomplete = new google.maps.places.Autocomplete(e.target, options);
    autocomplete.addListener('place_changed', () => {
      // 사용자가 선택한 장소.
      const place = autocomplete.getPlace();

      if (!place.geometry || !place.geometry.location) {
        window.alert("No details available for input: '" + place.name + "'");
      }
      const { newScheduleCell } = store.state;
      const { info } = newScheduleCell;

      store.state = {
        newScheduleCell: {
          ...newScheduleCell,
          info: {
            ...info,
            location: {
              ...place,
              name: e.target.value,
            },
          },
        },
      };
      document.querySelectorAll('.pac-container').forEach($pac => $pac.remove());
    });
  }

  addTodo() {
    const { newScheduleCell } = store.state;
    const { info } = newScheduleCell;
    const { todos } = info;

    const id = Math.max(...todos.map(todo => todo.id), 0) + 1;
    store.state = {
      newScheduleCell: {
        ...newScheduleCell,
        info: {
          ...info,
          todos: [...todos, { id, todo: '', completed: false }],
        },
      },
    };
  }

  deleteTodo(e) {
    if (!e.target.matches('.memo__delete__btn')) return;
    const { id } = e.target.closest('.memo__todo__item').dataset;
    const { newScheduleCell } = store.state;
    const { info } = newScheduleCell;
    const { todos } = info;

    store.state = {
      newScheduleCell: {
        ...newScheduleCell,
        info: {
          ...info,
          todos: todos.filter(todo => todo.id !== +id),
        },
      },
    };
  }

  changeTodo(e) {
    if (!e.target.matches('.todo-input') && !e.target.matches('.todo-chk')) return;

    const { newScheduleCell } = store.state;
    const { info } = newScheduleCell;
    const { todos } = info;
    const { id } = e.target.closest('.memo__todo__item').dataset;
    const { value } = e.target;
    const changedInfo = todo =>
      e.target.matches('.todo-input') ? { ...todo, todo: value } : { ...todo, completed: !todo.completed };
    const _todos = todos.map(todo => (todo.id === +id ? changedInfo(todo) : todo));

    store.state = {
      newScheduleCell: {
        ...newScheduleCell,
        info: {
          ...info,
          todos: _todos,
        },
      },
    };
  }

  preventEnterKey(e) {
    if (e.key === 'Enter') e.preventDefault();
  }

  addEventListener() {
    return [
      { type: 'submit', selector: '.newCard__popup__form', handler: this.addSchedule },
      { type: 'keydown', selector: '.newCard__popup__form input', handler: this.preventEnterKey },
      { type: 'click', selector: '.dimmed__layer.newCard', handler: this.closeModal },
      { type: 'click', selector: '.newCard .modal__header__close__btn', handler: this.closeModal },
      { type: 'change', selector: '.type__list', handler: this.changeTypeNTimeNMemo },
      {
        type: 'change',
        selector: '.newCard__popup__form__container .time__form__select',
        handler: this.changeTypeNTimeNMemo,
      },
      { type: 'click', selector: '.memo__title__add__todo__btn', handler: this.addTodo },
      { type: 'click', selector: '.location', handler: this.initAutoComplete },
      { type: 'change', selector: '.memo-input', handler: this.changeTypeNTimeNMemo },
      { type: 'change', selector: '.memo__todo__list', handler: this.changeTodo },
      { type: 'click', selector: '.memo__todo__list', handler: this.deleteTodo },
    ];
  }
}

export default NewScheduleCellPopup;
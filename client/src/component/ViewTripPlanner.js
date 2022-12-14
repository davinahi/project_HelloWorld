import Component from '../core/Component.js';
import {
  ViewPlanCover,
  ViewPlanner,
  ViewTripTab,
  ViewPlanMap,
  ViewTripStory,
  ViewPlanComment,
  ViewLikeShareBtnBox,
  ViewNavDay,
} from './TripPlanner/View/index.js';
import { initMap, moveMapCenter } from './myMap.js';
import store from '../store/store.js';

class ViewTripPlanner extends Component {
  async init() {
    const id = window.location.pathname.split('/').pop();
    try {
      const _tripSchedule = await axios.get('/tripSchedule/' + id);
      initMap('viewTripSchedule');
      store.state = {
        localCommon: {
          ...store.state.localCommon,
          path: window.location.pathname,
        },
        viewTripSchedule: _tripSchedule.data,
      };
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const {
      state: {
        userInfo: { userId },
        localCommon: { selectedTab },
        viewTripSchedule,
        viewTripSchedule: {
          authorId,
          author,
          authorProfilePic,
          coverImg,
          title,
          summary,
          itinerary,
          isLiked,
          likeCount,
          commentCount,
        },
      },
    } = store;
    console.log('상위 ', store.state.viewTripSchedule);
    console.log('상위 ', isLiked, likeCount);
    const $viewPlanCover = new ViewPlanCover({ userId, authorId, coverImg, title, summary }).render();
    const $viewPlanner = new ViewPlanner({ viewTripSchedule }).render();
    const $viewTripTab = new ViewTripTab({ selectedTab }).render();
    const $viewPlanMap = new ViewPlanMap().render();
    const $viewTripStory = new ViewTripStory({ userId, authorId, author, authorProfilePic, itinerary }).render();
    const $viewPlanComment = new ViewPlanComment({ commentCount }).render();
    const $viewLikeShareBtnBox = new ViewLikeShareBtnBox({ isLiked, likeCount }).render();
    const $viewNavDay = new ViewNavDay({ itinerary }).render();

    return `
      <main class="detail-main">
        ${$viewPlanCover}
        <div class="trip-container">
          ${$viewLikeShareBtnBox}
          <div class="trip-main-container">
            ${$viewPlanner}
            <div class="trip-itinerary">
              ${$viewTripTab}
              <div class="itinerary__container">
                ${selectedTab === 'chart' ? $viewPlanMap : $viewTripStory}
              </div>
              ${$viewPlanComment}
            </div>
          </div>
          ${$viewNavDay}
        </div>
      </main>
      `;
  }

  // async fetchSelectedTripSchedule(e) {
  //   const id = window.location.pathname.split('/').pop();

  //   const selectedTripSchedule = await axios.get('/tripSchedule/' + id);
  //   store.state = store.state.selectedTripSchedule = selectedTripSchedule.data;
  // }

  // addEventListener() {
  //   return [{ type: '', selector: 'window', handler: this.fetchSelectedTripSchedule }];
  // }
  addEventListener() {
    return [{ type: 'click', selector: '.itinerary-card', handler: moveMapCenter }];
  }
}

export default ViewTripPlanner;

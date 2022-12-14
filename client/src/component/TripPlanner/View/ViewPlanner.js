import Component from '../../../core/Component.js';
import { getFormattedDate } from '../../DatePicker/dateUtils.js';

class ViewPlanner extends Component {
  render() {
    const {
      viewTripSchedule: {
        author,
        authorProfilePic,
        content,
        startDate,
        numberOfPeople,
        createdDate,
        likeCount,
        commentCount,
      },
    } = this.props;

    if (startDate === null) return '';
    return `
    <div class="trip-planner">
      <div class="trip-planner__author">
        <div class="trip-planner__author__profile">
          <img src='${
            authorProfilePic || '/assets/images/users/profileDefault.png'
          }' alt="프로필사진" class="profile-img" />
        </div>
        <span class="trip-planner__author__nickname">${author}</span>
      </div>
      <p class="trip-planner__content">
        ${content}
      </p>
      <div class="trip-planner__info">
        <p>여행 시작일: ${getFormattedDate(startDate)} | ${numberOfPeople}명</p>
        <p>작성일: ${getFormattedDate(createdDate)}</p>
      </div>
      <div class="trip-planner__badge">
        <span><img src="/assets/images/heart-nofill.svg" alt="좋아요 뱃지" /> ${likeCount}</span>
        <span><img src="/assets/images/comment.svg" alt="댓글" />${commentCount}</span>
      </div>
    </div>
    `;
  }
}

export default ViewPlanner;

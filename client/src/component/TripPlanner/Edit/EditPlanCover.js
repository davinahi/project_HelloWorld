import Component from '../../../core/Component.js';
import store from '../../../store/store.js';

class EditPlanCover extends Component {
  render() {
    const { coverImg } = this.props;

    return `
    <div class="cover" style="background-image: url('${coverImg}')">
      <div class="cover__inner">
        <div class="cover__buttonbox">
        <label for="file">
          <div class="add-cover-btn"><img src="/assets/images/camera.svg" alt="커버사진 추가" /></div>
          <input type="file" name="file" id="file" class="add-cover-input" accept="image/*" />
        </label>     
        </div>
      </div>
    </div>
    `;
  }

  setCoverImg(e) {
    const uploadFile = [...e.target.files][0]; //* 선택한 파일 객체
    const IMG_URL = URL.createObjectURL(uploadFile); //* 파일 URL 변환

    store.state = { tripSchedule: { ...store.state.tripSchedule, coverImg: IMG_URL } };
    // URL.revokeObjectURL(IMG_URL); //* 이미지 사용 후 명시적으로 해제가 필요 (비동기 처리 해야함)
  }

  addEventListener() {
    return [{ type: 'change', selector: '.add-cover-input', handler: this.setCoverImg }];
  }
}

export default EditPlanCover;

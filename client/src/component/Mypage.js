import Component from '../core/Component.js';

class Mypage extends Component {
  render() {
    return `
      <div class="mypage">
        <section class="profile">
          <div class="profile--pic">
            <div class="profile--pic--edit"></div>
            <img class="profile--pic__img" src="/assets/images/profile4.png" alt="">
          </div>
          <h3 class="profile--nickname">Joonha</h3>
          <h4 class="profile--id">joonhabaak@gmail.com</h4>
          <div class="profile--social">
            <a class="profile--social__post profile--social__button displayNone">내 여행일지<span>21</span></a>
            <a class="profile--social__follower profile--social__button selected ">팔로워<span>128</span></a>
            <a class="profile--social__following profile--social__button ">팔로잉<span>88</span></a>
          </div>
        </section>

        <div class="mypage-main">
          <aside class="side-nav">
            <ul class="side-nav__list">
              <li class="side-nav__item selected">내 여행일지</li>
              <li class="side-nav__item">좋아요한 여행일지</li>
              <li class="side-nav__item">개인정보 수정</li>
            </ul>
          </aside>
          <div class="mypage-main__section">
            <section class="my-travel-log">
              <ul class="my-travel-log__list">
<!-- * profile card component -->
                <li class="my-travel-log__item">
                  <a href="" class="my-travel-log__link">
                    <div class="my-travel-log__item-thumbnail">
                      <img src="/assets/images/myTravelLogThumbnail.png" alt="" class="my-travel-log__item-thumbnail__img">
                    </div>
                    <div class="my-travel-log__item__main">
                      <h3 class="my-travel-log__item__main__title">강릉, 사진 찍기 좋은 숨은 명소 모음</h3>
                      <h4 class="my-travel-log__item__main__subtitle">강릉에 이런 데가 있었어?</h4>
                      <p class="my-travel-log__item__main__desc">강릉도 이제 유명한 여행지가 되었지만 이번에는 요즘 새롭게 떠오르는 숨은 강릉의 명소들을 준비했어! 대중교통으로는 조금 힘들 수도 있으니 오랜만에 엄마랑 같이 오붓한 여행 어때? 엄마 프사도, 내 프사도 바꿀 시기가 왔다구! :D</p>
                      <div class="my-travel-log__item__main__social">
                        <div class="my-travel-log__item__main__like social-icon">
                          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.75 1C2.67925 1 1 2.86391 1 5.16351C1 7.01984 1.65625 11.4256 8.116 15.8793C8.23171 15.9582 8.36455 16 8.5 16C8.63545 16 8.76829 15.9582 8.884 15.8793C15.3438 11.4256 16 7.01984 16 5.16351C16 2.86391 14.3208 1 12.25 1C10.1792 1 8.5 3.52334 8.5 3.52334C8.5 3.52334 6.82075 1 4.75 1Z" fill="white" stroke="#9A9A9A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                          <span>24</span>
                        </div>
                        <div class="my-travel-log__item__main__comment social-icon">
                          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.125 0.5H0.875L0.25 1.125V12.375L0.875 13H4V16.125L5.0675 16.5675L8.63375 13H17.125L17.75 12.375V1.125L17.125 0.5ZM16.5 11.75H8.375L7.9325 11.9325L5.25 14.6163V12.375L4.625 11.75H1.5V1.75H16.5V11.75Z" fill="#9A9A9A"/>
                          </svg>
                          <span>8</span>
                        </div>
                        <div class="my-travel-log__item__main__view social-icon">조회수: <span>512</span></div>
                      </div>
                    </div>
                    <div class="my-travel-log__item__button">
                      <button class="my-travel-log__item__button-edit">수정</button>
                      <button class="my-travel-log__item__button-delete">삭제</button>
                    </div>
                  </a>
                </li>
                <li class="my-travel-log__item">
                  <a href="" class="my-travel-log__link">
                    <div class="my-travel-log__item-thumbnail">
                      <img src="/assets/images/myTravelLogThumbnail.png" alt="" class="my-travel-log__item-thumbnail__img">
                    </div>
                    <div class="my-travel-log__item__main">
                      <h3 class="my-travel-log__item__main__title">강릉, 사진 찍기 좋은 숨은 명소 모음</h3>
                      <h4 class="my-travel-log__item__main__subtitle">강릉에 이런 데가 있었어?</h4>
                      <p class="my-travel-log__item__main__desc">강릉도 이제 유명한 여행지가 되었지만 이번에는 요즘 새롭게 떠오르는 숨은 강릉의 명소들을 준비했어! 대중교통으로는 조금 힘들 수도 있으니 오랜만에 엄마랑 같이 오붓한 여행 어때? 엄마 프사도, 내 프사도 바꿀 시기가 왔다구! :D</p>
                      <div class="my-travel-log__item__main__social">
                        <div class="my-travel-log__item__main__like social-icon">
                          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.75 1C2.67925 1 1 2.86391 1 5.16351C1 7.01984 1.65625 11.4256 8.116 15.8793C8.23171 15.9582 8.36455 16 8.5 16C8.63545 16 8.76829 15.9582 8.884 15.8793C15.3438 11.4256 16 7.01984 16 5.16351C16 2.86391 14.3208 1 12.25 1C10.1792 1 8.5 3.52334 8.5 3.52334C8.5 3.52334 6.82075 1 4.75 1Z" fill="white" stroke="#9A9A9A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                          <span>24</span>
                        </div>
                        <div class="my-travel-log__item__main__comment social-icon">
                          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.125 0.5H0.875L0.25 1.125V12.375L0.875 13H4V16.125L5.0675 16.5675L8.63375 13H17.125L17.75 12.375V1.125L17.125 0.5ZM16.5 11.75H8.375L7.9325 11.9325L5.25 14.6163V12.375L4.625 11.75H1.5V1.75H16.5V11.75Z" fill="#9A9A9A"/>
                          </svg>
                          <span>8</span>
                        </div>
                        <div class="my-travel-log__item__main__view social-icon">조회수: <span>512</span></div>
                      </div>
                    </div>
                    <div class="my-travel-log__item__button">
                      <button class="my-travel-log__item__button-edit">수정</button>
                      <button class="my-travel-log__item__button-delete">삭제</button>
                    </div>
                </a>
                </li>
              </ul>
            </section>
            <section class="liked-travel-log">
              <ul class="my-travel-log__list">
                <!-- * profile card component -->
                <li class="my-travel-log__item">
                  <a href="#" class="my-travel-log__link">
                    <div class="my-travel-log__item-thumbnail">
                      <img src="/assets/images/myTravelLogThumbnail.png" alt="" class="my-travel-log__item-thumbnail__img">
                    </div>
                    <div class="my-travel-log__item__main">
                      <h3 class="my-travel-log__item__main__title">강릉, 사진 찍기 좋은 숨은 명소 모음</h3>
                      <h4 class="my-travel-log__item__main__subtitle">강릉에 이런 데가 있었어?</h4>
                      <p class="my-travel-log__item__main__desc">강릉도 이제 유명한 여행지가 되었지만 이번에는 요즘 새롭게 떠오르는 숨은 강릉의 명소들을 준비했어! 대중교통으로는 조금 힘들 수도 있으니 오랜만에 엄마랑 같이 오붓한 여행 어때? 엄마 프사도, 내 프사도 바꿀 시기가 왔다구! :D</p>
                    </div>
                    <div class="my-travel-log__item__button">
                      <button class="my-travel-log__item__button-like">
                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 4.64835V4.4671C0 2.28273 1.57875 0.419602 3.73125 0.0608521C5.12813 -0.176335 6.60625 0.288039 7.625 1.30835L8 1.68273L8.34688 1.30835C9.39375 0.288039 10.8438 -0.176335 12.2688 0.0608521C14.4219 0.419602 16 2.28273 16 4.4671V4.64835C16 5.94523 15.4625 7.18585 14.5125 8.07023L8.86563 13.3421C8.63125 13.5609 8.32187 13.6827 8 13.6827C7.67812 13.6827 7.36875 13.5609 7.13438 13.3421L1.48719 8.07023C0.538437 7.18585 0 5.94523 0 4.64835Z" fill="#9C5EFF"/>
                        </svg>
                      </button>
                    </div>
                  </a>
                </li>
              </ul>
            </section>
            <section class="profile-info-edit">
              <form class="profile-info-edit__form">
                <div class="profile-info-edit__form__input">
                  <label for="userId">이메일</label>
                  <input id="userId" type="text" name="userId" placeholder="joonhabaak@gmail.com" readonly/>
                </div>
                <div class="profile-info-edit__form__input">
                  <label for="username">이름</label>
                  <input id="username" type="text" name="username" placeholder="Joonha Park"/>
                </div>
                <div class="profile-info-edit__form__input">
                  <label for="nickname">닉네임</label>
                  <input id="nickname" type="text" name="nickname" placeholder="Joonha"/>
                </div>
                <div class="profile-info-edit__form__input">
                  <label for="password">비밀번호</label>
                  <input id="password" type="password" name="password" placeholder="········"/>
                </div>
                <div class="profile-info-edit__form__input">
                  <label for="passwordCheck">비밀번호 확인</label>
                  <input id="passwordCheck" type="password" name="passwordCheck" placeholder="········"/>
                </div>
                <div class="profile-info-edit__form__button">
                  <button class="profile-info-edit__form-cancel">취소</button>
                  <button class="profile-info-edit__form-edit">수정</button>
                </div>
              </form>
            </section>
            <section class="social">
              <ul class="social__list">
                <li class="social__item">
                  <a href="" class="social__link">
                    <div class="profile--pic">
                      <img class="profile--pic__img" src="/assets/images/profile2.png" alt="">
                    </div>
                    <h3 class="profile--nickname">Henderson</h3>
                    <h4 class="profile--id">hendo@gmail.com</h4>
                  </a>
                </li>
                <li class="social__item">
                  <a href="" class="social__link">
                    <div class="profile--pic">
                      <img class="profile--pic__img" src="/assets/images/profile3.png" alt="">
                    </div>
                    <h3 class="profile--nickname">Gomez</h3>
                    <h4 class="profile--id">mexican.taco@gmail.com</h4>
                  </a>
                </li>
                <li class="social__item">
                  <a href="" class="social__link">
                    <div class="profile--pic">
                      <img class="profile--pic__img" src="/assets/images/profile2.png" alt="">
                    </div>
                    <h3 class="profile--nickname">Henderson</h3>
                    <h4 class="profile--id">hendo@gmail.com</h4>
                  </a>
                </li>
                <li class="social__item">
                  <a href="" class="social__link">
                    <div class="profile--pic">
                      <img class="profile--pic__img" src="/assets/images/profile3.png" alt="">
                    </div>
                    <h3 class="profile--nickname">Gomez</h3>
                    <h4 class="profile--id">mexican.taco@gmail.com</h4>
                  </a>
                </li>
                <li class="social__item">
                  <a href="" class="social__link">
                    <div class="profile--pic">
                      <img class="profile--pic__img" src="/assets/images/profile2.png" alt="">
                    </div>
                    <h3 class="profile--nickname">Henderson</h3>
                    <h4 class="profile--id">hendo@gmail.com</h4>
                  </a>
                </li>
                <li class="social__item">
                  <a href="" class="social__link">
                    <div class="profile--pic">
                      <img class="profile--pic__img" src="/assets/images/profile3.png" alt="">
                    </div>
                    <h3 class="profile--nickname">Gomez</h3>
                    <h4 class="profile--id">mexican.taco@gmail.com</h4>
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>`;
  }
}

export default Mypage;

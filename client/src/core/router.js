import {
  Intro,
  Main,
  Signin,
  Signup,
  Itinerary,
  EditTripPlanner,
  ViewTripPlanner,
  Mypage,
} from '../component/index.js';

const router = [
  {
    '/': Intro,
  },
  {
    '/main': Main,
  },
  {
    '/signin': Signin,
  },
  {
    '/signup': Signup,
  },
  {
    '/itinerary': Itinerary,
  },
  {
    '/trip-planner-edit': EditTripPlanner,
  },
  {
    '/trip-planner-view': ViewTripPlanner,
  },
  {
    '/mypage': Mypage,
  },
];

// window.addEventListener('historyChange', observe);

// 현재 path에 따라 어떤 domString 할지 보여주도록 하는 함수
const routes = () => {
  const location = window.location.pathname;

  const path = location.split('/').slice(0, 2).join('/');

  const [same] = Object.values(router.find(route => route[path]));

  if (same) {
    const Component = same;
    // window.scrollTo({
    //   top: 0,
    //   left: 0,
    //   behavior: 'instant',
    // });
    return new Component().render();
  }
};

export { routes };

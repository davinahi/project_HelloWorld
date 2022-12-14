import applyDiff from './applyDiff.js';
import eventBuffer from './eventBuffer.js';

let $root = null; // root container
let rootComponentInstance = null; // root component's instance

const bindEventHandler = $root => {
  for (const { type, selector, handler } of eventBuffer.events) {
    (selector === 'window' ? window : $root).addEventListener(type, handler);
  }
};

const render = (RootComponent, $container) => {
  if ($container) $root = $container;
  if (RootComponent) rootComponentInstance = new RootComponent();

  const $virtual = $root.cloneNode();
  const domString = rootComponentInstance.render();
  $virtual.innerHTML = domString;

  applyDiff($root, $virtual);
  // window.scrollTo({
  //   top: 0,
  //   left: 0,
  //   behavior: 'instant',
  // });
  bindEventHandler($root);
};

export default render;

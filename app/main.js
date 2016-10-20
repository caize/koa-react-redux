import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Todo from './containers/todo';
import createStore from './store';

const store = createStore();
render(
  // 这里我们从 react-redux 中获取了一个 Provider 组件，我们把它渲染到应用的最外层。他需要一个属性 store ，他把这个 store 放在context里，给App(connect)用。
  <Provider store={store}>
    <Todo />
  </Provider>,
  document.getElementById('example')
);

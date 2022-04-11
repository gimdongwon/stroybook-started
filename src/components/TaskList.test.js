import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';

import { WithPinnedTasks, Loading } from './TaskList.stories';

// pinned 상태 테스트

it('renders pinned tasks at the start of the list', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WithPinnedTasks {...WithPinnedTasks.args} />, div);

  const lastTaskInput = div.querySelector(
    '.list-item:nth-child(1) input[value="Task 6 (pinned)"]'
  );
  expect(lastTaskInput).not.toBe(null);
  ReactDOM.unmountComponentAtNode(div);
});

// loading 상태 테스트

it('render loading tasks at the loading state', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Loading {...Loading.args} />, div);
  const loadingHTML = div.querySelector('.loading-item');
  expect(loadingHTML).not.toBe(null);
  ReactDOM.unmountComponentAtNode(div);
});

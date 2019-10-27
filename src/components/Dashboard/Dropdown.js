import React from 'react';
import {
  Dropdown
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const options = [{
    key: 1,
    text: 'Choice 1',
    value: 1
  },
  {
    key: 2,
    text: 'Choice 2',
    value: 2
  },
  {
    key: 3,
    text: 'Choice 3',
    value: 3
  },
]

const DropdownMenu = () => ( <
  Dropdown clearable options = {
    options
  }
  selection / >
)

export default DropdownMenu;
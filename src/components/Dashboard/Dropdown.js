import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

 const options = [
  { key: 1, text: 'Javascript-i', value: 1 },
  { key: 2, text: 'Javascript-ii', value: 2 },
  { key: 3, text: 'Javascript-iii', value: 3 },
]

const DropdownMenu = () => (
  <Dropdown clearable options={options} selection />
)

export default DropdownMenu;
import uuid from "uuid/v4";


const reducer = (state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, {id: uuid(), name: action.name}];
    case 'REMOVE':
      return state.filter(user => user.id !== action.id);
    case 'EDIT':
      return state.map(user => user.id === action.id ? { ...users, name: action.newUser } : users);
  default:
    return state;
  }
}
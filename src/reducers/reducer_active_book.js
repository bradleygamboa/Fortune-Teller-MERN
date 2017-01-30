//state is the state this reducer is reponsible for

export default function(state = null, action){

  switch(action.type) {
      case 'BOOK_SELECTED':
          console.log('active book reducer reached')
          return action.payload;
  }

  return state;
}

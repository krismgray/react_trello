const cards = (state = [], action ) => {
  switch(action.type) {
    case 'CARDS':
      return action.cards
    case 'ADD_CARD':
      return [action.card, ...state]
    case 'UPDATE_CARD':
      return state.map( a => {
        if (a.id === action.card.id)
          return action.card
        return a
      })
    case 'DELETE_CARD':
      return state.filter( a => a.id !== action.id )
    default:
      return state;
  }
}

export default cards;

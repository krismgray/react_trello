import axios from 'axios';

export const getCards = () => {
  return(dispatch) => {
    axios.get('/api/cards')
      .then( res => dispatch({ type: 'CARDS', cards: res.data }) )
  }
}

export const addCard = (card) => {
  return (dispatch) => {
    axios.post('/api/cards', { card } )
      .then( res => dispatch({ type: 'ADD_CARD', card: res.data }) )
  }
}

export const updateCard = (card) => {
  return (dispatch) => {
    axios.put(`/api/cards/${card.id}`, { card } )
      .then( res => dispatch({ type: 'UPDATE_CARD', card: res.data }) )
  }
}

export const deleteCard = (id) => {
  return (dispatch) => {
    axios.delete(`/api/cards/${id}`)
      .then( () => dispatch({ type: 'DELETE_CARD', id }) )
  }
}

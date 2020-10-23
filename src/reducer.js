export const initialState = {
  basket: [],
  user: null,
  product: [],
  amount: [],
  searchedPhrase: [],
  buyNow: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => (item.price + amount) * item.items, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'ADD_TO_BASKET':
      //logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'OPEN_PRODUCT':
      //logic for open product in product page
      return {
        ...state,
        product: [action.item],
      };
    case 'BUY_PRODUCT':
      //logic for open product in product page
      return {
        ...state,
        amount: [action.item],
      };
    case 'BUY_NOW':
      //logic for open product in product page
      return {
        ...state,
        buyNow: [action.item],
      };
    case 'SEARCH_PRODUCT':
      //logic for open product in product page
      return {
        ...state,
        searchedPhrase: [action.item],
      };
    case 'REMOVE_FROM_BASKET':
      //logic for removing item from basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Nie można usunąć przedmiotu (id: ${action.id}) jeśli nie jest w koszu`
        );
      }

      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;

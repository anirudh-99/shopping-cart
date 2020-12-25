import * as actionTypes from "./shopConstants";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Shoes",
      description: "beautiful shoes",
      image:
        "https://images.unsplash.com/photo-1608224107683-2a892f7adc2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      price: 1500,
    },
    {
      id: 2,
      title: "Shoes",
      description: "beautiful shoes",
      image:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      price: 1500,
    },
    {
      id: 3,
      title: "Bed",
      description: "beautiful Bed",
      image:
        "https://rukminim1.flixcart.com/image/612/612/k4a7c7k0/bed/j/d/7/king-na-particle-board-bkwen00hhbs101p-flipkart-perfect-homes-original-imaf9m4fyrhzrp3g.jpeg?q=70",
      price: 1500,
    },
    {
      id: 4,
      title: "Painting",
      description: "Wonderful Painting",
      image:
        "https://rukminim1.flixcart.com/image/612/612/k7nnrm80/painting/g/d/y/sanfhx128-saf-print-original-imafpug4zasknggw.jpeg?q=70",
      price: 1500,
    },
    {
      id: 5,
      title: "Shoes",
      description: "beautiful shoes",
      image:
        "https://images.unsplash.com/photo-1608224107683-2a892f7adc2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      price: 1500,
    },
    {
      id: 6,
      title: "Shoes",
      description: "beautiful shoes",
      image:
        "https://images.unsplash.com/photo-1608224107683-2a892f7adc2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      price: 1500,
    },
    {
      id: 7,
      title: "Shoes",
      description: "beautiful shoes",
      image:
        "https://images.unsplash.com/photo-1608224107683-2a892f7adc2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      price: 1500,
    },
  ],
  cart: [],
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      //check if item is already in cart
      const inCart = state.cart.find((item) => item.id === action.payload.id)
        ? true
        : false;
      // if not present in cart add to the cart array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) => {
              if (item.id === action.payload.id) {
                return { ...item, qty: item.qty + 1 };
              } else return item;
            })
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };
    default:
      return state;
  }
};

export default shopReducer;

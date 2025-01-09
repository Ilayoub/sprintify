import {
  FETCH_MESSAGES_REQUEST,
  SEND_MESSAGE_REQUEST,
  FETCH_CHAT_MESSAGES_REQUEST,
  FETCH_MESSAGES_SUCCESS,
  FETCH_CHAT_MESSAGES_SUCCESS,
  FETCH_CHAT_BY_PROJECT_SUCCESS,
  FETCH_MESSAGES_FAILURE,
  SEND_MESSAGE_FAILURE,
  FETCH_CHAT_MESSAGES_FAILURE,
} from "./ActionTypes";

const initialState = {
  messages: [],
  loading: false,
  error: null,
  chat: null,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MESSAGES_REQUEST:
    case SEND_MESSAGE_REQUEST:
    case FETCH_CHAT_MESSAGES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_MESSAGES_SUCCESS:
    case FETCH_CHAT_MESSAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: action.messages,
      };
    case FETCH_CHAT_BY_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        chat: action.chat,
      };

    case FETCH_MESSAGES_FAILURE:
    case SEND_MESSAGE_FAILURE:
    case FETCH_CHAT_MESSAGES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default chatReducer;

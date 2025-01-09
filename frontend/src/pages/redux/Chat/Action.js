import api from "@/pages/config/api";
import {
  FETCH_CHAT_BY_PROJECT_FAILURE,
  FETCH_CHAT_BY_PROJECT_REQUEST,
  FETCH_CHAT_BY_PROJECT_SUCCESS,
  FETCH_CHAT_MESSAGES_FAILURE,
  FETCH_CHAT_MESSAGES_REQUEST,
  SEND_MESSAGE_FAILURE,
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
} from "./ActionTypes";

export const sendMessage = (messageData) => {
  return async (dispatch) => {
    dispatch({ type: SEND_MESSAGE_REQUEST });
    try {
      const response = await api.post("/api/messages/send", messageData);
      dispatch({
        type: SEND_MESSAGE_SUCCESS,
        message: response.data,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
      dispatch({
        type: SEND_MESSAGE_FAILURE,
        errpr: error.message,
      });
    }
  };
};

export const fetchChatByProject = (projectId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_CHAT_BY_PROJECT_REQUEST });
    console.log(projectId);

    try {
      const response = await api.get(`/api/messages/chat/${projectId}`);
      console.log("fetch chat", response.data);
      dispatch({
        type: FETCH_CHAT_BY_PROJECT_SUCCESS,
        chat: response.data,
      });
    } catch (error) {
      console.log("error", error);
      dispatch({
        type: FETCH_CHAT_BY_PROJECT_FAILURE,
        error: error.message,
      });
    }
  };
};

export const fetchChatMessages = (chatId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_CHAT_MESSAGES_REQUEST });
    try {
      const response = await api.get(`/api/messages/chat/${chatId}`);
      console.log("fetch messages", response.data);
      dispatch({
        type: FETCH_CHAT_BY_PROJECT_SUCCESS,
        chatId,
        messages: response.data,
      });
    } catch (error) {
      console.log("error", error);
      dispatch({
        type: FETCH_CHAT_MESSAGES_FAILURE,
        error: error.message,
      });
    }
  };
};

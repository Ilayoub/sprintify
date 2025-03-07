import api from "@/pages/config/api";
import {
  CREATE_COMMENT_FAILURE,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
  DELETE_COMMENT_SUCCESS,
  FETCH_COMMENT_FAILURE,
  FETCH_COMMENT_REQUEST,
  FETCH_COMMENT_SUCCESS,
} from "./ActionTypes";

export const createComment = (commentData) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_COMMENT_REQUEST });
    try {
      const response = await api.post(`/api/comments`, commentData);
      console.log("comment created", response.data);
      dispatch({
        type: CREATE_COMMENT_SUCCESS,
        comment: response.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: CREATE_COMMENT_FAILURE,
        error: error.message,
      });
    }
  };
};

export const deleteComment = (commentId) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_COMMENT_REQUEST });
    try {
      const response = await api.delete(`/api/comments/${commentId}`);
      console.log("comment created", response.data);
      dispatch({
        type: DELETE_COMMENT_SUCCESS,
        comment: response.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: DELETE_COMMENT_FAILURE,
        error: error.message,
      });
    }
  };
};

export const fetchComments = (issueId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_COMMENT_REQUEST });
    try {
      const response = await api.get(`/api/comments/${issueId}`);
      console.log("fetched ", response.data);
      dispatch({
        type: FETCH_COMMENT_SUCCESS,
        comment: response.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: FETCH_COMMENT_FAILURE,
        error: error.message,
      });
    }
  };
};

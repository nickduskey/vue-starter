import * as api from '../../api';
import * as types from './mutation-types';

export const getAllMessages = ({ commit }) => {
  api.getAllMessages((messages) => {
    commit(types.RECEIVE_ALL, {
      messages,
    });
  });
};

export const sendMessage = ({ commit }, payload) => { // eslint-disable-line no-unused-vars
  api.createMessage((payload, message) => { // eslint-disable-line no-shadow
    commit(types.RECEIVE_MESSAGE, {
      message,
    });
  });
};

export const switchThread = ({ commit }, payload) => {
  commit(types.SWITCH_THREAD, payload);
};

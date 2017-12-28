export const threads = state => state.threads;

export const currentThread = (state) => { // eslint-disable-line arrow-body-style
  return state.currentThreadID
    ? state.threads[state.currentThreadID]
    : {};
};

export const currentMessages = (state) => {
  const thread = currentThread(state);
  return thread.messages
    ? thread.messages.map(id => state.messages[id])
    : [];
};

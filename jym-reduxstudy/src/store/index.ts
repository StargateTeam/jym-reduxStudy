const ADD_STATE = "data/ADD_STATE" as const;
const SUB_STATE = "data/SUB_STATE" as const;

export const addState = () => ({ type: ADD_STATE });
export const subState = () => ({ type: SUB_STATE });

type ActionType = ReturnType<typeof addState> | ReturnType<typeof subState>;

export type data = {
  number: number;
};

const initialValue: data = {
  number: 0,
};

export function reducer(state: data = initialValue, action: ActionType) {
  switch (action.type) {
    case ADD_STATE:
      return {
        number: state.number + 1,
      };
    case SUB_STATE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

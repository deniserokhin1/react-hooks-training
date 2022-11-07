export const COMPLETE = "COMPLETED";
export const UNCOMPLETE = "UNCOMPLETED";

interface IAction {
  type: string;
  payload: string;
}

interface IState {
  name: string;
  isCompleted: boolean;
}

export const initialState = [
  {
    name: "Устроиться на работу",
    isCompleted: false,
  },
  {
    name: "Приготовить вкусный ужин",
    isCompleted: false,
  },
];

export const reducer = (state: IState[], action: IAction): IState[] => {
  switch (action.type) {
    case COMPLETE:
      return state.map((i) => {
        if (i.name === action.payload) i.isCompleted = true;
        return i;
      });
    case UNCOMPLETE:
      return state.map((i) => {
        if (i.name === action.payload) i.isCompleted = false;
        return i;
      });
    default:
      return state;
  }
};

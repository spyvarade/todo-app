export interface List {
  itemname: string;
  id: number;
  mark: boolean;
}

export const LIST = "list";

export const ActionType = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  UPDATE_MARK_DONE: "UPDATE_MARK_DONE",
  SET_LOCAL_DATA: "SET_LOCAL_DATA",
} as const;

export type ActionTypeValues = (typeof ActionType)[keyof typeof ActionType];

export interface AddItemAction {
  type: typeof ActionType.ADD_ITEM;
  payload: string;
}

export interface RemoveItemAction {
  type: typeof ActionType.REMOVE_ITEM;
  payload: number;
}

export interface UpdateMarkAsDoneAction {
  type: typeof ActionType.UPDATE_MARK_DONE;
  payload: number;
}

export interface SetLocalDataAction {
  type: typeof ActionType.SET_LOCAL_DATA;
  payload: string;
}

export type Action =
  | AddItemAction
  | RemoveItemAction
  | UpdateMarkAsDoneAction
  | SetLocalDataAction;

export interface State {
  list: List[];
}


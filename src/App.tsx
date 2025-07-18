import { useEffect, useReducer } from "react";
import "./App.css";
import { TodoInput } from "./components/todo/TodoInput";
import { TodoList } from "./components/todo/TodoList";
import { TodoStatus } from "./components/todo/TodoStatus";
import { ActionType, LIST, type Action, type List, type State } from "./types/todo";

const initailState: State = {
  list: [],
};

const storeInLocalStore = (list: List[]) => {
  window.localStorage.setItem(LIST, JSON.stringify(list));
};

const reducer = (state: State, action: Action) => {
  if (action.type === ActionType.ADD_ITEM) {
    const list = [
      ...state.list,
      { itemname: action.payload, id: Date.now(), mark: false },
    ];
    storeInLocalStore(list);
    return {
      list: [...list],
    };
  }

  if (action.type === ActionType.REMOVE_ITEM) {
    const list = [...state.list.filter((item) => item.id !== action.payload)];
    storeInLocalStore(list);
    return {
      list: [...list],
    };
  }
  if (action.type === ActionType.UPDATE_MARK_DONE) {
    const newList = state.list.map((item) => {
      if (item.id === action.payload) {
        return { ...item, mark: true };
      }
      return item;
    });
    storeInLocalStore(newList);
    return {
      list: [...newList],
    };
  }
  if (action.type === ActionType.SET_LOCAL_DATA) {
    if (action.payload) {
      const list = JSON.parse(action.payload) as List[];
      return {
        list: [...list],
      };
    }
  }
  return state;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initailState);

  useEffect(() => {
    const list = window.localStorage.getItem(LIST);
    if (list) {
      dispatch({
        type: ActionType.SET_LOCAL_DATA,
        payload: list,
      });
    }
  }, []);
  const onAddItemInList = (item: string) => {
    dispatch({
      type: ActionType.ADD_ITEM,
      payload: item,
    });
  };
  const onDeleteItemInList = (item: number) => {
    dispatch({
      type: ActionType.REMOVE_ITEM,
      payload: item,
    });
  };
  const onItemMarkAsDone = (item: number) => {
    dispatch({
      type: ActionType.UPDATE_MARK_DONE,
      payload: item,
    });
  };

  return (
    <div className="w-100 m-auto mt-10">
      <TodoInput onAddItem={onAddItemInList} />
      <TodoStatus list={state.list}/>
      <TodoList
        list={state.list}
        onDeleteItem={onDeleteItemInList}
        onMarkDone={onItemMarkAsDone}
      />
    </div>
  );
}

export default App;

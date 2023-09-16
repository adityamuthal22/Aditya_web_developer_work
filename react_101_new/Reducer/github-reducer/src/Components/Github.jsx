import { useReducer, useState } from "react";
import { fetchUser } from "../Reducer/Github/action";
import { githubReducer } from "../Reducer/Github/reducer";

const initValue = {
  isLoading: false,
  isError: false,
  data: [],
  token: ""
};

export default function Github() {
  const [state, dispatch] = useReducer(githubReducer, initValue);
  const [text, setText] = useState("");

  return (
    <div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="add something"
        />
        <button onClick={() => fetchUser(dispatch, text)}>Search</button>
      </div>
      <div>
        {state.data.map((item) => (
          <div key={item.login}>{item.login}</div>
        ))}
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log('all time');

  useEffect(() => {
    // state가 아무리 변해도 코드를 딱 한 번만 실행하는 함수.
    console.log('only one time');
  }, []);

  useEffect(() => {
    if (keyword !== "" & keyword.length > 5) {
      console.log('Search Movie : ', keyword);
    }
  }, [keyword]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{ counter }</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

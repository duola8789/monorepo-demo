import './App.css';
import { getTitle } from '@common/index';
import { useEffect, useMemo, useState } from 'react';

function App() {
  console.log(123123);
  const [msgList, setMsgList] = useState<string[]>([]);
  useEffect(() => {
    const source = new EventSource('http://localhost:9000/api/events/start');
    source.addEventListener(
      'open',
      function (event) {
        console.log('open', event);
      },
      false
    );

    // 另一种写法
    source.addEventListener(
      'message',
      function (event) {
        const data = event.data as string;
        console.log(data, 123123);
        setMsgList(list => [...list, data]);
      },
      false
    );
  }, [setMsgList]);

  const onStop = () => {
    fetch('http://localhost:9000/api/events/start/stop')
      .then(v => v.json())
      .then(v => {
        console.log('message', v);
      });
  };

  return (
    <>
      <p>Hello</p>
      <p>{getTitle()}</p>
      <button onClick={onStop}>Stop</button>
      <p>Messages:</p>
      {msgList.map((v, index) => (
        <p key={index}>{v}</p>
      ))}
    </>
  );
}

export default App;

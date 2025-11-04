import { useState } from 'react';
import './App.css'

function App() {
  let post = "지세 맛집";
  let [title, titleChange] = useState(["제목1", "제목2", "제목3", "뭘봐", "어쩌라고", "나이스"]);
  let [cnt, increaseCnt] = useState(0);

  return (
    <div>
      <div className="black-box">
        <h1>Blog</h1>
        <h2>{post}</h2>
        <p style={{color: "red", fontSize: "20px"}}>데이터 바인딩은 중괄호</p>
      </div>

      <hr />

      <button onClick={ () => {
        let copy = [...title];
        
        if (title[0] === "제목1") {
          copy[0] = "집에 가고 싶을 땐";
          titleChange(copy);
        } else {
          copy[0] = "제목1";
          titleChange(copy);
        }
      }}>제목 바꾸기</button>
      
      <button onClick={() => {
        let newArr = [...title];
        newArr = newArr.sort();
        titleChange(newArr);
      }}>제목 정렬하기</button>

      <hr />

      <div className='list'>
        <h4>{title[0]} <span onClick={() => {increaseCnt(cnt+1)}}>좋아요🤗</span> {cnt} </h4>
        <p>2025.11.04.17:22:13</p>
        <p>state는 변동 시 자동으로 html에 반영되게 만들고 싶을 때 사용</p>
      </div>
      <div className='list'>
        <h4>{title[1]}</h4>
        <p>2025.11.04.17:22:14</p>
      </div>
      <div className='list'>
        <h4>{title[2]}</h4>
        <p>2025.11.04.17:22:15</p>
      </div>
    </div>
  );
}

export default App

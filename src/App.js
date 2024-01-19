import "./App.css";

function App() {
  const list100ea = () => {
    const items = []; // 배열 생성
    for (let i = 0; i <= 200; i++) {
      items.push(<li key={i}>{i}</li>); // key와 함께 배열에 <li> 요소 추가
    }
    return items; // 배열 반환
  };

  return (
    <div className="App">
      <>
        <div className="main-bg">
          <nav className="Nav wrapper">navigation bar</nav>
        </div>
        <div className="main-content wrapper">
          <div className="Content-container">content</div>
          <aside className="Sidebar">
            sidebar
            {list100ea()}
            <ul></ul>
          </aside>
        </div>
      </>
    </div>
  );
}

export default App;

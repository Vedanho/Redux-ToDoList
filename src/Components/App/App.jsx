import Header from "../Header/Header";
import Input from "../Input/Input";
import List from "../List/List";
import "./App.css";

//Так как используем useSelector() пропсы не используем

function App() {
  return (
    <div className="App">
      <Header />
      <Input />
      <List />
    </div>
  );
}

export default App;

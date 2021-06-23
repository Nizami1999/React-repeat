import articles from "./API/data";
import "./App.css";
import Test from "./components/Test/Test";

function App() {
  return (
    <div className="container">
      <Test posts={articles.posts} />
    </div>
  );
}

export default App;

import "./App.css";
import { useEffect, useState } from "react";
import Article from "./Article";
function App() {
  let [articles, setArticles] = useState([]);
  let [category, setCategory] = useState("india");

  useEffect(() => {
    console.log(process.env.REACT_APP_NEWSAPI_KEY);
    fetch(
      `https://newsapi.org/v2/everything?q=${category}&from=2024-07-28&to=2024-07-2&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        // console.log(data.articles)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  return (
    <div className="App">
      <header className="header">
        <h1>Just News</h1>
        <input
          type="text"
          placeholder="search news"
          onChange={(event) => {
            if (event.target.value !== "") {
              setCategory(event.target.value);
            } else {
              setCategory("india");
            }
          }}
        />
      </header>
      <section className="News-Articles">
        {articles.length !== 0 ? (
          articles.map((article, index) => {
            return <Article article={article} key={index} />;
          })
        ) : (
          <h3>No news found for search text!</h3>
        )}
      </section>
    </div>
  );
}

export default App;

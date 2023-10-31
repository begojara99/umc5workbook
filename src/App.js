
import { movies } from "./movieDummy";
import Movie from "./Components/Movie/Movie";
function App() {
  return (
    <div className="App">
      <div className="app-container">
      {
        movies.results.map((item) => {
          return (
            <Movie movie={item} key={item.id} />
          );
        })
      }
      </div>
    </div>
  );
}

export default App;

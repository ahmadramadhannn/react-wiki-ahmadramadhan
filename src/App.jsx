import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Search from "./components/Search/Search";

export default function App() {
  const [fetchData, updateFetchData] = useState([]);
  const [pageNumber, updatePageNumber] = useState(1);
  const [search, setSearch] = useState("");

  const { info, results } = fetchData;
  console.log(results);
  let urlApi = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(urlApi).then((res) => res.json());
      updateFetchData(data);
      console.log(data);
    })();
  }, [urlApi]);
  return (
    <div className="App">
      <h1 className="text-center mb-3">All Characters</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card results={results} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

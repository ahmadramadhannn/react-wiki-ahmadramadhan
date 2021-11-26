import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";
import Card from "./components/Card/Card";

export default function App() {
  const [fetchData, updateFetchData] = useState([]);
  const { info, results } = fetchData;
  console.log(results);
  let urlApi = `https://rickandmortyapi.com/api/character/?page=1`;

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
      <div className="container">
        <div className="row">
          Filter component will be placed here
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

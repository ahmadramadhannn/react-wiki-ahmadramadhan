import styles from "./Search.module.scss";

export default function Search({ setSearch, updatePageNumber }) {
  const searchBtn = (event) => {
    event.preventDefault();
  };
  return (
    <form
      className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
    >
      <input
        onChange={(e) => {
          updatePageNumber(1);
          setSearch(e.target.value);
        }}
        type="text"
        placeholder="Search for characters"
        className={styles.input}
      />

      <button
        onClick={searchBtn}
        className={`${styles.btn} btn btn-primary fs-5`}
      >
        Search
      </button>
    </form>
  );
}

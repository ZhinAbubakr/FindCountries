import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setData(res.data[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        window.location.replace("/countries");
      });
  }, [url]);
  return { loading, data, error };
};

export default useFetch;

import { useCallback, useEffect, useState } from "react";
import axios from "axios";

/**
 * useFetch with cancel token and useEffect
 * const { data, loading, error } = useFetch(url, options);
 *
 */

export const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    console.log("useFetch running... ", url);
    const source = axios.CancelToken.source();
    axios
      .get(url, {
        cancelToken: source.token,
      })
      .then((response) => {
        console.log("data", response.data);
        response.data ? setData(response.data) : setData(null);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      source.cancel();
    };
  }, [url]);

  return { data, loading, error };
};

/**
 * useFetch with useCallback
 *
 * const { data, loading, error, refetch } = useFetch(url, options); *
 * using refetch we can retrigger the fetch
 *
 */

// export const useFetch = (url, options = {}) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchData = useCallback(async () => {
//     setLoading(true);
//     setError(null);
//     console.log("fetching", url);
//     try {
//       const response = await axios(url, options);
//       setData(response.data);
//     } catch (err) {
//       setError(err);
//     } finally {
//       setLoading(false);
//     }
//   }, [url, options]);

//   return { data, loading, error, refetch: fetchData };
// };

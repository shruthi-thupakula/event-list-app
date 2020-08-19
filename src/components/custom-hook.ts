import { useEffect, useRef, useState } from "react";

// This custom hook centralizes and streamlines handling of HTTP calls
export default function useFetch(url: string, init: any = {}) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | any>(null);
  const prevInit = useRef<any>();
  const prevUrl = useRef<any>();

  useEffect(() => {
    // Only refetch if url or init params change.
    if (prevUrl.current === url) return;
    prevUrl.current = url;
    prevInit.current = init;
    fetch(url, init)
      .then((response) => {
        if (response.ok) return response.json();
        setError(response);
      })
      .then((data) => setData(data))
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [init, url]);

  return { data, loading, error };
}

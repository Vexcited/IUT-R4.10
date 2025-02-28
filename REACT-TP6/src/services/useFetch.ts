import { useEffect, useState } from "react";

const useFetch = <T>(url: string) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    void async function () {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      }
      catch (error) {
        setError(error as Error);
      }
      finally {
        setLoading(false)
      }
    }()
  }, [url]);

  return { data, loading, error };
}

export default useFetch;

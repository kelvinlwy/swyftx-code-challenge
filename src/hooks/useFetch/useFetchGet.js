import { useEffect, useState } from 'react'
import useFetchDispatch from "./useFetchDispatch";

/**
 * A custom hook to preform fetch request
 */
const useFetchGet = () => {
  const [url, setUrl] = useState();
  const { init, onSuccess, onError, results } = useFetchDispatch();

  useEffect(() => {
    if (!url) return;

    init(); // initialise the request

    ( async () => {
      try {
        const response = await fetch(url);

        if (response.ok) onSuccess(await response.json());
        else onError(response);

      } catch (e) {
        onError(e);
      }
    } )()

  }, [url, onError, onSuccess, init])

  return {
    ...results,
    fetch: setUrl,
  }
}

export default useFetchGet;

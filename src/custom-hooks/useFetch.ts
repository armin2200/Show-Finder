import { useEffect, useReducer, useRef } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { sleep } from '../utils/sleep';
import { Status } from '../types';
// State & hook output
interface State<T> {
  status: Status;
  data?: T;
  error?: string;
}
interface Cache<T> {
  [url: string]: T;
}
// discriminated union type
type Action<T> =
  | { type: 'request' }
  | { type: 'success'; payload: T }
  | { type: 'failure'; payload: string };

// Keep state logic separated
const fetchReducer = <T>(state: State<T>, action: Action<T>): State<T> => {
  switch (action.type) {
    case 'request':
      return { ...state, status: 'fetching' };
    case 'success':
      return { ...state, status: 'fetched', data: action.payload };
    case 'failure':
      return { ...state, status: 'error', error: action.payload };
    default:
      return state;
  }
};
function useFetch<T>(url?: string, options?: AxiosRequestConfig): State<T> {
  const cache = useRef<Cache<T>>({});
  let cancelRequest = false;
  const initialState: State<T> = {
    status: 'init',
    error: undefined,
    data: undefined,
  };

  const [state, dispatch] = useReducer<
    (state: State<T>, action: Action<T>) => State<T>
  >(fetchReducer, initialState);
  useEffect(() => {
    if (!url) {
      return;
    }
    const fetchData = async () => {
      dispatch({ type: 'request' });
      await sleep(1000);
      if (cache.current[url]) {
        dispatch({ type: 'success', payload: cache.current[url] });
      } else {
        try {
          const response = await axios(url, options);
          cache.current[url] = response.data;
          if (cancelRequest) return;
          dispatch({ type: 'success', payload: response.data });
        } catch (error) {
          if (cancelRequest) return;
          dispatch({ type: 'failure', payload: error.message });
        }
      }
    };
    fetchData();
    return () => {
      cancelRequest = true;
    };
  }, [url]);
  return state;
}
export default useFetch;

import {useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] =useState(null);
    //const [name, setName] = useState(' kay');

      useEffect(() => {
        const abortCont = new AbortController();
         

        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
         .then(res => {
            if(!res.ok) {
               throw Error('could not fetch the data for that resource');
            }
          return  res.json();
         })
         .then(data =>{
            setData(data)
            setIsPending(false);
            setError(null);
         })
         .catch(err =>{
            // console.log(err.message);
            if (err.name ==='AbortError'){
                console.log('fetch aborted')
            }else{
            setIsPending(false);
            setError(err.message);
        }
         })
        }, 1000);
        return () => abortCont.abort();
         // console.log('use effect ran');
         // console.log(name);
      //}, [name]);
      }, [url]);

      return {data, isPending, error}
}
 
export default useFetch;
import { useEffect, useState } from "react";

export default function UseEffect4(){
    const [count,setcount]=useState(0);
    const [calculation,setcalculation]=useState(0);

    useEffect(() => {
        setcalculation(() => count * 2);
      }, [count]); // <- add the count variable here
    
      return (
        <>
          <p>Count: {count}</p>
          <button onClick={() => setcount((c) => c + 1)}>+</button>
          <p>Calculation: {calculation}</p>
        </>
      );
    
}
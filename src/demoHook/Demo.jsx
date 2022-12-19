// React Hook
// Function component : k có state , lifecycle
// => giải pháp : React Hook
// => Công dụng : 
// 1. Cho phép FC có thế sử dụng dc state, lifecycle
// 2. Cho phép tái sử dụng logic giauwx các component với

// Danh sách Hook
// 1 . useState(truyền vào tham số)
// 2 . useEffect() => arrow function = 
//  memo = pureComponent
// 3 . useCallback()
// 4 . useMemo()
// 5 . useRef() => Dom trong component
import React, { memo, useEffect, useMemo, useRef, useState } from 'react'

const Demo = () => {
     const [count, setCount] = useState(3);
     //   const [a,setA]=   useState(3);
     const tittleRef = useRef();
     useEffect(() => {
          console.log("demo effect")
          // clean function : chạy trước khi useEffect chạy lại
          return () => {
               console.log("clean")
          }
     }, [count])

     useEffect(() => {
          console.log("demo effect")
          // clean function : chạy khi component unmount
          return () => {
               console.log("clean")
          }
     })

     const sum = useMemo(() => {
     
     }, [])


     return (
          <div>
               <h1>{count}</h1>
               <h1 ref={tittleRef}>{sum}</h1>
               <button

                    onClick={() => {
                         setCount(count + 1)
                         tittleRef.current.style.color = "yellow"
                    }}
               >Increase Count</button>
          </div>
     )
}

export default memo(Demo)

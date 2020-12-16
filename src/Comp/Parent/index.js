import React, {useRef} from "react";

import Child from '../Child';

let Parent = () => {
  const childRef = useRef();

  const updateChildState = () => {
    console.log('调用子组件：', childRef)
    // changeVal就是子组件暴露给父组件的方法
    childRef.current.changeVal(99);
  }

  return (
    <div style={{textAlign: "center"}}>
     <button onClick={updateChildState}>触发子组件方法</button>
     <div style={{border: "1px solid #ccc", width: "200px", margin: "10px auto"}}>
      <Child ref={childRef} />
     </div>
    </div>
  );
}
export default Parent;
import React, {useImperativeHandle, forwardRef} from "react";


let Child = (props, ref) => {

  // 此处注意useImperativeHandle方法的的第一个参数是目标元素的ref引用
  useImperativeHandle(ref, () => ({
    // changeVal 就是暴露给父组件的方法
    changeVal: (newVal) => {
      alert('调用了子组件的方法=》'+newVal)
    }
  }));

  return (
    <div>
     我是子组件
    </div>
  );
}

Child = forwardRef(Child)
export default Child;
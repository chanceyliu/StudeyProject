// 1.样式题，求最终 left、right 的宽度

// <div class="container">
//     <div class="left"></div>
//     <div class="right"></div>
// </div>

// <style>
//   * {
//     padding: 0;
//     margin: 0;
//   }
//   .container {
//     width: 600px;
//     height: 300px;
//     display: flex;
//   }
//   .left {
//     flex: 1 2 300px;
//     background: red;
//   }
//   .right {
//     flex: 2 1 200px;
//     background: blue;
//   }
// </style>

// Promise.resolve('1')
//   .then(res => {
//     console.log(res)
//   })
//   .finally(() => {
//     console.log('finally')
//   })
// Promise.resolve('2')
//   .finally(() => {
//     console.log('finally2')
//     // return '我是finally2返回的值'
//   })
//   .then(res => {
//     console.log('finally2后面的then函数', res)
//   })

// 1
// finally2后面的then函数 2
// finally
// finally2
// 1
// fin2
// fin

// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 示例:
// 输入: [0,1,0,3,12] 输出: [1,3,12,0,0]

// 说明:
// 1. 必须在原数组上操作，不能拷贝额外的数组。
// 2. 尽量减少操作次数。

// let arr = [6, 0, 1, 0, 3, 12];

// const test = (arr: number[]) => {
//   // arr.sort((a, b) => a - b);
//   arr.forEach((element, index) => {
//     if (element === 0) {
//       arr.splice(index, 1);
//       arr.push(0);
//     }
//   });
//   console.log(arr);
// };

// test(arr);

const testPromise = () => {
  return new Promise((resolve, reject) => {
    resolve(4444);
  }).finally(() => {
    console.log("end");
  });
};

const testMo = async () => {
  console.log(1);
  const data = await testPromise();
  testPromise().then((res) => {
    console.log(res);
  });
  console.log(data);
  console.log(2);
  console.log(3);
};

testMo();

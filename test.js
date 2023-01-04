/**
 * 1.promise有三种状态："pending" | "fulfilled" | "rejected"
 * 2.只有pending状态可以扭转为其他状态
 * 3.默认一开始为pending，状态一旦确定不得更改
 */

class MyPromise {

  constructor(executor) {
    this.status = "pending";
    this.result = undefined;
    this.reason = undefined;

    let resolve = (value) => {
      // 只有status为pending才能改变状态
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.result = value;
      }
    };

    let reject = (value) => {
      // 只有status为pending才能改变状态
      if (this.status === "pending") {
        this.status = "rejected";
        this.reason = value;
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === "fulfilled") {
      onFulfilled(this.result);
    }

    if (this.status === 'rejected') {
      onRejected(this.reason)
    }
  }

  catch(onRejected) {
    if (this.status === 'rejected') {
      onRejected(this.reason)
    }
  }

  all() {
    console.log("object");
  }
}

const b = new MyPromise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve(3);
    }, 1000)

  } catch (error) {
    reject(error);
  }
}).then((res) => {
  console.log(res, "my--");
})

// const a = new Promise((resolve, reject) => {
//   try {
//     resolve(3);
//   } catch (error) {
//     reject("error: ");
//   }
// });

// a.then((res) => {
//   console.log(res, "--");
// }).catch((error) => {
//   console.log(error);
// });

/**
 * 1.promise有三种状态："pending" | "fulfilled" | "rejected"
 * 2.只有pending状态可以扭转为其他状态
 * 3.默认一开始为pending，状态一旦确定不得更改
 */

class MyPromise {
  private status: "pending" | "fulfilled" | "rejected";
  /**
   * 成功的值
   */
  private result: any;
  /**
   * 失败的值
   */
  private reason: any;
  private onFulfilledFnList: ((value?: any) => void)[];
  private onRejectedFnList: ((value?: any) => void)[];
  constructor(
    executor: (
      resolve: (value: unknown) => void,
      reject: (reason?: any) => void
    ) => void
  ) {
    this.status = "pending";
    this.result = undefined;
    this.reason = undefined;
    this.onFulfilledFnList = [];
    this.onRejectedFnList = [];

    let resolve = (value: unknown) => {
      // 只有status为pending才能改变状态
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.result = value;
        console.log(this.onFulfilledFnList);
        this.onFulfilledFnList.forEach((fn) => fn());
      }
    };

    let reject = (value?: any) => {
      // 只有status为pending才能改变状态
      if (this.status === "pending") {
        this.status = "rejected";
        this.reason = value;

        this.onRejectedFnList.forEach((fn) => fn());
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onfulfilled?: any, onrejected?: any) {
    if (this.status === "fulfilled") {
      onfulfilled(this.result);
    }

    if (this.status === "rejected") {
      onrejected(this.reason);
    }

    if (this.status === "pending") {
      this.onFulfilledFnList.push(() => {
        onfulfilled(this.result);
      });
      this.onRejectedFnList.push(() => {
        onrejected(this.reason);
      });
    }
  }

  catch() {
    console.log("object");
  }

  all() {
    console.log("object");
  }
}

const b = new MyPromise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve(3);
    }, 1000);
  } catch (error) {
    reject("error: ");
  }
}).then((res: any) => {
  console.log(res, "my--");
});

// const a = new Promise((resolve, reject) => {
//   try {
//     resolve(3);
//   } catch (error) {
//     reject("error: ");
//   }
// });

// a.then((res) => {
//   console.log(res, "--");
// });

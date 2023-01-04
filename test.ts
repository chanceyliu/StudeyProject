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
  constructor(executor: any) {
    this.status = "pending";
    this.result = undefined;
    this.reason = undefined;

    let resolve = (value) => {
      // 只有status为pending才能改变状态
      if (this.status === "pending") {
        this.status = "rejected";
        this.result = value;
      }
    };

    let reject = (value) => {
      // 只有status为pending才能改变状态
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.reason = value;
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
    resolve(3);
  } catch (error) {
    reject("error: ");
  }
}).then((res) => {
  console.log(res, "my--");
});

const a = new Promise((resolve, reject) => {
  try {
    resolve(3);
  } catch (error) {
    reject("error: ");
  }
});

a.then((res) => {
  console.log(res, "--");
}).catch((error) => {
  console.log(error);
});

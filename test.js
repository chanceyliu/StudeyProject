const { default: axios } = require("axios")

class MyPromise {
  constructor(executor) {
    // Promise当前的状态
    let status = 'pending'
    // Promise的值
    let data = undefined
    // Promise resolve时的回调函数集
    let onResolvedCallback = []
    // Promise reject时的回调函数集
    let onRejectedCallback = []

    let resolve = (value) => {
      if (status === 'pending') {
        status = 'resolved'
        data = value
        onResolvedCallback.forEach(func => {
          func(value)
        })
      }
      console.log(value, '--success');
    }

    let reject = (value) => {
      if (status === 'pending') {
        status = 'rejected'
        data = value
        onRejectedCallback.forEach(func => {
          func(value)
        })
      }
      console.log(value, '--error');
    }

    try {
      executor(resolve, reject)
    } catch (error) {
      this.reject(error)
    }
  }

  then() { }


}






/**
 * 发布订阅模式
 */
export class SubscriptionPublish {
  private eventMap: Record<string, ((params: any) => any)[]>;

  constructor() {
    this.eventMap = {};
  }

  /**
   * 订阅函数
   * @param key 订阅事件Key值
   * @param handler 订阅事件
   */
  on(key: string, handler: (params: any) => any) {
    if (!this.eventMap[key]) {
      this.eventMap[key] = [];
    }
    this.eventMap[key].push(handler);
  }

  /**
   * 发布函数
   * @param key 订阅事件Key值
   * @param params 要发步到订阅事件中的参数
   */
  emit(key: string, params?: any) {
    if (this.eventMap[key]) {
      this.eventMap[key].forEach((handler) => {
        handler(params);
      });
    }
  }

  /**
   * 销毁函数
   * @param key
   * @param handler
   */
  remove(key: string, handler: (params: any) => any) {
    if (this.eventMap[key]) {
      // 如果该队列存在，先找到要删除函数的位置，然后剔除
      const res = this.eventMap[key].indexOf(handler);
      res !== -1 && this.eventMap[key].splice(res, 1);
    }
  }
}

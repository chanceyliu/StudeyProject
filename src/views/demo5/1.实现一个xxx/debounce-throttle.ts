/**
 * 防抖（事件触发后多少秒才执行，期间被重复触发则重新计时）
 * 案例：input框中输入字符后调用接口查询，不需要每一次变化都请求
 */
export const debounce = (func: any, time: number) => {
  let timeOut: any;
  return () => {
    if (timeOut) {
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(() => {
      func();
    }, time);
  };
};

/**
 * 节流（在一段时间内间隔固定时间持续触发方法）
 * 案例：拖拽视窗大小时，不需要每毫秒都执行
 */
export const throttle = (func: any, time: number) => {
  let timeOut = true;
  return () => {
    // 间隔时间没到之前被触发不执行
    if (!timeOut) return;
    timeOut = false;
    setTimeout(() => {
      func();
      timeOut = true;
    }, time);
  };
};

function singleNumber(nums: number[]): number[] {
  const obj = new Map()
  const res: number[] = []
  for (const i of nums) {
    obj.set(i, (obj.get(i) || 0) + 1)
  }

  for (const [key, value] of obj.entries()) {
    if (value === 1) {
      res.push(key)
    }
  }

  return res
};
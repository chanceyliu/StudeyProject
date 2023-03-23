/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let l = 0,
      r = n;
    while (l <= r) {
      let m = Math.floor((l + r) / 2);
      if (isBadVersion(m) && !isBadVersion(m - 1)) return m;
      else isBadVersion(m) ? (r = m - 1) : (l = m + 1);
    }
    return -1;
  };
};

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  if (intervals.length == 0) {
    return intervals;
  }
  intervals.sort((a, b) => {
    if (a.start !== b.start) {
      return a.start - b.start;
    } else {
      return a.end - b.end;
    }
  });
  let prev = intervals[0];
  let result = [prev];
  for (let curr of intervals) {
    if (curr.start <= prev.end) {
      prev.end = Math.max(prev.end, curr.end);
    } else {
      result.push(curr);
      prev = curr;
    }
  }
  return result;
};

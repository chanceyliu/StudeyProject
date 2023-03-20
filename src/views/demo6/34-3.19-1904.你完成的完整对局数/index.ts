function toMinutes(time: string) {
  let [h, m] = time.split(":");
  return Number(h) * 60 + Number(m);
}

function numberOfRounds(loginTime: string, logoutTime: string): number {
  let m1 = toMinutes(loginTime),
    m2 = toMinutes(logoutTime);

  if (m1 > m2) {
    m2 += 24 * 60;
  }

  let ans = Math.floor(m2 / 15) - Math.ceil(m1 / 15);
  return ans < 0 ? 0 : ans;
}

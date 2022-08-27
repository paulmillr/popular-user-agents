const updatedAt = new Date('2022-08-28 00:00:00');
const maxAcceptableAge = 1000 * 60 * 60 * 24 * 120; // 120 days
export { updatedAt };
// Make sure to update all locations.
// Chrome @ Windows NT 10 has just 1 version location: Chrome/104
// Firefox has 2: rv:103.0, Firefox/103.0
// iOS has 2: iPhone OS 15_6, Version/15.6
const agents = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:103.0) Gecko/20100101 Firefox/103.0',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.5 Mobile/15E148 Safari/604.1',
];
export function randomList(ignoreAge = false) {
  const diff = +new Date() - +updatedAt;
  if (!ignoreAge && diff > maxAcceptableAge)
    throw new Error('The user agent list is too old; update the package');
  return agents
    .slice()
    .map((value) => ({ value, sorter: Math.random() }))
    .sort((a, b) => a.sorter - b.sorter)
    .map(({ value }) => value);
}
export function random() {
  return randomList()[0];
}

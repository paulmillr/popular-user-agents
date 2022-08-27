# popular-user-agents

Regularly updated list of popular user agents aka browser versions.

Package version itself corresponds to update date: 0.1.2207 = 2022.07.

## Usage

> npm i popular-user-agents

There are two methods: `randomList` and `random`.

- `randomList` would return the popular user agent list, shuffled
- `random` would return first element from the list

The package checks if it's older than 4 months by diffing current date to package's variable.
If it's too old, an error would be thrown when either of the methods is called.

```ts
import { random, randomList } from 'popular-user-agents';
console.log(random());
// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36
```

## License

MIT License (c) Paul Miller (https://paulmillr.com)
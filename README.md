## Reproduction for a Ganache shutdown issue

When using `Ganache.provider` with `instamine: eager` the process does not exit
after `await provider.disconnect()` is called! However *not* invoking
`disconnect allows the process to exit!

- node: v16.15.1
- platform: OS X 12.3.1 m1, Ubuntu 20.04.4 LTS

## try it

- clone this repo
- npm ci
- node src
  ```console
  $ node src
  provider created
  new contract deployed: 0x8CdaF0CD259887258Bc13a92C0a6dA92698644C0
  Read value from deployed contract: 1
  DISCONNECT Provider ...
  ...returned from `await provider.disconnect()`
  Does this process exit?
  ```

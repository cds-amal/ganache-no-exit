// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SimpleStorage {
  uint public data;

  constructor() {
    data = 1;
  }

  function setData(uint value) public {
    data = value;
  }
}

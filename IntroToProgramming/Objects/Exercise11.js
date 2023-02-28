let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

//write code to replace the value 6 with 606


obj.bar[3].xyz = 606
//this also works:
//obj["bar"][3]["xyz"] = 606;
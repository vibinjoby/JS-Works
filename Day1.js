function run() {
  let count = 0;

  [...Array(1000).keys()].forEach(i => {
    if (i % 11 === 0 && i > 17) {
      count += i;
    }
  });
  console.log(count);
}

run();

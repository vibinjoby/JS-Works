function run() {
  let count = 0;

  for (i = 1000; i > 0; i--) {
    if (i % 11 === 0 && i > 17) {
      count += i;
    }
  }
  console.log(count);
}

run();

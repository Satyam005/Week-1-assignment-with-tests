let count = 1;

const counter = () => {
  console.clear();
  console.log(count);
  count += 1;
};

setInterval(counter, 1000);

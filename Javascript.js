const a = 1;
const b = 2;

const runFunc = () => {
    console.log(this);
    return this;
}

runFunc()

console.log("Test code");

console.log("Hello");

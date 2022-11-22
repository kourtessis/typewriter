const sentence = "hello there from lighthouse labs\n";
let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
  process.stdout.write(char)}, delay);
  delay += 50
}

//each letter delay its appearance by 50ms


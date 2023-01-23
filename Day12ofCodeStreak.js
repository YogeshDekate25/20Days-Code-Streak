x = readline().split("");
c = "";
for (i = 0; i < x.length; i += 2) {
  if (x[i] === "-" && x[i + 1] === "-") {
    c += 2;
  } else if (x[i] === "-" && x[i + 1] === ".") {
    c += 1;
  } else {
    c += 0;
    i--;
  }
}
print(c);
var ones = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
var tens = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
var teens = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
var magnitude = ["hundred", "thousand", "million", "billion"];

function BIField(entry: Number): String {
  if (entry >= 1000000000) {
    return (
      BIField(Math.floor(Number(entry) / 1000000000)) +
      " " +
      magnitude[3] +
      " " +
      MIField(Number(entry) % 1000000000)
    );
  } else {
    return MIField(entry);
  }
}

function MIField(entry: Number): String {
  if (entry >= 1000000) {
    return (
      MIField(Math.floor(Number(entry) / 1000000)) +
      " " +
      magnitude[2] +
      " " +
      THField(Number(entry) % 1000000)
    );
  } else {
    return THField(entry);
  }
}

function THField(entry: Number): String {
  if (entry >= 1000) {
    return (
      HUField(Math.floor(Number(entry) / 1000)) +
      " " +
      magnitude[1] +
      " " +
      HUField(Number(entry) % 1000)
    );
  } else {
    return HUField(entry);
  }
}

function HUField(entry: Number): String {
  if (entry > 99) {
    return (
      ones[Math.floor(Number(entry) / 100)] +
      " " +
      magnitude[0] +
      " " +
      TEField(Number(entry) % 100)
    );
  } else {
    return TEField(entry);
  }
}

function TEField(entry: Number): String {
  if (entry < 10) return ones[Number(entry)];
  else if (entry >= 10 && entry < 20) return teens[Number(entry) - 10];
  else {
    return (
      tens[Math.floor(Number(entry) / 10)] + " " + ones[Number(entry) % 10]
    );
  }
}

export default function translateNumber(entry: Number): String {
  if (entry === 0) return "zero";
  else return BIField(entry);
}

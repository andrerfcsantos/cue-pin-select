const ALPHABET = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

function normalizedElem(col, idx) {
  let len = col.length;
  return col[normalizedIndex(len, idx)];
}

function normalizedIndex(len, idx) {
  let tmp = idx % len;
  if (tmp > 0) {
    return tmp;
  } else if (tmp < 0) {
    return len + tmp;
  }
  return 0;
}

function removePhraseWhitespace(phrase) {
  return phrase.replace(/\s/g, "");
}

function isUpperCase(chars) {
  return chars === chars.toUpperCase();
}

export default function getPassword(phrase, pin, cue) {
  phrase = removePhraseWhitespace(phrase);
  let len = phrase.length;

  let letterSet = new Set(phrase);

  pin = pin.split("").map(Number);

  let index = 0;
  let s = [];

  for (let i = 0; i < 4; i++) {
    let cue_letter = cue[i].toLowerCase();

    while (!letterSet.has(cue_letter)) {
      let old_index = ALPHABET.findIndex(l => l === cue_letter);
      cue_letter = normalizedElem(ALPHABET, old_index + 1);
    }

    let foundOcurrence = false;
    let ocurrenceIdx = index;
    while (!foundOcurrence) {
      if (phrase[ocurrenceIdx] === cue_letter) {
        foundOcurrence = true;
      } else {
        ocurrenceIdx = (ocurrenceIdx + 1) % len;
      }
    }

    let offset = pin[i];
    let shard_end = ocurrenceIdx + offset + 3;
    let shard = [
      normalizedElem(phrase, shard_end - 2),
      normalizedElem(phrase, shard_end - 1),
      normalizedElem(phrase, shard_end)
    ];

    if (isUpperCase(cue[i])) {
      shard.forEach(l => l.toUpperCase());
    }

    s.push(...shard);

    index = normalizedIndex(len, shard_end);
  }
  return s.join("");
}

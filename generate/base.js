const pun_to_eng_letters = {
  ੳ: 'a', ਅ: 'A', ੲ: 'e', ਸ: 's', ਹ: 'h',
  ਕ: 'k', ਖ: 'K', ਗ: 'g', ਘ: 'G', ਙ: '|',
  ਚ: 'c', ਛ: 'C', ਜ: 'j', ਝ: 'J', ਞ: '\\',
  ਟ: 't', ਠ: 'T', ਡ: 'f', ਢ: 'F', ਣ: 'x',
  ਤ: 'q', ਥ: 'Q', ਦ: 'd', ਧ: 'D', ਨ: 'n',
  ਪ: 'p', ਫ: 'P', ਬ: 'b', ਭ: 'B', ਮ: 'm',
  ਯ: 'X', ਰ: 'r', ਲ: 'l', ਵ: 'v', ੜ: 'V',
  ਸ਼: 'S', ਖ਼: '^', ਗ਼: 'Z', ਜ਼: 'z', ਫ਼: '&', ਲ਼: 'L',
};

const muharni_matars = {
  'ਾ': 'w',
  'ਿ': 'i',
  'ੀ': 'I',
  'ੁ': 'u',
  'ੂ': 'U',
  'ੇ': 'y',
  'ੈ': 'Y',
  'ੋ': 'o',
  'ੌ': 'O',
  'ੰ': 'M',
  'ਾਂ': 'W',
}

const other_matars = {
  'ੋੁ': 'uo',
  '੍ਵ': 'Í',
  '੍ਚ': 'ç',
  '੍ਟ': '†',
  '੍ਤ': 'œ',
  '੍ਨ': '˜',
  'ੵ': '´',
  '਼': 'æ',
  'ਂ': 'N',
  'ੱ': '`',
  '੍ਯ': 'Î',
  '੍ਹ': 'H',
  '੍ਰ': 'R',
  'ਃ': 'Ú',
  'ੑ': '@',
  '❁': '‚',
  '੶': '•',
}

//-------------------------------------

const pun_to_weird_letters = {
  ੳ: '괏', ਅ: '광', ੲ: '괒', ਸ: '괓', ਹ: '괕',
  ਕ: '괖', ਖ: '괗', ਗ: '괙', ਘ: '괛',
  ਚ: '괝', ਛ: '괞', ਜ: '괿', ਝ: '괡',
  ਟ: '괣', ਠ: '괤', ਡ: '괥', ਢ: '괦', ਣ: '괧',
  ਤ: '괨', ਥ: '괩', ਦ: '괪', ਧ: '괫', ਨ: '괬',
  ਪ: '괮', ਫ: '괯', ਬ: '괱', ਭ: '괲', ਮ: '괳',
  ਯ: '괴', ਰ: '괶', ਲ: '괷', ਵ: '괹', ੜ: '괺',
  ਸ਼: '괔',
}

const pun_to_weird_matars = {
  'ਾ': '괻',
  'ਿ': '괿',
  'ੀ': '굀',
  'ੁ': '굁',
  'ੂ': '굂',
  'ੇ': '굃',
  'ੈ': '굄',
  'ੋ': '굅',
  'ੌ': '굆',
  'ੰ': '굌',
  'ਾਂ': '괼',
  'ਂ': 'x',
  // '੍ਯ': '괵', // 1/2
}

function print_muharni() {
  for (let matra in muharni_matars) {
    for (let letter in pun_to_eng_letters) {
      // console.log(letter + matra + ' ' + pun_to_eng_letters[letter] + muharni_matars[matra])
      process.stdout.write(letter + matra + "  ")
    }
    console.log()
  }
}

function make_muharni(letters, matars) {
  const obj = {}

  for (let letter in letters)
    obj[letter] = letters[letter]

  for (let matra in matars)
    obj[matra] = matars[matra]

  for (let letter in letters) {
    for (let matra in matars) {
      obj[letter + matra] = letters[letter] + matars[matra]
    }
  }
  console.log(obj)
}

// make_muharni(pun_to_eng_letters,muharni_matars)
make_muharni(pun_to_weird_letters, pun_to_weird_matars)

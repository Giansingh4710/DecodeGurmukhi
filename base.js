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

function print_muharni(){
  for (let matara in muharni_matars) {
    for (let letter in pun_to_eng_letters) {
      // console.log(letter + matara + ' ' + pun_to_eng_letters[letter] + muharni_matars[matara])
      process.stdout.write(letter + matara +"  ")
    }
    console.log()
  }
}

function  make_muharni(){
  const obj = {}
  for (let letter in pun_to_eng_letters) {
    for (let matara in muharni_matars) {
      obj[letter + matara] = pun_to_eng_letters[letter] + muharni_matars[matara]
    }
  }
  console.log(obj)
}
make_muharni()

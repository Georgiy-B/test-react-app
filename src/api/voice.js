const token = 'f2f27379199f4b3780133b519f8c0426';
const url = `http://api.voicerss.org/?key=${token}`;

export function getAudioUrlFotText(txt, lang='en-us') {
  return `${url}&hl=${lang}&src=${txt}`;
}
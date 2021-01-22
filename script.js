const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']
const DRUM_KEYS = ['0','1','2','3','5','6']
const GUITAR_NOTES = ['q','w','e','r','a','s','d','f','t','y','u','i','g','h','j','k','l','p','[',']']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')
const drums = document.querySelectorAll('.drum')
const guitar_notes = document.querySelectorAll('.guitar-note')
console.log(guitar_notes)
keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)
  const drumKeyIndex = DRUM_KEYS.indexOf(key)
  const guitarNoteIndex = GUITAR_NOTES.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
  if (drumKeyIndex > -1) playDrum(drums[drumKeyIndex])
  if (guitarNoteIndex > -1) guitar_note(guitar_notes[guitarNoteIndex])
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  setTimeout(() => {
    key.classList.remove('active')

  }, 500);

}

drums.forEach(drum=>{
  drum.addEventListener("click",()=>playDrum(drum))
})

function playDrum(drum){
  const drumAudio = document.getElementById(drum.dataset.note+"_audio")
  drumAudio.currentTime=0
  drumAudio.play()
  $(drum).children().css('display', 'inherit');

  setTimeout(()=>{
    $(drum).children().css('display', 'none');
  },200)

}

guitar_notes.forEach(note => {
    note.addEventListener('click',()=> guitar_note(note))
});

function guitar_note(g_note){

  const note_audio = document.getElementById(g_note.dataset.note)
  note_audio.currentTime=0
  note_audio.play()
}


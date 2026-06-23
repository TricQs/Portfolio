const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let a = 0
let b = 0
const MAX = 25
let deuce = false
let selesai = false

function tampil() {
  console.log(`\n  ╔══════════════════╗`)
  console.log(`  ║  TIM A  ║  TIM B  ║`)
  console.log(`  ║    ${String(a).padStart(2, ' ')}   ║    ${String(b).padStart(2, ' ')}   ║`)
  console.log(`  ╚══════════════════╝`)
}

function cekSelesai() {
  if (!deuce) {
    if (a >= MAX && a - b >= 2) return 'A'
    if (b >= MAX && b - a >= 2) return 'B'
    if (a >= MAX && b >= MAX) {
      deuce = true
      return null
    }
    if (a === MAX - 1 && b === MAX - 1) {
      deuce = true
      return null
    }
  } else {
    if (a - b >= 2) return 'A'
    if (b - a >= 2) return 'B'
  }
  return null
}

function main() {
  console.log('\n  🏐 SKOR BOLA VOLI 🏐')
  console.log('  Tekan A untuk poin Tim A')
  console.log('  Tekan B untuk poin Tim B')
  console.log('  Tekan Q untuk keluar\n')
  tampil()
  proses()
}

function proses() {
  if (selesai) {
    rl.close()
    return
  }

  rl.question('  >> ', (input) => {
    const key = input.trim().toUpperCase()

    if (key === 'Q') {
      console.log('  Sampai jumpa!')
      rl.close()
      return
    }

    if (key === 'A') {
      a++
      tampil()
      const pemenang = cekSelesai()
      if (pemenang) {
        selesai = true
        console.log(`\n  🎉  SELAMAT! Tim ${pemenang} MENANG!  🎉`)
        console.log(`     Skor akhir: ${a} - ${b}\n`)
        rl.close()
        return
      }
      if (deuce) console.log('  ⚡ DEUCE!')
      proses()
    } else if (key === 'B') {
      b++
      tampil()
      const pemenang = cekSelesai()
      if (pemenang) {
        selesai = true
        console.log(`\n  🎉  SELAMAT! Tim ${pemenang} MENANG!  🎉`)
        console.log(`     Skor akhir: ${a} - ${b}\n`)
        rl.close()
        return
      }
      if (deuce) console.log('  ⚡ DEUCE!')
      proses()
    } else {
      console.log('  ❌  Hanya tekan A atau B')
      proses()
    }
  })
}

main()

import dayjs from 'dayjs'

const dayNow = dayjs().format('DD/MM/YYYY')
console.log(`Dia de hoy: ${dayNow}`)

const timeNow = dayjs().format('hh:mm')
console.log(`Hora actual: ${timeNow}`)
export const WHATSAPP_NUMBER = '5598983393583'
export const COURSE_NAME = 'Informática Avançada e Automação Digital'

export function sendWhatsAppMessage(message: string = 'Quero comecar o curso de ' + COURSE_NAME) {
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
  window.open(whatsappUrl, '_blank')
}

export function sendWhatsAppDoubt() {
  const doubtMessage = 'Tenho dúvidas sobre o curso de ' + COURSE_NAME
  sendWhatsAppMessage(doubtMessage)
}
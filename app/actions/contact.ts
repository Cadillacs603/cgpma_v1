"use server"

interface ContactFormState {
  message: string
  success: boolean
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validación básica
    if (!name || !email || !subject || !message) {
      return {
        message: "Todos los campos son obligatorios",
        success: false,
      }
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        message: "Por favor ingresa un email válido",
        success: false,
      }
    }

    // Simular envío de email (aquí integrarías con tu servicio de email)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // En un caso real, aquí enviarías el email usando un servicio como:
    // - Resend
    // - SendGrid
    // - Nodemailer
    // - etc.

    console.log("Nuevo mensaje de contacto:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    return {
      message: "¡Mensaje enviado exitosamente! Te contactaremos pronto.",
      success: true,
    }
  } catch (error) {
    console.error("Error al enviar mensaje:", error)
    return {
      message: "Error al enviar el mensaje. Por favor intenta nuevamente.",
      success: false,
    }
  }
}

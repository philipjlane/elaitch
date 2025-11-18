import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { name, email, projectType, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: { error: 'Missing required fields' }
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        body: { error: 'Invalid email format' }
      }
    }

    // Initialize Resend with API key from environment
    const resendApiKey = useRuntimeConfig().resendApiKey

    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not configured')
      return {
        statusCode: 500,
        body: { error: 'Email service is not configured' }
      }
    }

    const resend = new Resend(resendApiKey)

    // Send email
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // You'll need to update this with your verified domain
      to: ['hello@elaitch.dev'],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">This email was sent from the contact form on elaitch.dev</p>
      `,
    })

    return {
      statusCode: 200,
      body: { success: true, data }
    }
  } catch (error: any) {
    console.error('Error sending email:', error)
    return {
      statusCode: 500,
      body: { error: 'Failed to send email', details: error.message }
    }
  }
})

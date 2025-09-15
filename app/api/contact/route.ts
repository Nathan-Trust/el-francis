import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { ContactEmail } from "@/components/emails/contact-email"

// const resend = new Resend(process.env.RESEND_API_KEY ?? "")
const resend = new Resend("")

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, childAge, message } = body

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Name, email, and phone are required" }, { status: 400 })
    }

    // Send email to school
    const { data, error } = await resend.emails.send({
      from: "Elfrancis School <noreply@elfrancisschool.com>",
      to: ["info@elfrancisschool.com"],
      subject: `New Enrollment Inquiry from ${name}`,
      react: ContactEmail({
        name,
        email,
        phone,
        childAge,
        message,
      }),
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    // Send confirmation email to parent
    await resend.emails.send({
      from: "Elfrancis School <noreply@elfrancisschool.com>",
      to: [email],
      subject: "Thank you for your interest in Elfrancis International School",
      react: ContactEmail({
        name,
        email,
        phone,
        childAge,
        message,
        isConfirmation: true,
      }),
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

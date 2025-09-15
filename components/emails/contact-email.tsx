import { Body, Container, Head, Heading, Html, Preview, Section, Text, Hr } from "@react-email/components"

interface ContactEmailProps {
  name: string
  email: string
  phone: string
  childAge?: string
  message?: string
  isConfirmation?: boolean
}

export function ContactEmail({ name, email, phone, childAge, message, isConfirmation = false }: ContactEmailProps) {
  if (isConfirmation) {
    return (
      <Html>
        <Head />
        <Preview>Thank you for your interest in Elfrancis International School</Preview>
        <Body style={main}>
          <Container style={container}>
            <Heading style={h1}>Thank You for Your Interest!</Heading>
            <Text style={text}>Dear {name},</Text>
            <Text style={text}>
              Thank you for reaching out to Elfrancis International School. We have received your inquiry and appreciate
              your interest in providing quality education for your child.
            </Text>
            <Text style={text}>
              Our admissions team will review your information and get back to you within 24 hours. In the meantime,
              feel free to call us at +234 815 332 2520 or chat with us on WhatsApp if you have any urgent questions.
            </Text>
            <Text style={text}>We look forward to welcoming your family to the Elfrancis community!</Text>
            <Hr style={hr} />
            <Text style={footer}>
              Elfrancis International School
              <br />
              Excellence Through Knowledge
              <br />
              Lagos, Nigeria
              <br />
              +234 815 332 2520
            </Text>
          </Container>
        </Body>
      </Html>
    )
  }

  return (
    <Html>
      <Head />
      <Preview>New enrollment inquiry from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Enrollment Inquiry</Heading>
          <Text style={text}>You have received a new enrollment inquiry through the school website.</Text>
          <Hr style={hr} />
          <Section>
            <Text style={label}>Parent/Guardian Name:</Text>
            <Text style={value}>{name}</Text>

            <Text style={label}>Email:</Text>
            <Text style={value}>{email}</Text>

            <Text style={label}>Phone:</Text>
            <Text style={value}>{phone}</Text>

            {childAge && (
              <>
                <Text style={label}>Child's Age:</Text>
                <Text style={value}>{childAge}</Text>
              </>
            )}

            {message && (
              <>
                <Text style={label}>Message:</Text>
                <Text style={value}>{message}</Text>
              </>
            )}
          </Section>
          <Hr style={hr} />
          <Text style={footer}>Please follow up with this inquiry within 24 hours.</Text>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "580px",
}

const h1 = {
  color: "#1e40af",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
}

const text = {
  color: "#374151",
  fontSize: "16px",
  lineHeight: "26px",
}

const label = {
  color: "#1e40af",
  fontSize: "14px",
  fontWeight: "bold",
  margin: "16px 0 4px 0",
}

const value = {
  color: "#374151",
  fontSize: "16px",
  margin: "0 0 16px 0",
}

const hr = {
  borderColor: "#e5e7eb",
  margin: "20px 0",
}

const footer = {
  color: "#6b7280",
  fontSize: "14px",
  lineHeight: "24px",
}

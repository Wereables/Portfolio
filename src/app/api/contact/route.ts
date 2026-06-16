import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    // In production, you would:
    // 1. Validate the data
    // 2. Send an email (using a service like SendGrid, Mailgun, or Nodemailer)
    // 3. Save to a database (optional)
    // 4. Return a success response
    
    // For now, we'll just log and return success
    console.log("Contact form submission:", formData);
    
    // Simulate sending an email
    // In production, replace this with actual email sending logic
    const emailResponse = await fetch("https://formspree.io/f/mzbnwjgo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    
    if (emailResponse.ok) {
      return NextResponse.json(
        { message: "Message sent successfully!" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Failed to send message." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { message: "An error occurred. Please try again." },
      { status: 500 }
    );
  }
}

// Handle other methods
export async function GET() {
  return NextResponse.json(
    { message: "Method not allowed" },
    { status: 405 }
  );
}

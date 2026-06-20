import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Input validation
    if (!name || !email || !message) {
      return Response.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailTo = process.env.EMAIL_TO || 'ferdinandarya80@gmail.com';

    // Verify configuration
    if (!emailUser || !emailPass || emailPass === 'your_gmail_app_password_here') {
      console.error('Email credentials not properly configured in environment variables.');
      return Response.json(
        { error: 'Mail server configuration missing. Please check server logs.' },
        { status: 500 }
      );
    }

    // Configure transporter (Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Premium Email HTML Template
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Portfolio Message</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #0b0b0c;
            color: #e4e4e7;
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
          }
          .container {
            max-width: 600px;
            margin: 40px auto;
            background: #121214;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          }
          .header {
            background: linear-gradient(135deg, #1f1f23, #121214);
            padding: 30px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            text-align: center;
          }
          .header h2 {
            margin: 0;
            font-size: 22px;
            font-weight: 700;
            letter-spacing: -0.02em;
            color: #ffffff;
          }
          .content {
            padding: 40px 30px;
          }
          .field {
            margin-bottom: 28px;
          }
          .label {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            color: #71717a;
            margin-bottom: 8px;
            font-weight: 600;
          }
          .value {
            font-size: 15px;
            color: #f4f4f5;
            line-height: 1.6;
          }
          .message-box {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            padding: 20px;
            border-radius: 12px;
            white-space: pre-wrap;
            color: #e4e4e7;
          }
          .footer {
            background: #0e0e10;
            padding: 24px;
            text-align: center;
            font-size: 11px;
            color: #52525b;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            letter-spacing: 0.05em;
          }
          a {
            color: #ffffff;
            text-decoration: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
            transition: border-color 0.2s;
          }
          a:hover {
            border-bottom-color: #ffffff;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Message Received</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Sender Name</div>
              <div class="value" style="font-weight: 500;">${name}</div>
            </div>
            <div class="field">
              <div class="label">Email Address</div>
              <div class="value">
                <a href="mailto:${email}">${email}</a>
              </div>
            </div>
            <div class="field">
              <div class="label">Message</div>
              <div class="value message-box">${message}</div>
            </div>
          </div>
          <div class="footer">
            Sent from your portfolio contact form.
          </div>
        </div>
      </body>
      </html>
    `;

    // Mail options
    const mailOptions = {
      from: `"${name}" <${emailUser}>`, // Must match authenticated email user in Gmail
      to: emailTo,
      replyTo: email, // Extremely important so they can click "Reply" to write back to the sender
      subject: `Portfolio Contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: htmlTemplate,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return Response.json({ success: true });
  } catch (error) {
    console.error('Error sending email via nodemailer:', error);
    return Response.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}

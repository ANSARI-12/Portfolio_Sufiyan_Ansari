# TODO: Contact Form Email Integration

## Setup EmailJS Account and Configuration
- [ ] Sign up for EmailJS account at https://www.emailjs.com/
- [ ] Create a new email service (Gmail or other provider)
- [ ] Create an email template with the following variables:
  - `{{from_name}}` - Sender's name
  - `{{from_email}}` - Sender's email
  - `{{message}}` - Message content
  - `{{to_email}}` - Your email (ansarishufiyan@gmail.com)
- [ ] Get your Service ID, Template ID, and Public Key
- [ ] Replace the placeholder values in `src/components/Contact.tsx`:
  - Service ID: 'service_123456789'
  - Template ID: 'template_123456789'
  - Public Key: 'your_public_key'

## Step-by-Step EmailJS Template Creation Instructions

### 1. Access EmailJS Dashboard
- Go to https://dashboard.emailjs.com/
- Sign in to your account

### 2. Create Email Service (Already Done)
- ✅ You already have Service ID: `service_x7kzcyp`
- ✅ Connected to Gmail: ansarishufiyan@gmail.com

### 3. Create Email Template
- Click on "Email Templates" in the left sidebar
- Click "Create New Template"
- Set up the template with these EXACT details:

**Template Settings:**
- Template Name: `Portfolio Contact Form`

**To Email:**
- `ansarishufiyan@gmail.com`

**From Email:**
- `noreply@emailjs.com` (use this default)

**From Name:**
- `Portfolio Contact Form`

**Subject:**
- `New Contact Form Message from {{from_name}}`

**HTML Content:** (Copy and paste this exactly)
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Contact Form Message</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2563eb;">New Contact Form Message</h2>

        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>From:</strong> {{from_name}}</p>
            <p><strong>Email:</strong> {{from_email}}</p>
        </div>

        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3>Message:</h3>
            <p style="white-space: pre-wrap;">{{message}}</p>
        </div>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">

        <p style="color: #6b7280; font-size: 14px;">
            This message was sent from your portfolio contact form.
        </p>
    </div>
</body>
</html>
```

- Click "Save" to create the template
- After saving, you'll see the Template ID in the template list (it will look like `template_abc123`)

### 4. Get Your Credentials (Partially Done)
- ✅ You already have Public Key: `gtr6xRE1uxOxgo78w`
- 🔄 You need to get the Template ID from step 3 above

### 5. Update Your Code (COMPLETED)
- ✅ Code has been updated with all credentials
- ✅ Contact form is now ready to send emails

**Current Status:**
- Service ID: ✅ `service_mrw8z2d`
- Public Key: ✅ `gtr6xRE1uxOxgo78w`
- Template ID: ✅ `template_6o6c55x`
- Code Update: ✅ Completed

## Testing
- [ ] Test the contact form submission
- [ ] Verify emails are received at ansarishufiyan@gmail.com
- [ ] Check error handling for failed submissions

## Notes
- EmailJS provides a free tier with 200 emails per month
- The form will now send actual emails instead of just showing a success message
- Make sure to configure your email service properly in EmailJS dashboard

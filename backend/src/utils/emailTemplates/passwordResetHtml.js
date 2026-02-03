const passwordResetOtpTemplate = (otp) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Krave Password Reset</title>
</head>

<body style="margin:0; padding:0; background-color:#F9F9F9; font-family:Arial, Helvetica, sans-serif;">

  <!-- Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F9F9F9; padding:24px 0;">
    <tr>
      <td align="center">

        <!-- Main Container -->
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:480px; background-color:#ffffff; border-radius:10px; overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background-color:#00B894; padding:20px; text-align:center;">
              <h1 style="margin:0; font-size:26px; color:#ffffff; letter-spacing:1px;">
                Krave 🍕
              </h1>
              <p style="margin:6px 0 0; font-size:14px; color:#E8FFF7;">
                Password Reset Request
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:24px; color:#2C3E50;">

              <h2 style="margin-top:0; font-size:20px;">
                Reset your password
              </h2>

              <p style="font-size:15px; line-height:1.6;">
                We received a request to reset your <strong>Krave</strong> account password.
                Use the OTP below to continue.
              </p>

              <!-- OTP Box -->
              <div style="margin:24px 0; text-align:center;">
                <span style="
                  display:inline-block;
                  background-color:#F0F8F5;
                  color:#00B894;
                  font-size:28px;
                  font-weight:bold;
                  letter-spacing:6px;
                  padding:14px 24px;
                  border-radius:8px;
                  border:1px dashed #55E6C1;
                ">
                  ${otp}
                </span>
              </div>

              <p style="font-size:14px; line-height:1.6;">
                This OTP is valid for <strong>10 minutes</strong>.  
                Do not share this code with anyone.
              </p>

              <!-- Security Notice -->
              <div style="
                margin-top:16px;
                padding:14px;
                background-color:#FFF5F5;
                border-left:4px solid #FF6B6B;
                font-size:13px;
                line-height:1.5;
              ">
                <strong>Security Notice:</strong><br />
                If you did not request a password reset, please ignore this email or contact support immediately.
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#F0F8F5; padding:16px; text-align:center; font-size:12px; color:#2C3E50;">
              © 2026 <strong>Krave</strong>. All rights reserved.<br />
              Hungry? We’ve got you covered 🍟
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`


export default passwordResetOtpTemplate;
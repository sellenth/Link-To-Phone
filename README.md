# Link2Phone
A chrome extension to text links to any cellphone number

The current implementation uses EmailJS as an intermediary before Mailgun. It is slightly dangerous because the user_id is used in a plaintext script so an attacker could use my email to email anyone. It is also not going to work because the EmailJS server is escaping special characters before its handoff.

One solution is to interface directly with the Mailgun REST server (I wish I would have seen this option before trying EmailJS). This option won't be ideal either because the private API key needs to be present in the request and can't be obfuscated in any way.

The best solution will be to create a custom backend which is a pain but attack prevention could be implemented.

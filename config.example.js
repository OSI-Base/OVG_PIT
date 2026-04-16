/*
  SETUP — copy this file to config.js and fill in your own values.

  STEP 1 — JSONBin Master Key
    • Log in at https://jsonbin.io → avatar → "API Keys"
    • Copy the Master Key (starts with $2b$...)

  STEP 2 — Bin ID
    • Open your bin on jsonbin.io
    • The ID is the last segment of the URL:
        https://api.jsonbin.io/v3/b/ ► COPY_THIS_PART ◄

  STEP 3 — Admin PIN
    • Choose a PIN of 4 or more digits (more digits = harder to guess).
    • The PIN is still stored in this file; keep the file private.
*/
const CONFIG = {
  API_KEY:   'YOUR_MASTER_KEY_HERE',   // e.g. $2b$10$...
  BIN_ID:    'YOUR_BIN_ID_HERE',       // e.g. 6abc1234def56789
  ADMIN_PIN: '0000',                   // change to your desired PIN
};

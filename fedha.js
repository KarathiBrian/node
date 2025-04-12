const whois = require('whois');

const domain = "fedhalandventures.co.ke"; // Replace with your domain

whois.lookup(domain, (err, data) => {
  if (err) {
    console.error("Error during WHOIS lookup:", err);
    return;
  }

  console.log("\n=== WHOIS Data ===\n");
  console.log(data);

  // Try to extract registrar info
  const registrarMatch = data.match(/Registrar:\s*(.+)/i);
  if (registrarMatch) {
    console.log(`\n📌 Domain Registrar: ${registrarMatch[1]}`);
  } else {
    console.log("\n⚠️ Could not find registrar info clearly. See raw WHOIS data above.");
  }
});


export async function log(stack, level, package_message) {
  try {
    const res = await fetch("http://20.204.56.144/evaluation-service/logs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stack, level, ...package_message })
    });
    const result = await res.json();
    console.log("Log sent:", result);
  } catch (err) {
    console.error("Logging error:", err);
  }
}

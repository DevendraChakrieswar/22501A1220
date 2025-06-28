const axios = require("axios");

const API_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJkZXZlbmRyYWNoaXRyb2p1NTU1QGdtYWlsLmNvbSIsImV4cCI6MTc1MTA5MDk3OSwiaWF0IjoxNzUxMDkwMDc5LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiOWQwNDI5MzItYmJiYy00ZjM4LWEzZmItOGU4MzBjZTZkNmY5IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiY2hpdHJvanUgZGV2ZW5kcmEgY2hha3JpZXN3YXIiLCJzdWIiOiI1ZTBiZGRlMS0zYjRkLTQ3OTItYWVlNy0xZDY3NWY0YTA3MjMifSwiZW1haWwiOiJkZXZlbmRyYWNoaXRyb2p1NTU1QGdtYWlsLmNvbSIsIm5hbWUiOiJjaGl0cm9qdSBkZXZlbmRyYSBjaGFrcmllc3dhciIsInJvbGxObyI6IjIyNTAxYTEyMjAiLCJhY2Nlc3NDb2RlIjoiZUhXTnp0IiwiY2xpZW50SUQiOiI1ZTBiZGRlMS0zYjRkLTQ3OTItYWVlNy0xZDY3NWY0YTA3MjMiLCJjbGllbnRTZWNyZXQiOiJ5empzQ0Z0cENmZUpna3B1In0.ImdGxC284BG_F92Q9m7Mq-Z5XJVBI1WkjspeD46GKoI"; // paste full token here

async function test() {
  try {
    const response = await axios.post(
      "http://20.244.56.144/evaluation-service/logs",
      {
        stack: "backend",
        level: "error",
        package: "handler",
        message: "testing from axios"
      },
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );
    console.log("Success:", response.data);
  } catch (err) {
    if (err.response) {
      console.error("Error:", err.response.status, err.response.data);
    } else {
      console.error("Axios Error:", err.message);
    }
  }
}

test();

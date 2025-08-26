export async function createUser(email: string, password: string, name: string) {
  const res = await fetch("http://localhost:8080/accounts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  });
  if (!res.ok) {
    console.error("Failed to create user");
    return await res.json();
  }
}

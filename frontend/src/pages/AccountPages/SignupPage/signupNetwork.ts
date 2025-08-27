export async function createUser(
  email: string,
  password: string,
  firstName: string,
  lastName: string,
) {
  const res = await fetch("http://localhost:8080/accounts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, firstName, lastName }),
  });
  if (!res.ok) {
    console.error("Failed to create user");
    return await res.json();
  }
}

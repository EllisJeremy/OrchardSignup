// if ur looking for the login network function, its in useAuthStore.ts

export async function createUser(
  email: string,
  password: string,
  firstName: string,
  lastName: string,
) {
  const res = await fetch("http://localhost:8080/accounts/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, firstName, lastName }),
  });
  if (!res.ok) {
    console.error("Failed to create user");
  }
  return await res.json();
}

export async function fetchAccounts() {
  const res = await fetch("http://localhost:8080/accounts", {
    method: "GET",
    credentials: "include",
  });

  // dont give 403 here cuz otherwise it shows up for every user
  if (!res.ok) return;
  return await res.json();
}

export default function CreateUser(name = '', email: String, password: String) {
  const user = {
    name,
    email,
    password,
  };

  return user;
}
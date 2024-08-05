export const base_domain = () => {
  console.log(import.meta.env.MODE);
  if (import.meta.env.MODE == "production") {
    return "https://";
  } else if (import.meta.env.MODE == "development") {
    return "http://localhost:5173/";
  } else {
    return "http://localhost:5173/";
  }
};

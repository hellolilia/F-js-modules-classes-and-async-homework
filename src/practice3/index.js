export const getPoetry = () => {
  return fetch("https://v1.jinrishici.com/all.json", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      const result = [];
      result.push(data.origin);
      result.push(data.author);
      result.push(data.content);
      return result;
    })
    .catch((err) => console.log("rejected: ", err));
};

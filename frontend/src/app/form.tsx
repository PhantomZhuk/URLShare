"use client";
const serverURL = "http://localhost:5000/";
async function onSubmit(ev: React.FormEvent) {
  const form = ev.target as HTMLFormElement;
  const input = form.querySelector("input")!;
  ev.preventDefault();
  const reqUrl = form.action;
  if (!input.value) return;
  const data = JSON.stringify({
    [input.name]: input.value,
  });
  console.log(reqUrl, data);
  const response = await fetch(reqUrl, {
    method: "post",
    body: data,
  }).then(
    (res) => res.json(),
    () => ({})
  );

  if ("url" in response) {
    alert(`the url is ${response.url}`);
  } else if ("code" in response) {
    alert(`the code is ${response.code}`);
  } else {
    alert(`some error has occurred. Try again later`);
  }
}
export default function Form(params: {
  act: string;
  text: string;
  name: string;
  type: string;
}) {
  return (
    <form onSubmit={onSubmit} action={serverURL + params.act} method="post">
      <label>
        {params.text}
        <input type={params.type} name={params.name} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

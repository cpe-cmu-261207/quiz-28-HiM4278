const btnRandom = document.querySelector("#btn-random");
const names = document.querySelector("#name");
const Enail = document.querySelector("#p-email");
const profile = document.querySelector("#img-profile");
async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  names.innerText =
    resp.data.results[0].name.first + resp.data.results[0].name.last;
  profile.src = resp.data.results[0].picture.large;
  Enail.innerText = resp.data.results[0].email;
}

btnRandom.onclick = async () => {
  callApi();
};

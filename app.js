function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const loadingS = document.getElementById("load");

async function start() {
  await wait(1000);
  loadingS.insertAdjacentHTML(
    "beforeend",
    "<p>Booting linkedOS v8.3</p><p>-----------------------------------------</p>"
  );
  await wait(1000);
  loadingS.insertAdjacentHTML(
    "beforeend",
    "<p>Starting system initialization ...</p>"
  );
  await wait(2000);
  loadingS.insertAdjacentHTML(
    "beforeend",
    "<p>Mounting root filesystem ...</p>"
  );
  await wait(2000);
  loadingS.insertAdjacentHTML("beforeend", "<p>Loading kernel moudles ...</p>");
  await wait(1000);
  loadingS.insertAdjacentHTML(
    "beforeend",
    "<p>Starting network service ...</p>"
  );
  await wait(1000);
  loadingS.insertAdjacentHTML("beforeend", "<p>Checking for updates ...</p>");
  await wait(1000);
  loadingS.insertAdjacentHTML("beforeend", "<p>Starting user session ...</p>");
  await wait(2000);
  loadingS.insertAdjacentHTML(
    "beforeend",
    "<p>-----------------------------------------</p><p>System ready!</p><p>Tip of the day: tip of your cock</p>"
  );
  await wait(3000);
  loadingS.innerHTML = "";
  await wait(1000);
  loadingS.insertAdjacentHTML("beforeend", "<p>Loading...</p>");
  await wait(3000);
  loadingS.remove();
}

start();

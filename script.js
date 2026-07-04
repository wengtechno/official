const embedSources = {
  youtube: "",
  spotify: "",
};

const embedTitles = {
  youtube: "Featured WENG DJ set on YouTube",
  spotify: "WENG on Spotify",
};

function loadEmbed(container) {
  const type = container.dataset.embedType;
  const source = embedSources[type];

  if (container.querySelector("iframe")) {
    return;
  }

  if (!source) {
    container.classList.add("is-missing-source");
    const copy = container.querySelector(".embed-copy");

    if (copy) {
      copy.textContent = `Add ${type} embed URL in script.js`;
    }

    return;
  }

  const iframe = document.createElement("iframe");
  iframe.src = source;
  iframe.title = embedTitles[type] || "Embedded media player";
  iframe.loading = "lazy";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;

  container.replaceChildren(iframe);
}

document.querySelectorAll(".lazy-embed").forEach((container) => {
  const button = container.querySelector("button");

  button?.addEventListener("click", () => {
    loadEmbed(container);
  });
});

document.querySelectorAll("[data-track]").forEach((element) => {
  element.addEventListener("click", () => {
    window.dispatchEvent(
      new CustomEvent("weng:track", {
        detail: {
          action: element.dataset.track,
          href: element instanceof HTMLAnchorElement ? element.href : undefined,
        },
      }),
    );
  });
});

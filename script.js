const embedSources = {
  youtube: "https://www.youtube.com/embed/Q3ZmSiKK0mc",
  spotify: "",
}
const embedTitles = {
  youtube: "Featured WENG DJ set on YouTube",
  spotify: "WENG on Spotify",
}
function loadEmbed(container) {
  const type = container.dataset.embedType
  const source = embedSources[type]
  if (container.querySelector("iframe")) {
    return
  }
  if (!source) {
    container.classList.add("is-missing-source")
    const copy = container.querySelector(".embed-copy")
    if (copy) {
      copy.textContent = `Add ${type} embed URL in script.js`
    }
    return
  }
  const iframe = document.createElement("iframe")
  iframe.src = source
  iframe.title = embedTitles[type] || "Embedded media player"
  iframe.loading = "lazy"
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
  iframe.allowFullscreen = true
  container.replaceChildren(iframe)
}
document.querySelectorAll(".lazy-embed").forEach((container) => {
  const button = container.querySelector("button")
  button?.addEventListener("click", () => {
    loadEmbed(container)
  })
})
function createProofCard(card) {
  const article = document.createElement("article")
  article.className = "proof-card"
  const imageFrame = document.createElement("div")
  imageFrame.className = "proof-card-image"
  const image = document.createElement("img")
  image.src = card.image
  image.alt = card.alt || `Live set at ${card.title}`
  image.loading = "lazy"
  const content = document.createElement("div")
  content.className = "proof-card-content"
  const title = document.createElement("h3")
  title.textContent = card.title
  imageFrame.append(image)
  content.append(title)
  if (card.description) {
    const desc = document.createElement("p")
    desc.textContent = card.description
    content.append(desc)
  }
  article.append(imageFrame, content)
  return article
}
async function loadProofCards(carousel) {
  const source = carousel.dataset.cardsSrc
  if (!source) {
    return
  }
  try {
    const response = await fetch(source)
    if (!response.ok) {
      throw new Error(`Unable to load ${source}`)
    }
    const cards = await response.json()
    const validCards = cards.filter((card) => card.title && card.image)
    carousel.replaceChildren(...validCards.map(createProofCard))
  } catch (error) {
    const status =
      carousel.querySelector(".carousel-status") || document.createElement("p")
    status.className = "carousel-status"
    status.textContent = "Add valid cards in data/live-press-cards.json."
    carousel.replaceChildren(status)
  }
}
document.querySelectorAll("[data-cards-src]").forEach((carousel) => {
  loadProofCards(carousel)
})
document.querySelectorAll("[data-track]").forEach((element) => {
  element.addEventListener("click", () => {
    window.dispatchEvent(
      new CustomEvent("weng:track", {
        detail: {
          action: element.dataset.track,
          href: element instanceof HTMLAnchorElement ? element.href : undefined,
        },
      }),
    )
  })
})
window.addEventListener("weng:track", (e) => {
  // Wire up your analytics platform here (e.g. gtag, Plausible, Fathom)
  console.log("[track]", e.detail)
})

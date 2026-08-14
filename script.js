// function createliveCard(card) {
//   const article = document.createElement("article")
//   article.className = "live-card"
//   const imageFrame = document.createElement("div")
//   imageFrame.className = "live-card-image"
//   const image = document.createElement("img")
//   image.src = card.image
//   image.alt = card.alt || `Live set at ${card.title}`
//   image.loading = "lazy"
//   const content = document.createElement("div")
//   content.className = "live-card-content"
//   const title = document.createElement("h3")
//   title.textContent = card.title
//   const meta = document.createElement("div")
//   meta.className = "live-card-meta"
//   if (card.description) {
//     const desc = document.createElement("p")
//     desc.textContent = card.description
//     content.append(desc)
//   }
//   if (card.location) {
//     const location = document.createElement("p")
//     location.className = "live-card-location"
//     location.textContent = card.location
//     meta.append(location)
//   }
//   if (card.date) {
//     const date = document.createElement("p")
//     date.className = "live-card-date"
//     date.textContent = card.date
//     meta.append(date)
//   }
//   imageFrame.append(image)
//   content.append(title, meta)
//   article.append(imageFrame, content)
//   return article
// }
function createliveCard(card) {
  const article = document.createElement("article")
  article.className = "live-card"

  const imageFrame = document.createElement("div")
  imageFrame.className = "live-card-image"
  const image = document.createElement("img")
  image.src = card.image
  image.alt = card.alt || `Live set at ${card.title}`
  image.loading = "lazy"
  imageFrame.append(image)

  const title = document.createElement("h4")
  title.className = "live-card-title"
  title.textContent = card.title

  let location = null
  if (card.location) {
    location = document.createElement("p")
    location.className = "live-card-location"
    location.textContent = "@ " + card.location
  }

  let youtubeLink = null
  if (card.youtube) {
    youtubeLink = document.createElement("a")
    youtubeLink.href = card.youtube
    youtubeLink.target = "_blank"
    youtubeLink.rel = "noopener noreferrer"
    youtubeLink.className = "live-card-youtube-link"
    const icon = document.createElement("img")
    icon.src = "icon/youtube.png"
    icon.alt = ""
    icon.className = "live-card-youtube-icon"
    const label = document.createElement("span")
    label.textContent = "Watch the full set"
    youtubeLink.append(icon, label)
  }

  article.append(imageFrame, title)
  if (location) article.append(location)
  if (youtubeLink) article.append(youtubeLink)

  return article
}
async function loadliveCards(carousel) {
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
    if (!validCards.length) {
      throw new Error(`No valid cards found in ${source}`)
    }
    carousel.replaceChildren(...validCards.map(createliveCard))
    // Add interactive controls to the carousel (prev/next)
    setupCarouselControls(carousel)
  } catch (error) {
    const status =
      carousel.querySelector(".carousel-status") || document.createElement("p")
    status.className = "carousel-status"
    status.textContent = `Unable to load live cards from ${source}.`
    carousel.replaceChildren(status)
  }
}
document.querySelectorAll("[data-cards-src]").forEach((carousel) => {
  loadliveCards(carousel)
})

function setupCarouselControls(carousel) {
  if (carousel._controlsInstalled) return
  carousel._controlsInstalled = true
  // Wrap carousel in a non-scrolling wrapper so controls don't scroll away
  let wrapper =
    carousel.parentElement &&
    carousel.parentElement.querySelector(".carousel-wrap")
  if (!wrapper) {
    wrapper = document.createElement("div")
    wrapper.className = "carousel-wrap"
    // ensure wrapper uses the same flow as carousel's previous position
    const parent = carousel.parentElement
    parent.replaceChild(wrapper, carousel)
    wrapper.appendChild(carousel)
  }
  wrapper.style.position = wrapper.style.position || "relative"

  const prev = document.createElement("button")
  prev.className = "carousel-button carousel-prev"
  prev.setAttribute("aria-label", "Scroll left")
  prev.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M15 6 L9 12 L15 18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`

  const next = document.createElement("button")
  next.className = "carousel-button carousel-next"
  next.setAttribute("aria-label", "Scroll right")
  next.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M9 6 L15 12 L9 18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`

  // Insert controls into wrapper (so they stay visible while carousel scrolls)
  wrapper.append(prev, next)

  const scrollAmount = () => Math.max(carousel.clientWidth * 0.8, 280)

  prev.addEventListener("click", () => {
    carousel.scrollBy({ left: -scrollAmount(), behavior: "smooth" })
  })
  next.addEventListener("click", () => {
    carousel.scrollBy({ left: scrollAmount(), behavior: "smooth" })
  })

  function updateControls() {
    const maxScroll = carousel.scrollWidth - carousel.clientWidth
    const atStart = carousel.scrollLeft <= 8
    const atEnd = carousel.scrollLeft >= maxScroll - 8
    const overflow = carousel.scrollWidth > carousel.clientWidth + 4
    prev.style.display = overflow && !atStart ? "grid" : "none"
    next.style.display = overflow && !atEnd ? "grid" : "none"
  }

  // Update on scroll, resize and when images load
  carousel.addEventListener("scroll", () =>
    requestAnimationFrame(updateControls),
  )
  window.addEventListener("resize", () => requestAnimationFrame(updateControls))

  // If images inside cards load later, re-check
  const imgs = carousel.querySelectorAll("img")
  imgs.forEach((img) =>
    img.addEventListener("load", () => requestAnimationFrame(updateControls)),
  )

  // initial update (allow time for layout)
  requestAnimationFrame(() => setTimeout(updateControls, 40))
}
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

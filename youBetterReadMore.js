////
////    You Better Read More - JS
////    V 1.2.2 by Louis Mudrack
////    10/17/2023
////
////////////////////

/**
 * Implements an expandable "Read More" component.
 *
 * @class
 * @param {string} openText - The text to display on the "Read More" button when the content is collapsed.
 * @param {string} closeText - The text to display on the "Read More" button when the content is expanded.
 * @param {number} teaserLength - The length to display of the content when it is collapsed.
 */
class ReadMore {
  constructor(openText, closeText, teaserLength = 100) {
    this.openText = openText;
    this.closeText = closeText;
    this.teaserLength = teaserLength;
    this.readMoreElements = document.querySelectorAll(".read-more");

    this.initialize();
  }

  /**
   * Initializes the component by adding event listeners to the "Read More" buttons.
   */
  initialize() {
    this.readMoreElements.forEach((element) => {
      element.classList.add("collapsed");
      const teaserElement = element.querySelector(".read-more-teaser");
      const fullText = teaserElement.firstElementChild.textContent;
      const teaserText = fullText.substring(0, this.teaserLength) + "...";

      if (fullText.length > this.teaserLength) {
        teaserElement.firstElementChild.textContent = teaserText;
        const button = document.createElement("button");
        button.textContent = this.openText;
        button.classList.add("btn", "read-more-btn");
        button.style.width = "100%";
        button.addEventListener("click", () => {
          this.toggleReadMore(element, teaserElement, fullText, button);
        });
        teaserElement.appendChild(button);
      }
    });
  }

  /**
   * Toggles the read more content between collapsed and expanded states.
   *
   * @param {HTMLElement} teaserElement - The element containing the teaser text.
   * @param {string} fullText - The full text of the read more content.
   * @param {HTMLElement} button - The "Read More" button.
   */
  toggleReadMore(element, teaserElement, fullText, button) {
    if (button.textContent === this.openText) {
      this.expandReadMore(element, teaserElement, fullText, button);
    } else {
      this.collapseReadMore(element, teaserElement, fullText, button);
    }
  }

  /**
   * Expands the read more content by showing the full text and changing the button text.
   *
   * @param {HTMLElement} teaserElement - The element containing the teaser text.
   * @param {string} fullText - The full text of the read more content.
   * @param {HTMLElement} button - The "Read More" button.
   */
  expandReadMore(element, teaserElement, fullText, button) {
    teaserElement.firstElementChild.textContent = fullText;
    button.textContent = this.closeText;
    element.classList.remove("collapsed");
    element.classList.add("expanded");
  }

  /**
   * Collapses the read more content by showing the teaser text and changing the button text.
   *
   * @param {HTMLElement} teaserElement - The element containing the teaser text.
   * @param {string} fullText - The full text of the read more content.
   * @param {HTMLElement} button - The "Read More" button.
   */
  collapseReadMore(element, teaserElement, fullText, button) {
    const teaserText = fullText.substring(0, this.teaserLength) + "...";
    teaserElement.firstElementChild.textContent = teaserText;
    button.textContent = this.openText;
    element.classList.remove("expanded");
    element.classList.add("collapsed");
  }
}

new ReadMore("Read-More", "Close", 200);

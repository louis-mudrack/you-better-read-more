////
////    You Better Read More - JS
////    V 1.2 by Louis Mudrack
////    08/08/2023
////
////////////////////

/**
 * Implements an expandable "Read More" component.
 *
 * @class
 * @param {string} openText - The text to display on the "Read More" button when the content is collapsed.
 * @param {string} closeText - The text to display on the "Read More" button when the content is expanded.
 */
class ReadMore {
  constructor(openText, closeText) {
    this.openText = openText;
    this.closeText = closeText;
    this.readMoreElements = document.querySelectorAll('.read-more');

    this.initialize();
  }

  /**
   * Initializes the component by adding event listeners to the "Read More" buttons.
   */
  initialize() {
    this.readMoreElements.forEach((element) => {
      element.classList.add('collapsed');
      const teaserElement = element.querySelector('.read-more-teaser');
      const fullText = teaserElement.firstElementChild.textContent;
      const teaserText = fullText.substring(0, 100) + '...';

      if (fullText.length > 100) {
        teaserElement.firstElementChild.textContent = teaserText;
        const button = document.createElement('button');
        button.textContent = this.openText;
        button.classList.add('btn', 'read-more-btn');
        button.style.width = '100%';
        button.addEventListener('click', () =>
          this.toggleReadMore(element, teaserElement, fullText, button)
        );
        teaserElement.appendChild(button);
      }
    });
  }

  /**
   * Toggles the read more content between collapsed and expanded states.
   *
   * @param {HTMLElement} element - The element containing the "Read More" button and the read more content.
   * @param {HTMLElement} teaserElement - The element containing the teaser text.
   * @param {string} fullText - The full text of the read more content.
   * @param {HTMLElement} button - The "Read More" button.
   */
  toggleReadMore(element, teaserElement, fullText, button) {
    if (element.classList.contains('collapsed')) {
      this.expandReadMore(teaserElement, fullText, button);
    } else {
      this.collapseReadMore(teaserElement, fullText, button);
    }
  }

  /**
   * Expands the read more content by showing the full text and changing the button text.
   *
   * @param {HTMLElement} teaserElement - The element containing the teaser text.
   * @param {string} fullText - The full text of the read more content.
   * @param {HTMLElement} button - The "Read More" button.
   */
  expandReadMore(teaserElement, fullText, button) {
    teaserElement.firstElementChild.textContent = fullText;
    button.textContent = this.closeText;
    button.removeEventListener('click', () =>
      this.toggleReadMore(teaserElement, fullText, button)
    );
    button.addEventListener('click', () =>
      this.collapseReadMore(teaserElement, fullText, button)
    );
    teaserElement.parentElement.classList.add('expanded');
    teaserElement.parentElement.classList.remove('collapsed');
  }

  /**
   * Collapses the read more content by showing the teaser text and changing the button text.
   *
   * @param {HTMLElement} teaserElement - The element containing the teaser text.
   * @param {string} fullText - The full text of the read more content.
   * @param {HTMLElement} button - The "Read More" button.
   */
  collapseReadMore(teaserElement, fullText, button) {
    const teaserText = fullText.substring(0, 100) + '...';
    teaserElement.firstElementChild.textContent = teaserText;
    button.textContent = this.openText;
    button.removeEventListener('click', () =>
      this.toggleReadMore(teaserElement, fullText, button)
    );
    button.addEventListener('click', () =>
      this.expandReadMore(teaserElement, fullText, button)
    );
    teaserElement.parentElement.classList.add('collapsed');
    teaserElement.parentElement.classList.remove('expanded');
  }
}

new ReadMore('Read More', 'Close');

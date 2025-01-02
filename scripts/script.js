

//navbar active class and toggle 
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('active');
});



// service section draggable functionality 

const cards = document.querySelectorAll('.card');
        const cardContainer = document.getElementById('cardContainer');

        let draggedCard = null;

        // Add event listeners for dragging
        cards.forEach(card => {
            card.addEventListener('dragstart', (e) => {
                draggedCard = card;
                setTimeout(() => {
                    card.classList.add('dragging');
                }, 0);
                // Add shivering effect to nearby cards
                cards.forEach(otherCard => {
                    if (otherCard !== card) {
                        otherCard.classList.add('shivering');
                    }
                });
            });

            card.addEventListener('dragend', () => {
                setTimeout(() => {
                    draggedCard.classList.remove('dragging');
                }, 0);
                cards.forEach(otherCard => {
                    otherCard.classList.remove('shivering');
                });
                draggedCard = null;
            });

            card.addEventListener('dragover', (e) => {
                e.preventDefault();
                const draggedIndex = Array.from(cards).indexOf(draggedCard);
                const hoveredIndex = Array.from(cards).indexOf(card);

                // Swap cards while dragging, allowing continuous swapping
                if (draggedIndex !== hoveredIndex) {
                    const direction = draggedIndex < hoveredIndex ? 'after' : 'before';
                    cardContainer.insertBefore(draggedCard, direction === 'after' ? card.nextElementSibling : card);
                }
            });

            card.addEventListener('drop', (e) => {
                e.preventDefault();
                cards.forEach(otherCard => {
                    otherCard.classList.remove('shivering');
                });
            });
        });



        

//language script

    // Function to set and update language
    
function setLanguage(language) {
  // Save the selected language in localStorage
  localStorage.setItem("selectedLanguage", language);

  // Update text content for elements with data-key
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-key");
    if (HeroSectionContent[language][key]) {
      element.textContent = HeroSectionContent[language][key];
    }
  });

  // Update placeholders for input fields
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const button = document.getElementById("submit-button");
  const searchInput=document.getElementById('searchInput')

  if (nameInput) nameInput.placeholder = HeroSectionContent[language].namePlaceholder;
  if (emailInput) emailInput.placeholder = HeroSectionContent[language].emailPlaceholder;
  if (messageInput) messageInput.placeholder = HeroSectionContent[language].messagePlaceholder;
  if (button) button.textContent = HeroSectionContent[language].buttonText;
  if(searchInput)searchInput.placeholder=HeroSectionContent[language].searchInput;
}

document.addEventListener("DOMContentLoaded", () => {
  const languageDropdown = document.getElementById("language-dropdown");

  // Retrieve saved language or default to English
  const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
  languageDropdown.value = savedLanguage;

  // Set language on page load
  setLanguage(savedLanguage);

  // Change language on dropdown selection
  languageDropdown.addEventListener("change", (event) => {
    setLanguage(event.target.value);
  });
});



//service page card flipping content
document.addEventListener("DOMContentLoaded", () => {
    const languageDropdown = document.getElementById("language-dropdown");

    // Retrieve saved language or default to English
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    languageDropdown.value = savedLanguage;

    // Set language on page load
    setLanguage(savedLanguage);

    // Change language on dropdown selection
    languageDropdown.addEventListener("change", (event) => {
      setLanguage(event.target.value);
    });
  });



  //card flipping animation 

  function flipCard(index) {
    const card = document.getElementById('card');
    const frontTitle = document.getElementById('frontTitle');
    const frontDesc = document.getElementById('frontDesc');
    const backTitle = document.getElementById('backTitle');
    const backDesc = document.getElementById('backDesc');

    // Get language from localStorage or default to English
    const lang = localStorage.getItem("selectedLanguage") || "en";

    // Update card content based on selected language and service
    const serviceContent = {
      0: {
        frontTitle: HeroSectionContent[lang].softwareButton,
        frontDesc: "Here is more detailed information about Software.",
        backTitle: HeroSectionContent[lang].backTitle1,
        backDesc: HeroSectionContent[lang].backDesc1
      },
      1: {
        frontTitle: HeroSectionContent[lang].itSolutionsButton,
        frontDesc: "Information about IT Solutions.",
        backTitle: HeroSectionContent[lang].backTitle2,
        backDesc: HeroSectionContent[lang].backDesc2
      },
      2: {
        frontTitle: HeroSectionContent[lang].websiteButton,
        frontDesc: "Details about our Website services.",
        backTitle: HeroSectionContent[lang].backTitle3,
        backDesc: HeroSectionContent[lang].backDesc3
      },
      3: {
        frontTitle: HeroSectionContent[lang].filmingButton,
        frontDesc: "Filming services information.",
        backTitle: HeroSectionContent[lang].backTitle4,
        backDesc: HeroSectionContent[lang].backDesc4
      },
      4: {
        frontTitle: HeroSectionContent[lang].designButton,
        frontDesc: "Design services details.",
        backTitle: HeroSectionContent[lang].backTitle5,
        backDesc: HeroSectionContent[lang].backDesc5
      },
      5: {
        frontTitle: HeroSectionContent[lang].smmButton,
        frontDesc: "Information about Social Media Marketing (SMM).",
        backTitle: HeroSectionContent[lang].backTitle6,
        backDesc: HeroSectionContent[lang].backDesc6
      }
    };

    // Update the front and back of the card with the selected service content
    const content = serviceContent[index];
    frontTitle.textContent = content.frontTitle;
    frontDesc.textContent = content.frontDesc;
    backTitle.textContent = content.backTitle;
    backDesc.textContent = content.backDesc;

    // Flip the card to show back
    card.classList.add('flip');

    // Flip back after a delay
    setTimeout(() => {
      card.classList.remove('flip');
    }, 3000); // Flip back after 3 seconds
  }

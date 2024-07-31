// ;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  BOTONES ACTIVIDAD  ;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;

 document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".toggle-button-subtabs");
  const buttonsB = document.querySelectorAll(".toggle-button-subtabs-baul");
  const contents = document.querySelectorAll(".content-subtabs");
  const contentsBaul = document.querySelectorAll(".content-subtabs-baul");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      
      buttons.forEach((btn) => {
        btn.classList.remove("active-button-subtabs");                // Remove the active-button class from all buttons
      });

      button.classList.add("active-button-subtabs");                  // Add the active-button class to the clicked button
      
      contents.forEach((content) => {
        content.classList.remove("active-content-subtabs");           // Hide all content containers
      });
     
      contents[index].classList.add("active-content-subtabs");        // Display the content  clicked button

    

      
    });
  });  
     
     buttonsB.forEach((buttonB, indexB) => {
    buttonB.addEventListener("click", () => {
      
      buttonsB.forEach((btnB) => {
        btnB.classList.remove("active-button-subtabs-baul");                // Remove the active-button class from all buttons
      });

      buttonB.classList.add("active-button-subtabs-baul");                  // Add the active-button class to the clicked button
      
      
     contentsBaul.forEach((contentB) => {
     contentB.classList.remove("active-content-subtabs-baul");           // Hide all content containers baul
      });

      

    contentsBaul[indexB].classList.add("active-content-subtabs-baul");        // Display the content  clicked button baul

      
    });
  });
});

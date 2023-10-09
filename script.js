"use strict";

const modal = document.querySelector(".modal");
const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnCloseModal1 = document.querySelector(".close-modal1");
const btnCloseModal2 = document.querySelector(".close-modal2");
const btnOpenModal = document.querySelector(".show-modal");
const btnOpenModal2 = document.querySelector(".show-modal2");
const btnOpenModal3 = document.querySelector(".show-modal3");

// console.log(btnOpenModal.textContent);

// const openModal =  function () {
//     modal.classList.remove("hidden");
//     overlay.classList.remove("hidden");

// }

// const closeModal = function () {
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");
// };

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

btnOpenModal.addEventListener("click", openModal);

btnOpenModal2.addEventListener("click", function () {
    console.log(`Button clicked`);
    modal1.classList.remove("hidden");
    overlay.classList.remove("hidden");
});

btnOpenModal3.addEventListener("click", function () {
    console.log(`Button clicked`);
    modal2.classList.remove("hidden");
    overlay.classList.remove("hidden");
});

const closeModal = function () {
    modal.classList.add("hidden");
    modal1.classList.add("hidden");
    modal2.classList.add("hidden");
    overlay.classList.add("hidden");
};

btnCloseModal.addEventListener('click', closeModal);

btnCloseModal1.addEventListener('click', closeModal);

btnCloseModal2.addEventListener('click', closeModal)

overlay.addEventListener('click', closeModal)

// for (let i = 0; i < btnsOpenModal.length; i++)
//     btnsOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);

// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//     console.log(e.key);

//     if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//         closeModal();
//     }
// })

// btnOpenModal.addEventListener('click', openModal)
// console.log(btnOpenModal.textContent)
// btnCloseModal.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);

// document.addEventListener('keydown', function (e) {
//     console.log(e.key);

//     if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//         closeModal();
//     }
// })

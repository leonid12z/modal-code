// !Откыть и  закрыть по кнопки onModalOpen и onModalClose
// Зкрыть по клику в бекдроп: onBackDropClick
// Зкрыть по ESC: onEscapeKeypress

// В CSS есть класс show-modal который необходимо добавить body на при окрытии модалки

const refs = {
   openModalBtm: document.querySelector('[data-action="open-modal"]'),
   closeModalBtm: document.querySelector('[data-action="close-modal"]'),
   backdrop: document.querySelector('.js-backdrope'),
};

refs.openModalBtm.addEventListener('click', onOpenModal);
refs.closeModalBtm.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

//Подписка на кедаун---
function onOpenModal() {
   window.addEventListener('keydown', onEscKeyPress);
   document.body.classList.add('show-modal');
}

// Отписка от кедаун---
function onCloseModal() {
   window.removeEventListener('keydown', onEscKeyPress);
   document.body.classList.remove('show-modal');
}

   //Проверить клик на бекдроп  
function onBackDropClick(event) {
   if (event.currentTarget === event.target) {
      console.log('Кликнули именно в бекдроп!');
      onCloseModal();
   }
}

// Проверить клик на Ескейп
function onEscKeyPress(event) {
   // console.log(event.code);

   const ESC_KEY_CODE = 'Escape';

   if (event.code === ESC_KEY_CODE) {
     onCloseModal();
   }
}
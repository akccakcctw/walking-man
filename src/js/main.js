document.addEventListener('DOMContentLoaded', () => {
  const myUrl = 'https://goo.gl/H9uJyX';
  const BOHAN = 'BOHAN Graphic Design Office';
  const urlBOHAN = 'https://goo.gl/bkAxv1';
  const styleConsole = `
    background: #131313;
    color: #B1F1F1;
    font-size: 18px;
    border-bottom: 1px solid transparent;
    padding: .1rem .5rem;
  `;
  const styleConsole2 = `
    background: #131313;
    color: #DFF1F1;
    font-size: 12px;
    border-bottom: 1px solid transparent;
    padding: .1rem .5rem;
  `;
  const animSwitch = document.querySelector('#switch');
  const sportPanels = document.querySelectorAll('.sport-panel');
  const switchAnims = () => {
    sportPanels.forEach(panel => panel.classList.toggle('is-active'));
  };

  console.log(`%cAuthor: Rex Tsou(akccakcctw), ${myUrl}`, styleConsole);
  console.log(`%cInspired: ${BOHAN}, ${urlBOHAN}`, styleConsole2);

  animSwitch.addEventListener('click', switchAnims);
});

console.log('Hello World!');
const loading_container = document.querySelector('.loading-container')
document.querySelector('img').onload=()=>{
  loading_container.classList.toggle('loading-container-close')
}

// star over
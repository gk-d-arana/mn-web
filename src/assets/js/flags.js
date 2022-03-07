const Flags = () =>{

    document.querySelectorAll('.iti__country').forEach(aa => {
        //country choose management 
        aa.addEventListener('click', ()=>{
         let flag = aa.getAttribute('data-country-code')
         let code = aa.getAttribute('data-dial-code')
          let num = document.querySelector('.phone_number').value.split('-')[1]
          document.querySelector('.phone_number').value = '+' + code + '-' + num 
          document.querySelector('.iti__selected-flag').innerHTML = `
          <div class="iti__flag iti__${flag}"></div>
          <div class="iti__selected-dial-code">+${code}</div>
          <div class="iti__arrow">
          </div>
          `

        })
        // country hover managment 
      aa.addEventListener("mouseenter", (e)=>{
      document.querySelectorAll('.iti__country').forEach(el => {
        
        el.classList.remove('iti__highlight')
      })
       e.target.classList.add('iti__highlight')
    })
  })

  //country click managemnt

  document.querySelector('.iti__flag-container').addEventListener('click', ()=>{
    document.querySelector('.iti__country-list').classList.toggle('hidden')
  })

  

}


export default Flags
(function () {

     const html_input_box = document.querySelector('.input_box')
     const html_content_button = document.querySelectorAll('.content_button')

     const html_feature_button_clear = document.querySelector('.feature_button_clear')
     const html_feature_button_backspace = document.querySelector('.feature_button_backspace')
     const html_feature_button_result_calc = document.querySelector('.feature_button_result_calc')


     function check_character(valor) {

          const required_values = '0123456789.+-*/'

          for(character of valor) {
               if ( required_values.includes(character) === false ) {
                    return false
               }
          }

     }

     html_content_button.forEach((button) => {

          button.addEventListener('click', (e) => {

               const value_button = e.target.innerText
               html_input_box.value += value_button

          })

     })

     html_feature_button_clear.addEventListener('click', () => {
          
          html_input_box.value = ''

     })

     html_feature_button_backspace.addEventListener('click', () => {
          
          let value_input = html_input_box.value
          html_input_box.value = value_input.slice(0,-1)
          
     })

     function result_calc () {

          const value_input = html_input_box.value.trim()

          if(value_input === '') {
               return null
          }

          try {
               
               if (check_character(value_input) === false) {
                    throw new Error('FORMATO INVALIDO')
               } else {
                    const calc = eval(value_input)
                    html_input_box.value = calc
               }

          } catch(error) {

               alert('CONTA INVALIDA')
               html_input_box.value = ''

          }

     }
     html_feature_button_result_calc.addEventListener('click', () => {
          result_calc()
     })
     html_input_box.addEventListener('keyup', (e) => {
          if (e.keyCode === 13) {
               result_calc()
          }
     })


})()
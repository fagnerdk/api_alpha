var form = document.getElementById('form0')
var iput = document.getElementById('uu')
form.addEventListener('submit',(e)=>{

   form.action=`http://localhost:3000/kaio2?=${iput.value}` 
   console.log(iput.value)
    e.preventDefault()


})
console.log('We are woring from public folder')
const url='http://localhost:3000/weather?address=1';
fetch(url).then((response)=>{
    response.json().then((data)=>{
      if(data.error){
        console.log(data.error)
      }else{
        console.log(data);
      }
      
    })
})

const weatherForm=document.querySelector('form');
const searchValue=document.querySelector('input');
const message1=document.querySelector('#message-1');
const message2=document.querySelector('#message-2');


weatherForm.addEventListener('submit',(e)=>{
     e.preventDefault();
     console.log(searchValue.value);
     message1.textContent='Loading...'
     message2.textContent='';
     const url='http://localhost:3000/weather?address='+searchValue.value+'';
      fetch(url).then((response)=>{
          response.json().then((data)=>{
            if(data.error){
             message1.textContent=data.error;
            }else{
             message1.textContent=data.Name;
             message2.textContent=data.Email;
            }
            
          })
      })
})
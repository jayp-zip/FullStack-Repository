/* 
  Exemplo de como carregar paginas dinamicamente sem necessariamente fazer o reload da página. AJAX.
  XMLHttpRequest = AJAX.
*/

const request = obj =>{
  const xhr = new XMLHttpRequest()
  xhr.open(obj.method, obj.url, true)
  xhr.send()
  xhr.addEventListener('load', () =>{
     if(xhr.status >= 200 && xhr.status < 300){
      obj.success(xhr.responseText)
     }
  })
}
 
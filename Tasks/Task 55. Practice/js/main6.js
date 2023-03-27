document.addEventListener('DOMContentLoaded', () => {

    const followCursor = () => { 
      var el = document.querySelector('.follow-cursor')
  
      window.addEventListener('mousemove', e => { // при движении курсора
        var target = e.target 
       
        el.style.left = e.pageX + 'px' 
        el.style.top = e.pageY + 'px' 
      })
    }
  
    followCursor()
  
  })
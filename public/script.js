function setTheme(themeName){
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

function toggleTheme(){
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-light');
  }
  else{
     setTheme('theme-dark');
  }
}

(function () {
  if (localStorage.getItem('theme') === 'theme-dark'){
    setTheme('theme-dark')
    document.querySelector('#tema').checked = true;
  }
  else if(localStorage.getItem('theme') === 'theme-light'){
    setTheme('theme-light')
    document.querySelector('#tema').checked = false;
  }
})();

    var styles = window.getComputedStyle(document.querySelector(".sidebar"))


/*function abrirSide(){
  
  
  if(styles.getPropertyValue('display') == 'none'){
      document.querySelector(".sidebar").style.setProperty('display', 'block')
      document.querySelector("#cover").style.setProperty('display', 'block')
      document.querySelector("body").style.setProperty('overflow-y', 'hidden')
  }
  else{
    document.querySelector(".sidebar").style.setProperty('display', 'none')
    document.querySelector("#cover").style.setProperty('display', 'none')
    document.querySelector("body").style.setProperty('overflow-y', '')
  }
}

function fecharCover(){
  
  
  if(styles.getPropertyValue('display') == 'block'){
    document.querySelector("#cover").style.setProperty('display', 'none')
    document.querySelector(".sidebar").style.setProperty('display', 'none')

  }
}*/
    
function abrirSide(){
  
  
  if(styles.getPropertyValue('transform') == 'matrix(1, 0, 0, 1, -500, 0)'){
      document.querySelector(".sidebar").style.setProperty('transform', 'matrix(1, 0, 0, 1, 0, 0)')
      document.querySelector("#cover").style.setProperty('display', 'block')
      document.querySelector("body").style.setProperty('overflow-y', 'hidden')
    
      document.querySelector(".time").style.setProperty('display', 'block')
      document.querySelector(".time").style.setProperty('position', 'static')
      document.querySelector(".time1").style.setProperty('display', 'block')
      document.querySelector(".time1").style.setProperty('position', 'static')
      document.querySelector(".bar").style.setProperty('display', 'none')
      document.querySelector(".bar").style.setProperty('position', 'absolute')
      document.querySelector(".bar1").style.setProperty('display', 'none')
      document.querySelector(".bar1").style.setProperty('position', 'absolute')
      
  }
  else{
    document.querySelector(".sidebar").style.setProperty('transform', 'matrix(1, 0, 0, 1, -500, 0)')
    document.querySelector("#cover").style.setProperty('display', 'none')
    document.querySelector("body").style.setProperty('overflow-y', '')
    
    document.querySelector(".time").style.setProperty('display', 'none')
    document.querySelector(".time").style.setProperty('position', 'absolute')
    document.querySelector(".time1").style.setProperty('display', 'none')
    document.querySelector(".time1").style.setProperty('position', 'absolute')
    document.querySelector(".bar").style.setProperty('display', 'block')
    document.querySelector(".bar").style.setProperty('position', 'static')
    document.querySelector(".bar1").style.setProperty('display', 'block')
    document.querySelector(".bar1").style.setProperty('position', 'static')
  }
}

function fecharCover(){
  
  
  if(styles.getPropertyValue('transform') == 'matrix(1, 0, 0, 1, 0, 0)'){
    document.querySelector("#cover").style.setProperty('display', 'none')
    document.querySelector(".sidebar").style.setProperty('transform', 'matrix(1, 0, 0, 1, -500, 0)')
    document.querySelector("body").style.setProperty('overflow-y', '')
    
    document.querySelector(".time").style.setProperty('display', 'none')
    document.querySelector(".time").style.setProperty('position', 'absolute')
    document.querySelector(".time1").style.setProperty('display', 'none')
    document.querySelector(".time1").style.setProperty('position', 'absolute')
    document.querySelector(".bar").style.setProperty('display', 'block')
    document.querySelector(".bar").style.setProperty('position', 'static')
    document.querySelector(".bar1").style.setProperty('display', 'block')
    document.querySelector(".bar1").style.setProperty('position', 'static')
    

  }
}
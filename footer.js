const templateFooter = document.createElement('templateFooter');

templateFooter.innerHTML = `
    <div class="sec-3">
    <div class="mode">
            <span id="mytogglebtn" >
                <i class="fa fa-moon-o" aria-hidden="true"></i>&nbsp;
                Dark mode
            </span>

            <span id="ightmytogglebtn" class="light-btn">
                <i class="fa fa-lightbulb-o" aria-hidden="true"></i>&nbsp;
                Light mode
            </span>
    </div>
    <div class="copyright">
        <p>Copyright &copy; 2023 <span>Kabale University</span> - FOCLIS </p>
        
    </div>
    </div>
`;

document.body.appendChild(templateFooter);

// Mode changer

const changeMode = () =>{
    const toggleBtn = document.getElementById('mytogglebtn');
    const lighttoggleBtn = document.getElementById('ightmytogglebtn');
    const container = document.querySelector('body');
  
  
    toggleBtn.addEventListener('click', ()=>{
      localStorage.setItem('mode', 'dark');
  
      container.classList.add('dark-mode');
      toggleBtn.style.display = 'none';
      lighttoggleBtn.style.display = 'block';
    });
  
    lighttoggleBtn.addEventListener('click', ()=>{
      localStorage.setItem('mode', 'light');
  
      container.classList.remove('dark-mode');
      toggleBtn.style.display = 'block';
      lighttoggleBtn.style.display = 'none';
      // logo.src = "{% static 'movies/images/primULogo.png' %}"
      // logo2.src = "{% static 'movies/images/primULogo.png' %}"
  
    });
  }
  
  changeMode();
  
  
  const checkMode = () =>{
    var mode_status = localStorage.getItem('mode');
    const container = document.querySelector('body');
    const lighttoggleBtn = document.getElementById('ightmytogglebtn');
    const toggleBtn = document.getElementById('mytogglebtn');
  
    if(mode_status == 'dark'){
      container.classList.add('dark-mode');
      toggleBtn.style.display = 'none';
      lighttoggleBtn.style.display = 'block';
    }else{
      container.classList.remove('dark-mode');
      toggleBtn.style.display = 'block';
      lighttoggleBtn.style.display = 'none';
  
    }
  
    console.log(mode_status)
    
  }
  
  checkMode();


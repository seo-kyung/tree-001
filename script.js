var button = document.getElementById("button");

let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=600,height=800,left=100,top=100`;


button.onclick = () => {
    window.open('about.html','newwindow', params);
  
    
  };





function animacja()
{
    document.querySelector(".gory2").style.animation="zakrycie 3s";
}


document.querySelector(".strzala").addEventListener('click', () => { change(1)});


function change(i)
{

    document.querySelector(".strzala").innerHTML="";
    
animacja();

  
    if(i==0)
    {
        setTimeout(() => { 
            document.querySelector(".napis2").innerHTML="<img src='imgprojekty/project1.jpg' class='img_projektu'  height='500px'>  "; 
            document.querySelector(".opis").innerHTML="HTML";
            document.querySelector(".nastepnastrona").style.backgroundColor="darkgreen";
            document.querySelector(".nastepnastrona").style.border="green";
        }, 1000);
    
    
    }
    
    if(i==1)
    {
        setTimeout(() => { 
            
            document.querySelector(".napis2").innerHTML="<img src='imgprojekty/project2.jpg' class='img_projektu'  height='500px'>  "; 
            document.querySelector(".opis").innerHTML="JAVA ";
            document.querySelector(".strzala").innerHTML+=" <img src='imgprojekty/strzalka.png' class='strzalka' onclick='change(2)'>  ";
            document.querySelector(".napis2").style.top="20%";
            document.querySelector(".napis").style.top="5%";
            document.querySelector(".nastepnastrona").style.backgroundColor="#006f82";
            document.querySelector(".nastepnastrona").style.border="3px solid #115864";
        }, 1000);
    
    }
    
    if(i==2)
    {
        setTimeout(() => { 
            document.querySelector(".napis2").innerHTML="<img src='imgprojekty/project3.jpg' class='img_projektu'  height='500px'>  "; 
            document.querySelector(".opis").innerHTML="ART";
            document.querySelector(".nastepnastrona").style.backgroundColor="#725dba";
            document.querySelector(".nastepnastrona").style.border="3px solid #332664";
            document.querySelector(".nastepnastrona").style.top="50%";
        }, 1000);
    
    }
     
    
       setTimeout(() => {   document.querySelector(".gory2").style.animation="";
        document.querySelector(".gory2").style.animation="wjazd 2s, pojawiasie 1s, ruchfal 15s infinite;"; }, 3000);
    

}
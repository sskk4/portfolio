var array = ["index","aboutme","projects","contact"]

function schowajindex(i)
{

    document.querySelector(".gory2").style.animation="schowaj 1.25s forwards";
    document.querySelector(".gory3").style.animation="schowaj 1.5s forwards";
    document.querySelector(".gory4").style.animation="schowaj 1.75s forwards";
    document.querySelector(".gory").style.animation="schowaj 2s forwards";
    document.querySelector(".menu").style.animation="chowasie2 2s , znika 1s forwards";
    document.querySelector(".napis2").style.animation="chowa_napis 0.5s forwards, znika 0.5s";
    document.querySelector(".napis").style.animation="chowa_napis 0.5s forwards, znika 0.5s";
    

    setTimeout(() => {
       location.href=''+array[i]+'.html'; 
   }, 2100);

}

function schowajcontact(i)
{
    document.querySelector(".gory2").style.animation="schowaj 1.25s forwards";
    document.querySelector(".gory3").style.animation="schowaj 1.5s forwards";
    document.querySelector(".gory4").style.animation="schowaj 1.75s forwards";
    document.querySelector(".menu").style.animation="chowasie2 2s , znika 1s forwards";
    document.querySelector(".gory5").style.animation="schowaj 2s forwards";

    document.querySelector(".gory").style.animation="chowasie2 1s forwards, znika 1s";
    document.querySelector(".duzynapis").style.animation="chowa_napis 0.5s forwards, znika 0.5s";
    document.querySelector(".duzynapis2").style.animation="chowa_napis 0.5s forwards, znika 0.5s";
    document.querySelector(".napis2").style.animation="chowa_napis 0.5s forwards, znika 0.5s";

  setTimeout(() => {
       location.href=''+array[i]+'.html'; 
   }, 2100);


}

function schowajaboutme(i)
{

    document.querySelector(".gory2").style.animation="schowaj 1.25s forwards";
    document.querySelector(".gory3").style.animation="schowaj 1.5s forwards";
    document.querySelector(".napis").style.animation="chowa_napis 0.5s forwards, znika 0.5s";
    document.querySelector(".napis2").style.animation="chowa_napis 0.5s forwards, znika 0.5s";
    document.querySelector(".napis3").style.animation="chowa_napis 0.5s forwards, znika 0.5s";
    document.querySelector(".menu").style.animation="chowasie2 2s , znika 1s forwards";


    setTimeout(() => {
        location.href=''+array[i]+'.html'; 
    }, 2100);
 
}

function schowajprojects(i)

{
    document.querySelector(".gory2").style.animation="schowaj 1.25s forwards";
    document.querySelector(".gory3").style.animation="schowaj 1.5s forwards";
    document.querySelector(".gory4").style.animation="schowaj 1.75s forwards";
    document.querySelector(".img_projektu").style.animation=" znika 0.2s forwards";
    document.querySelector(".napis").style.animation="chowa_napis 0.5s forwards, znika 0.5s";
    document.querySelector(".napis2").style.animation="chowa_napis 0.5s forwards, znika 0.5s";
    document.querySelector(".napis3").style.animation="chowa_napis 0.5s forwards, znika 0.5s";
    document.querySelector(".menu").style.animation="chowasie2 2s , znika 1s forwards";
    document.querySelector(".nastepnastrona").style.animation="chowasie2 2s , znika 1s forwards";
    document.querySelector(".strzalka").style.animation="chowa_napis 2s , znika 1s forwards";

    setTimeout(() => {
        location.href=''+array[i]+'.html'; 
    }, 2100);
}




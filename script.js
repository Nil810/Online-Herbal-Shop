
var prod=document.querySelector(".prod-list");
var li=document.querySelector("#li-prod");
 li.addEventListener("mouseover",()=>{
prod.style.display="block";
 });
prod.addEventListener( "mouseout", ()=>{
    prod.style.display="none";
});

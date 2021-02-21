var entryform = document.getElementById("entryform");
var entriesSection = document.querySelector("#entries");
const entrytextbook= document.querySelector(".entry-textbook")
const entriesnav= document.querySelector(".entries-nav")


let count =1;
function preventrefresh(event){
    event.preventDefault();
    const entrydiv=document.createElement("div");
    entrydiv.className='single-entry';
    entrydiv.textContent=entrytextbook.value;
    entrydiv.style.display="none";
    entriesSection.appendChild(entrydiv);
    entrytextbook.value='';

    const displayEntryButton= document.createElement('button')
    displayEntryButton.className= "display-entry-button";
    displayEntryButton.textContent=count;
    entriesnav.appendChild(displayEntryButton);

    displayEntryButton.addEventListener('click',function(){
        const allentries=document.querySelectorAll('.single-entry');
        for(let index =0;index<allentries.length;index++){
           allentries[index].style.display="none";
        }
        entrydiv.style.display='block';

    })
    count++;
   
}
entryform.addEventListener('submit',preventrefresh)



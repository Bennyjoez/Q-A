let plusBtns = document.querySelectorAll('.plus');
console.log(plusBtns);

for(let i = 0; i < plusBtns.length; i++) {
    let button = plusBtns[i];
    
    button.addEventListener('click', function(e){
        button.style.display = "none"
        let parent = button.parentElement.parentElement;
        let minus = document.getElementsByClassName('minus')[i];
        minus.style.display = "block"
        let paragraph = parent.getElementsByTagName('p')[0];
        paragraph.style.display = "initial"
        // adding a dividing line within the paragragh
        let heading = document.getElementsByTagName('h2')[i]; 
        heading.style.borderBottom = "1px solid darkgray"
        heading.style.paddingBottom = "5px";
        heading.style.marginBottom = "10px"

        minus.addEventListener('click', function(e){
            button.style.display = "initial"
            paragraph.style.display = "none"
            minus.style.display = "none"
            heading.style.borderBottom = "none"
            heading.style.paddingBottom = "0";
            heading.style.marginBottom = "0"
        })

    })
}
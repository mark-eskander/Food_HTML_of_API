var btn = document.querySelectorAll("button");
var xhr =new XMLHttpRequest();

var temp = ``;
for (let i = 0; i < btn.length; i++) {

    

    btn[i].addEventListener("click", function () {
        
        for (let j = 0; j < btn.length; j++) {
            btn[j].classList.remove("border-4");
            btn[j].classList.remove("border-yellow-500");
            btn[j].classList.remove("border-solid");
        }


        btn[i].classList.add("border-4");
        btn[i].classList.add("border-yellow-500");
        btn[i].classList.add("border-solid");


        xhr.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${btn[i].textContent}`);
        xhr.send();
        xhr.addEventListener("readystatechange", function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText);
                console.log(data);
                temp=``;
                for (var k = 0; k < data.recipes.length; k++) {

                    temp += `<div id="card" class="h-96 p-2 bg-yellow-500 rounded-lg border-solid border-2 max-w-full m-2">

                    <a href="${data.recipes[k].source_url}" target="_blank">
                        <img  class ="h-1/2 block mx-auto  rounded-lg  hover:border-solid hover:shadow-lg hover:shadow-cyan-100  w-4/5" src="${data.recipes[k].image_url}" alt="Food image">
                    </a>
                <h2 class="text-3xl font-bold pt-1 break-words">${data.recipes[k].title}</h2>
                
                <a href="${data.recipes[k].publisher_url}" target="_blank"> <h4 class=" inline align-text-bottom underline text-blue-800 hover:text-red-500 -mb-2"> ${data.recipes[k].publisher}</h4></a>
                
                </div>` 
                

        
    }
    document.getElementById("container").innerHTML = temp;
}});
   
});
}
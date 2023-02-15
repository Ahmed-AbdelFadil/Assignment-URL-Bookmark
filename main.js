
urlName = document.getElementById("urlName");
urlLink =document.getElementById("urlLink");
repeatBox = document.querySelector(".box");
deleteButton= document.getElementById("deleteButton");
nameWarning= document.getElementById("nameWarning");
urlWarning= document.getElementById("urlWarning");

var urlArr;

(function() {
    if(localStorage.getItem("data")!=null ){
        urlArr=JSON.parse(localStorage.getItem("data"));
        display();
    }
    else { urlArr=[]; }
}())


function getData(){
    var urlObj={
        uName : urlName.value,
        uLink : urlLink.value
    }
    console.log( urlName.value);

    if(urlName.value == "" && urlLink.value == "" ){
        nameWarning.innerHTML="Name is required"
        nameWarning.style.cssText="display: block !important;"
        urlWarning.innerHTML="Url Field is required"
        urlWarning.style.cssText="display: block !important;"
    }
    else if( urlName.value == ""){
        nameWarning.innerHTML="Name is required"
        nameWarning.style.cssText="display: block !important;"
    }

    else if( urlLink.value == ""){
        urlWarning.innerHTML="Url Field is required"
        urlWarning.style.cssText="display: block !important;"
    }

    else{
        
        urlArr.push(urlObj);
        localStorage.setItem("data",JSON.stringify(urlArr))
        display()
        clearFunc()
    }
    

}


function display(){

var box=""

    for(var i=0; i<urlArr.length; i++){
    
    box += ` 
    <div class="url-block w-auto py-3 px-3 m-3" style="background-image: linear-gradient(0deg, rgba(255,255,255,1) 2%, rgba(238,238,238,1) 30%);" >
            
        <div class="url-item w-50 d-flex justify-content-between pe-5 py-2">
            <p class="fs-4 fw-bold">${urlArr[i].uName}</p>
            <div class="buttons d-flex justify-content-center align-items-center gap-2">
            <a href="${urlArr[i].uLink}" class="btn btn-primary d-block" target="_blank">Visit</a>
            <button id="deleteButton" class="btn btn-danger" onclick="deleteFunc(${i})">Delete</button>
            </div>
        </div>

    </div>`
    }

    repeatBox.innerHTML= box
}


function deleteFunc(index){
    urlArr.splice(index,1)
    localStorage.setItem("data",JSON.stringify(urlArr))
    display( )
}

function clearFunc(){
    urlName.value ="";
    urlLink.value ="";
}

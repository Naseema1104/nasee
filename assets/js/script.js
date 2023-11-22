//display current date in the header with id of currentDay
function displayDate(){    
    setInterval(function() {
        $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a')) 

    },1000 )
}

function save(e){
    var content = ($(e.target).parent().siblings()[1].innerText)
    var id = ($(e.target).parent().siblings()[1].id)
    console.log(id, content)
   
    localStorage.setItem(id,content)
}
function retrieve(){
    var local = Object.entries(localStorage)
    local.forEach(element => {
        $(`#${element[0]}`).text(element[1].replace(/"/g, ''))
    })
}

retrieve();
displayDate();
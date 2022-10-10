// vanilla
// var btnEl = document.querySelector(".saveBtn");
// console.log(btnEl);
// jquery
var savedContent = document.getElementById("#user-content");

renderUserContent();

var workDayArray = []
$('.saveBtn').on("click", function () {
   var description = $(this).siblings(".description").val()
//    console.log(description);
   var id = $(this).parent().attr("id")
//    console.log(id);
    var workDayObject = { 
        description:description, 
        id:id
    }
    workDayArray.push(workDayObject)
    console.log(workDayArray);
    localStorage.setItem("workday", JSON.stringify (workDayArray));
    
})

function renderUserContent() {
    var content = localStorage.getItem("textarea");

    savedContent.textContent = content;
}



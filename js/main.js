$(document).ready(function() {
    if (!localStorage.getItem("infoArray")) {
        localStorage.setItem("infoArray", JSON.stringify([{
            title: "titulo",
            content: "contenido",
        }]));
        newContent = localStorage.getItem("infoArray");
        newContent = JSON.parse(newContent);

    } else {
        newContent = localStorage.getItem("infoArray");
        newContent = JSON.parse(newContent);
        printCars();
    }

});

var newContent = [
{
  title:"titulo",
  content:"contenido"
}

]

// var newContent;
/*
var someArray = [
    "titulo",
    "contenido"
]

var someObject = {
    title: "titulo",
    content: "contenido",
}
[{
    title: "titulo",
    content: "contenido",
}]
*/

function printCars() {
    $("#content-data tbody").empty();
    console.log("printCars");
    for (i = 0; i < newContent.length; i++) {
        //debugger;
        // var objeto1 = newContent[i];
        // console.log(objeto1);
        // var newTitle = objeto1.title;
        // var newContent = objeto1.content;
        // console.log(newTitle, newContent);
        var contentHtml =
        '<div class="content-wrapper">' +
            '<h2 class="content-title">'
            + newContent[i] +
            '</h2>' +
            '<br>' +
            '<p class="content-text">' +
            + newContent[i] +
            '</p>' +
        '</div>'

        $("#content-data tbody").append(contentHtml);
    }
}

// function getNewContentData() {
//     var newTitle = $("#title-info").val();
//     var newContent = $("#content-info").val();
//     console.log(newTitle, newContent);
//     var newContentObject = {
//         title: newTitle,
//         content: newContent
//     }
//
//     newContent.push(newContentObject);
//     printCars();
//     console.log(newContent)
//     $("#add-content-data input").val("");
//
//     var newContentString = JSON.stringify(newContent)
//
//     localStorage.setItem("infoArray", newContentString);
// }

function getNewContentData() {
    var newTitle = $("#title-info").val();
    var newContent = $("#content-info").val();
    console.log(newTitle, newContent);
    var newContentObject = {
        title: newTitle,
        content: newContent
    };

    newContent.push(newContentObject);
    printCars();
    console.log(newContent)
    $("#add-content-data input").val("");

    var newContentString = JSON.stringify(newContent)

    localStorage.setItem("infoArray", newContentString);
}

$("#submit-button").on("click", function() {
    getNewContentData();
});



// $(document).ready(function() {
//     if (!localStorage.getItem("infoArray")) {
//         localStorage.setItem("infoArray", JSON.stringify([{
//             title: "titulo",
//             content: "contenido",
//         }]));
//         newContent = localStorage.getItem("infoArray");
//         newContent = JSON.parse(newContent);
//
//     } else {
//         newContent = localStorage.getItem("infoArray");
//         newContent = JSON.parse(newContent);
//         // printCars();
//     }
//
// });
//
// // function newContent() {
//   //
//   // title: "titulo",
//   // content: "contenido",
//
//
//
// // var someArray = [
// //     "titulo",
// //     "contenido"
// // ]
//
//
//
// function printCars() {
//     $("#content-data tbody").empty();
//     console.log("printCars");
//
//     function getNewContentData() {
//       var newTitle = $("#title-info").val();
//       var newContent = $("#content-info").val();
//       console.log(newTitle, newContent);
//       var newContentObject = {
//         title: newTitle,
//         content: newContent
//       }
//
//       newContent.push(newContentObject);
//       printCars();
//       console.log(newContent)
//       $("#add-content-data input").val("");
//
//       var newContentString = JSON.stringify(newContent)
//
//       localStorage.setItem("infoArray", newContentString);
//     }
//
//   }
//     for (i = 0; i < newContent.length; i++) {
//         //debugger;
//         var someObject =
//         [{
//           title: "titulo",
//           content: "contenido",
//         }]
//         var objeto1 = newContent[i];
//         console.log(objeto1);
//         var newTitle = objeto1.title;
//         var newContent = objeto1.content;
//         console.log(newTitle, newContent);
//         var contentHtml =
//           '<div class="content-wrapper">' +
//               '<h2 class="content-title">'
//               + newTitle[i] +
//               '</h2>' +
//               '<br>' +
//               '<p class="content-text">' +
//               + newContent[i] +
//               '</p>' +
//           '</div>'
//
//         $("#content-data tbody").append(contentHtml);
//     }
//
// $("#submit-button").on("click", function() {
//     getNewContentData();
// });

// jQuery - a library, design for DOM traversal, manipulation, event-handling, animations, Ajax


//CDN(content delivery network), syntax
//<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
//<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>

//syntax
//$ - alias
// jQuery

//select element from the DOM
// const $elementFromDOM = $('#idname')
// const $elementFromDOM = $('.classname')
// const $elementFromDOM = $('tagname')

let $article = $("#firstarticle");
console.log($article);


//add event handler/listen - on("event to listen", callbackfunc)
//.on()

let $btn = $("button");
$btn.on('click', () =>{
    $article.toggleClass("hidden");

    // if(($article).hasClass('hidden')) {
    //     $btn.text("Show")
    // } else {
    //     $btn.text("Hide")
    // }

    $btn.text(
         $article.hasClass('hidden') ? 'Show' : 'Hide'
    );
})


//animations with another events
//fade, slide,

let $header = $(".header");
// $header.on("mouseover", function(){
//     $header.text("We have changed this text from jQuery")
//     $header.css("font-style", "italic")
// }).on("mouseout", () =>{
//     $header.css({
//         color: "white",
//         "background-color": "green",
//     })
// })

$header.hover(
  function () {
    $header
      .text("We have changed this text from jQuery")
      .css({
        "font-style": "italic",
        "font-weight": "normal"
      });
  },
  function () {
    $header
      .text("Welcome to WIT 2025 Fall Cohort")
      .css({
        "font-style": "normal",
        "font-weight": "bold"
      });
  }
);


//fadeIn(), fadeOut(), fadeToggle() - 可加"slow", "fast" or ms(1000毫秒=1s)
//slideDown(), slideUp(), sliceToggle() 

$("#haughing").on("click", ()=>{
    $(".haha").slideToggle(); 
})

$("#aside").on("click", () =>{
    $("#aside").toggleClass("asidesection")
})


//siblings, children, document.ready event.currenttarget, find, closest

//siblings - access sibling element and perform opertion on the siliings

// $("h1").siblings().on("click", (event)=>{
//     $(event.currentTarget).css("color", "red")

//     console.log("current target is ", event.currentTarget)
// })

//children
$("section").children().css("background-color", "pink")

//parent
$("aside").closest().css("border", "10px solid green")

//document.ready
// $(document).ready(()=>{

// })

// window.onload = function() {
        
// }

// 這兩段都在做「等頁面載入完成後再執行程式」，但時機與用途不同。
// $(document).ready() 等 DOM 結構完成就跑；
// window.onload 等整個頁面（含圖片、影片）都載完才跑。


//find - 
$(".parentSection").find(".details").css("color", "green")

// $(".parentSection")          // 找到父層元素
//   .find(".details")          // 在「裡面」找後代
//   .css("color", "green");    // 改 CSS
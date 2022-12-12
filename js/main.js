// main.js
window.addEventListener('load',()=>{

    const gnb = document.querySelectorAll(".gnb>ul>li");
    //console.log(gnb);
    const gnb_inner = document.querySelector(".header_wrap");
    //console.log(gnb_inner);
    // gnb를 마우스오버시하면 각각의 gnb_inner에 .on이 붙어여한다.
    for(let i=0;i<gnb.length;i++){
        gnb[i].addEventListener("mouseover",(e)=>{
            e.currentTarget.classList.add("on");
            var ht = e.currentTarget.children[1].offsetHeight;
            gnb_inner.style.height = 70 + ht + 'px';
        })
        gnb[i].addEventListener("mouseout",(e)=>{
            e.currentTarget.classList.remove("on");
            gnb_inner.style.height = '70px';
        })/*포커스, 블러는 a에서 일어나야함으로 따로 지정함*/
        gnb[i].addEventListener("focus",(e)=>{// li>a
            e.currentTarget.parentElement.classList.add("on");
            var ht = e.currentTarget.nexteElementSibling.offsetHeight;//li>div
            gnb_inner.style.height = 70 + ht + 'px';
        })
        gnb[i].addEventListener("blur",(e=>{
            e.currentTarget.parentElement.classList.remove("on");
            gnb_inner.style.height = '70px';
        }))
    }


    //검색 박스 열고 닫기.
    const btn_srch = document.querySelector(".btn_srch");
    const srch_box = document.querySelector(".srch_wrap");
    const btn_srch_close = document.querySelector(".btn_srch_close")

    btn_srch.addEventListener("click",(e)=>{
        e.preventDefault();
        srch_box.classList.add("on");
    })
    btn_srch_close.addEventListener("click",(e)=>{
        e.preventDefault();
        srch_box.classList.remove("on");
    })

    // //top버튼
    const btnTop = document.querySelector('a.btn_top');

    window.addEventListener("scroll",()=>{
        let scroll = document.querySelector('html').scrollTop;
        //console.log(scroll);
        if(scroll <= 0){
            btnTop.classList.remove("on","ab");
        }else if(scroll>2700){/*선생님 2700*/
            btnTop.classList.add("ab")
        }else{
            btnTop.classList.remove("ab");
            btnTop.classList.add("on");
        }
    })

    btnTop.addEventListener("click",e=>{
        e.preventDefault();
        window.scroll({
            top:0,
            left:0,
            behavior:"smooth"
        })
    })

})


//스크롤
let content1_content_h2 = document.querySelector(".content1_content > h2");
let content1_content_ul = document.querySelector(".content1_content > ul");
let content1_content_newsletter = document.querySelector(".content1_content > .newsletter");
let content2 = document.querySelector(".content2");
let content2_content2_text1 = document.querySelector(".content2 > .content2_text1");
let content2_content2_text2 = document.querySelector(".content2 > .content2_text2");
let content2_img = document.querySelector(".content2 > img");
let content3_list_1_img = document.querySelector(".content3_list>li:nth-of-type(1)>a>.list_img");
let content3_list_1_text = document.querySelector(".content3_list>li:nth-of-type(1)>a>.list_text");
let content3_list_2_img = document.querySelector(".content3_list>li:nth-of-type(2)>a>.list_img");
let content3_list_2_text = document.querySelector(".content3_list>li:nth-of-type(2)>a>.list_text");
let content3_list_3_img = document.querySelector(".content3_list>li:nth-of-type(3)>a>.list_img");
let content3_list_3_text = document.querySelector(".content3_list>li:nth-of-type(3)>a>.list_text");

function scrollActive(el) {
    el.style.opacity = "1";
    el.style.transform = "translate3d(0,0,0)"
}

window.addEventListener("scroll",e=>{
    let scroll = document.querySelector("html").scrollTop;

    if(scroll > 300) scrollActive(content1_content_h2);
    if(scroll > 450) scrollActive(content1_content_ul);
    if(scroll > 870) scrollActive(content1_content_newsletter);
    if(scroll > 980) {
                    scrollActive(content2);
                    scrollActive(content2_content2_text1);
                    scrollActive(content2_content2_text2);
                    scrollActive(content2_img);
    }
    if(scroll > 2000) {
                    scrollActive(content3_list_1_img);
                    scrollActive(content3_list_1_text);
    }
    if(scroll > 2400) {
                    scrollActive(content3_list_2_img);
                    scrollActive(content3_list_2_text);
    }
    if(scroll > 2800) {
                    scrollActive(content3_list_3_img);  
                    scrollActive(content3_list_3_text);
    }
})



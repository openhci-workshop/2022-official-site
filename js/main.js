import { main } from "./tower.js"
import * as smoothscroll from './smoothscroll.js';

const scheduleInfo = {
    "前置工作坊": [
        {
            "08:00 ~ 09:00": "學員報到/各組相見歡",
            "09:00 ~ 10:00": "開場和破冰",
            "10:00 ~ 11:30": "演講",
            "12:00 ~ 13:00": "午餐",
            "13:00 ~ 14:00": "設計思考工作坊：同理、定義",
            "14:00 ~ 15:30": "演講",
            "15:30 ~ 17:00": "學員討論",
            "17:00 ~ 18:00": "晚餐",
            "18:00 ~ 19:00": "工具課程： Creative Coding",
            "19:00 ~ 20:30": "學員討論"
        },
        {
            "08:00 ~ 09:00": "學員報到",
            "09:00 ~ 10:00": "工具課程： SparkAR",
            "10:00 ~ 11:00": "設計思考工作坊：<br>發想、原型製作、測試",
            "11:00 ~ 12:00": "工具課程： Arduino",
            "12:00 ~ 13:00": "午餐",
            "13:00 ~ 15:00": "學員討論",
            "15:00 ~ 17:00": "小發表"
        }],
    "正式工作坊": [
        { 
            "08:00 ~ 09:00": "學員報到/各組相見歡",
            "09:00 ~ 11:00": "開場演講",
            "11:00 ~ 12:00": "學員討論",
            "12:00 ~ 13:00": "午餐",
            "13:00 ~ 15:00": "學員討論",
            "15:00 ~ 17:00": "期中提案",
            "17:00 ~ 18:00": "晚餐",
            "18:00 ~ 19:00": "行業動態：<br>學長姐經驗分享座談會",
            "19:00 ~ 20:00": "學員討論"
        },
        {
            "08:00 ~ 09:00": "學員報到",
            "09:00 ~ 10:30": "演講",
            "10:30 ~ 12:00": "顧問諮詢與交流",
            "12:00 ~ 13:00": "午餐",
            "13:00 ~ 15:30": "學員討論",
            "15:30 ~ 17:00": "演講",
            "17:00 ~ 18:00": "晚餐",
            "18:00 ~ 20:00": "學員討論"
        },
        {
            "08:00 ~ 09:00": "學員報到",
            "09:00 ~ 11:00": "學員討論",
            "11:00 ~ 12:00": "會場布置",
            "12:00 ~ 13:00": "午餐",
            "13:00 ~ 15:30": "期末發表",
            "15:30 ~ 17:30": "互動成果展示",
            "17:30 ~ 18:30": "頒獎 / 閉幕"
        }]
}

const groupInfo = {
    "COORDINATOR": {
        description: "總召組",
        member: [{
            "name": "陳昱安",
            "school": "國立政治大學",
            "department": "數位內容碩士學位學程"
        }, 
        {
            "name": "洪揚",
            "school": "國立陽明交通大學",
            "department": "傳播與科技學系"
        }, 
        {
            "name": "巫芊瑩",
            "school": "國立臺灣大學",
            "department": "資訊管理學系"
        }]
    },
    "GENERAL AFFAIRS": {
        description: "總務組",
        member: [{
            "name": "于庭歡",
            "school": "國立臺灣大學",
            "department": "經濟系"
        }]
    },
    "HUMAN RESOURCE": {
        description: "人事組",
        member: [{
            "name": "許筑涵",
            "school": "國立政治大學",
            "department": "企業管理學系 / 數位內容學程"
        },
        {
            "name": "曾雅婕",
            "school": "國立陽明交通大學",
            "department": "教育所數位學習組"
        },
        {
            "name": "盧姿惠",
            "school": "國立政治大學",
            "department": "公共行政學系 / 數位內容學程"
        }]
    },
    "PHOTOGRAPHY": {
        description: "攝影組",
        member: [{
            "name": "左雅致",
            "school": "崑山科技大學",
            "department": "資訊管理學系"
        },
        {
            "name": "丁容",
            "school": "國立臺灣大學",
            "department": "園藝暨景觀學系 景觀遊憩組"
        }]
    },
    "SPEECH HOST": {
        description: "演講組",
        member: [{
            "name": "吳冠霖",
            "school": "國立臺灣大學",
            "department": "工商管理學系"
        },
        {
            "name": "劉芷聿",
            "school": "國立政治大學",
            "department": "數位內容碩士學位學程"
        },
        {
            "name": "馮介怡",
            "school": "國立陽明交通大學",
            "department": "傳播與科技學系"
        }]
    },
    "SPONSORSHIP": {
        description: "贊助組",
        member: [{
            "name": "高慈憶",
            "school": "國立雲林科技大學",
            "department": "前瞻學士學位學程"
        },
        {
            "name": "劉佳昀",
            "school": "國立中山大學",
            "department": "中國文學系"
        }]
    },
    "WEB SERVICE": {
        description: "網管組",
        member: [{
            "name": "李欣霏",
            "school": "國立政治大學",
            "department": "數位內容碩士學位學程"
        },
        {
            "name": "楊馥蓉",
            "school": "國立政治大學",
            "department": "數位內容碩士學位學程"
        },
        {
            "name": "黃柏維",
            "school": "國立臺灣科技大學",
            "department": "電子工程系"
        }]
    },
    "DESIGN LECTURE": {
        description: "設計教學組",
        member: [{
            "name": "翁憶如",
            "school": "國立臺灣師範大學",
            "department": " 設計系 視覺設計組"
        },
        {
            "name": "袁婕",
            "school": "國立清華大學",
            "department": "服務科學研究所"
        },
        {
            "name": "姚怡均",
            "school": "國立陽明交通大學",
            "department": "傳播與科技學系"
        }]
    },
    "TECH LECTURE": {
        description: "技術教學組",
        member: [{
            "name": "黃詠瑞",
            "school": "國立政治大學",
            "department": "數位內容碩士學位學程"
        },
        {
            "name": "艾奎華",
            "school": "國立陽明交通大學",
            "department": "多媒體工程所"
        }]
    },
    "VISUAL DESIGN": {
        description: "視覺組",
        member: [{
            "name": "鞏持靚",
            "school": "國立政治大學",
            "department": "數位內容碩士學位學程"
        },
        {
            "name": "林芷萱",
            "school": "國立政治大學",
            "department": "數位內容碩士學位學程"
        },
        {
            "name": "范愷祐",
            "school": "國立政治大學",
            "department": "廣電系"
        },
        {
            "name": "李悦恩",
            "school": "臺北市立大學",
            "department": "城市發展系 / 視覺藝術系"
        },
        {
            "name": "吳泓玉",
            "school": "台南應用科技大學",
            "department": "服飾設計管理系"
        },
        {
            "name": "張瑞庭",
            "school": "國立政治大學",
            "department": "資訊管理 / 數位內容學程"
        }]
    },
    "PUBLICITY": {
        description: "媒體組",
        member: [{
            "name": "林雨翾",
            "school": "國立政治大學",
            "department": "廣告系 / 數位內容學程"
        },
        {
            "name": "林思穎",
            "school": "國立中央大學",
            "department": "法文系"
        },
        {
            "name": "許玟心",
            "school": "國立陽明交通大學",
            "department": "傳播所"
        },
        {
            "name": "甄曌珞",
            "school": "國立政治大學",
            "department": "廣告系 / 數位內容學程"
        }]
    },
    "TEACHING ASSISTANT": {
        description: "課程助教",
        member: [{
            "name": "徐薪淳",
            "school": "國立臺灣大學",
            "department": "心理所"
        },
        {
            "name": "卓宜璇",
            "school": "國立陽明交通大學",
            "department": "傳播與科技學系"
        },
        {
            "name": "賴宜君",
            "school": "國立陽明交通大學",
            "department": "傳播研究所"
        },
        {
            "name": "許立融",
            "school": "國立陽明交通大學",
            "department": "傳播研究所"
        },
        {
            "name": "周雨欣",
            "school": "國立清華大學",
            "department": "藝術與設計學系"
        },
        {
            "name": "金容安",
            "school": "東吳大學",
            "department": "心理所工商組"
        },
        {
            "name": "王秉中",
            "school": "國立臺灣藝術大學",
            "department": "圖文傳播藝術學系"
        },
        {
            "name": "黃永雯",
            "school": "國立臺灣大學",
            "department": "資訊工程學系 / 神經生物與認知科學學程"
        },
        {
            "name": "陳睿芊",
            "school": "國立清華大學",
            "department": "科管院學士班"
        },
        {
            "name": "曾紘遠",
            "school": "國立臺北科技大學",
            "department": "電子工程系"
        },
        {
            "name": "黃晴",
            "school": "國立清華大學",
            "department": "電機資訊學院學士班"
        },
        {
            "name": "林奕碩",
            "school": "國立台灣大學",
            "department": "資訊工程研究所"
        },
        {
            "name": "鄭伯俞",
            "school": "國立陽明交通大學",
            "department": "資訊工程研究所"
        },
        {
            "name": "高語萱",
            "school": "國立臺灣大學",
            "department": "資訊管理研究所"
        }]
    }
}

const speakerInfo = [{
    "name": "梁容輝",
    "title": "臺科大設計系 | 副教授",
    "profile_picture": "./image/speaker/梁容輝老師.jpg",
    "speech_title": "物件召喚的可能世界與纏結美學",
    "speech_description": "資訊科技快速發展的今日，設計物將具備更高的智能，以及更高的自主性與能動性。上世紀模態邏輯學及文學領域中所發展的可能世界理論，將人類所認知的實在(reality)從現實世界(actual world)拓展到可能世界(possible world)。然而，以人類為中心所建構的可能世界，正在面臨新的挑戰：智慧型的物件，如何邀請人類進入非人類中心的可能世界並召喚纏結的經驗。"
},{
    "name": "何樵暐",
    "title": "Digital Medicine Lab | 負責人",
    "profile_picture": "./image/speaker/profile_default_2.jpeg",
    "speech_title": "敬請期待",
    "speech_description": ""
},{
    "name": "敬請期待",
    "title": " ",
    "profile_picture": "./image/speaker/profile_default_2.jpeg",
    "speech_title": "",
    "speech_description": ""
},]

const previousWorkInfo = [{
    "index": 1,
    "name": "Eggy",
    "award": "最佳互動獎",
    "description": "透過 Eggy時光雞，使用者可以自訂倒數時間，當時間倒數結束，Eggy時光雞會以聲音提醒使用者物品已經長時間未使用，提供其丟棄的判斷依據；同時透過垃圾袋自動彈出，來增加使用者將物品丟棄的動力。此外，Eggy時光雞以小雞破蛋的可愛形象與親切提示音，增加互動的趣味性。",
    "url": "https://youtu.be/pCtAFKTj8-A",
    "imgUrl": "image/work1.png"
},{
    "index": 2,
    "name": "蒲呼呼",
    "award": "最佳故事獎",
    "description": "蒲呼呼是款讓離家子女能夠陪伴遠方家人的居家型互動燈光裝置。<br>使用者可利用蒲呼呼錄下平時無法當面說出口的關心話語，透過「吹熄」燈光發送錄音，就像吹送蒲公英的種子，將思念傳遞給遠方的家人。當家人在為植物澆水時，就蒙聽到語音訊息，並聯動讓使用者的蒲呼呼再度亮起。即使彼此分隔兩地，連結依舊生生不息。",
    "url": "https://youtu.be/Bi4Os9LyU5M",
    "imgUrl": "image/work2.png"
},{
    "index": 3,
    "name": "READEE",
    "award": "最佳簡報獎",
    "description": "經典，人們都認同其存在之重要性，卻深埋在彼此都不願碰觸的地底深處。呼應此次「莫比烏斯」舊物再造之精神,我們團隊將「出土」經典，向大眾推廣並協助他們理解經典。Readee將讓您體會到，經典便在生活之中，在我們的周遭，理解它不再是遙不可及的夢想！",
    "url": "https://youtu.be/icHVRLLE944",
    "imgUrl": "image/work3.png"
},{
    "index": 4,
    "name": "尋找湖泊",
    "award": "最佳造型獎",
    "description": "找到心的平靜 感受成長後的自己<br><br>我們如何幫助陷入失戀低潮者梳理混沌思緒、走出低潮迴圈？<br><br>「尋找湖泊」是一趟有終點的旅行。提供失戀者在旅途中透過語音心情記錄、沙遊世界建構、寄送與簽收他人沙遊風景明信片、與角色問答及反思等過程中進行自我覺察、釐清低潮時的混沌思緒,並勇於主動走到戶外體驗新環境跳脫迴圈場景。希望所有失戀者在旅程盡頭之處抵達象徵內心的湖泊時,能找到屬於自己的平靜、感受成長後的自己。",
    "url": "https://youtu.be/Av9xV6ZbyhY",
    "imgUrl": "image/work4.png"
},{
    "index": 5,
    "name": "memoscape.",
    "award": "最佳切題獎",
    "description": "「將日常回憶編織成一幅最美的風景。」<br><br>回憶，是日常的點滴，是經驗的積累，承載了人與人之間的羈絆，見證了痛苦、歡笑與成長。回憶，是舊的情感再度被喚起，是過去的種種再度陪伴身旁，時時提醒我們初衷，成為我們的精神支柱。但回憶不易保存，想要憶起過往也時常遇到重重阻礙，失去記憶讓我們忽視，生活的時時刻刻都十足珍貴。因此，我們設計了「memoscape」,融合了底片機與場記板，暗喻剪接珍貴的日常生活；同時結合記憶與日曆，將生活日常回憶化，打造出一張張刻錄生活、獨一無二的日曆卡。日曆卡拼接成畫，隨著日子的流逝，創造出僅屬於自己，一幅最美的風景。 讓使用者在不斷前進時，也可以感受到過往的溫度。<br><br>日子層層疊疊，過去的記憶形塑我們如今的樣貌，銘記每一天的重要的時刻，就是珍視一路走來的自己。",
    "url": "https://youtu.be/-8GBYjpyL1c",
    "imgUrl": "image/work5.png"
},{
    "index": 6,
    "name": "Walking Workie",
    "award": "最佳技術獎",
    "description": "疫情時代，遠距工作成為主流之一，改變實體辦公室中既有的互動關係，人與人之間的溝通習慣也被迫重新建立。以此為出發點，我們設計出「Walking Workie」，一個桌上型互動裝置，讓你化身為虛擬小人，在上班時間於裝置中漫步，並在其中關心同事的工作狀態，重建辦公室陪伴感，並讓團隊增進對彼此的理解與信任。",
    "url": "https://youtu.be/WEA_fWzaCG0",
    "imgUrl": "image/work6.png"
},{
    "index": 7,
    "name": "氛享",
    "award": "最佳人氣獎",
    "description": "用氣氛連結人與人之間最真誠的感受，創造溫暖的互動氛圍，進而讓年輕人獲得認同感。<br>#安心分享 #香氣回饋 #嗅覺體驗",
    "url": "https://youtu.be/ZOiKG2sW1_0",
    "imgUrl": "image/work7.png"
},{
    "index": 8,
    "name": "憶起亂掰",
    "award": "最佳Demo獎",
    "description": "現代的生活忙碌，人們已經習慣於科技幫助我們保存生活中的回憶，然而科技呈現回憶的方式無法激起人們的情緒感受，我們好奇，有沒有一種可以激起人們情緒感受的回憶方式？",
    "url": "https://youtu.be/YgKbFm13u4E",
    "imgUrl": "image/work8.png"
}]


let IOS = false;
const setHTML = document.querySelector('html');
function detectiOS() {
    if( [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
      ].includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document)){
        //alert("ios");
        //let scroll = new SmoothScroll('html', {easing: 'linear'});
        //smoothscroll.polyfill;
        IOS = true;
        setHTML.style.scrollBehavior = 'smooth';
      }
}
detectiOS();

$(function() {
// model position control
    let windowSize = window.matchMedia("(min-width: 768px)")
    let mainTower;
    function modelControl(size) {
        if (size.matches) { // If media query matches
            mainTower = main(750, -20, true);
        } else {
            mainTower = main(485, 0, false);
        }
        mainTower;
    }
    modelControl(windowSize) // Call listener function at run time
    windowSize.addListener(modelControl);    
//btn open
    $(".panel-collapse").on('show.bs.collapse', function() {
        $(this).siblings('.card_a_close').addClass('active');
        $(this).siblings('.card_d_close').addClass('active');
     //   console.log("open");
    })
    $('.panel-collapse').on('hide.bs.collapse', function () {
        $(this).siblings('.card_a_close').removeClass('active');
        $(this).siblings('.card_d_close').removeClass('active');
    //    console.log("hide");
    })

    // refresh when resize
    let $window = $(window);
    let width = $window.width();
    let height = $window.height();

    setInterval(function () {
        if ((width != $window.width())) {
            width = $window.width();
            height = $window.height();
            location.reload();
            //console.log("resized!");
        }
    }, 300);
    //when load reset tower
    window.onbeforeunload = () => {  
        window.scrollTo(0, 0);
    };


// page change
    $('.nav-link').on('click',function(){
        let POV = $($(this).attr('href'));
        //console.log(POV);
        //console.log(POV.offset().top);
        if(IOS){
            setHTML.style.scrollBehavior = 'auto';
            setTimeout(function(){
                setHTML.style.scrollBehavior = 'smooth';
            },800);
        }
        $('html,body').animate({scrollTop: (POV.offset().top - windowHeight*0.1), scrollLeft: 0},800, "linear");
    })
    let a = document.querySelector(".navbar-toggler");
    $(".navbar-nav li a").on("click",function () {
        a.click();
    });

//show section on scroll
    const ah = [];
    for (var i = 1; i <= 16; i++) { 
        var position = $(('section:nth-of-type('+i+')')).offset().top;
        
        ah[ i-1 ] = position;
    //    console.log(i+'p=' +position);
    //    console.log(i+'ap=' +ah);
    }

    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    //console.log('window h = ' + windowHeight);

    $(document).scroll(function() {
        $('html,body').scrollLeft(0);
        //mainTower.rotate_scroll();
        var scrollPos = $(this).scrollTop();
        for (var i = 1; i <= 16; i++) {
            if(scrollPos >= ah[i-1] - windowHeight/1.5){
                $(('section:nth-of-type('+i+')')).addClass('fade_in');
             //   console.log(scrollPos);
             //   console.log('show');
            }
        }

        for (var i = 14; i <= 15; i++) {
            if(scrollPos >= ah[i-1] - windowHeight/1.5){
                //console.log('show');
                $('section:nth-of-type('+i+') logo').addClass('fade_in_logo');
            }
        }

        // hide and show navbar
        let sc = $(window).scrollTop();
        let card_start = $("#theme").offset().top - window.innerHeight/4;
        //console.log('max height: ' + card_start);
        if(windowWidth > 768){
            if(sc > card_start){
                $("#top_navbar_computer").fadeIn(200);
                $("#com-navbar").fadeIn(800);
            }
            else{
                $("#com-navbar").fadeOut(200);
                $("#top_navbar_computer").fadeOut(800);
            }
        }
        else{
            if(sc > card_start){
                $("#top_navbar_phone").css("display", "flex");
                $("#top_navbar_phone").fadeIn(200);
                $('.menu-control').fadeOut();
            }
            else{
                $('.menu-control').fadeIn();
                $("#top_navbar_computer").fadeOut(200);
                $("#top_navbar_phone").fadeOut(200);
            }
        }
        
        // phone main page background
        // only work when head
        if(sc < windowHeight*1.5){
            let targetOpacity = 0.7;
            targetOpacity = (1 - sc/(windowHeight*0.8))*targetOpacity;
            $('.main_phone').css({
                'background-color': 'rgba(0, 0, 0, '+ targetOpacity +')',
                'box-shadow': 'inset 0px -30px 15px -10px rgba(34,34,34, ' + targetOpacity +')'
            });
        }
    })
});

//導航列位置指示
//scrollmagic init
let controller = new ScrollMagic.Controller();
// let sections = [$("#theme_href"),$("#speaker_href"),$("#schedule_href"),$("#Apply_href"),$("#FAQ_href"),$("#Group_href")];
let sections = [$("#theme"),$("#speaker"),$("#schedule"),$("#Apply"),$("#FAQ"),$("#Previous"),$("#Group"),$("#contant")];


for(let i=0; i<sections.length-1; i++) {
	let sectionId = sections[i].attr("id");
	let sectionHeight =  sections[i+1].offset().top - sections[i].offset().top;
	let scene = new ScrollMagic.Scene({triggerElement: "#"+sectionId, duration: sectionHeight})
	.setClassToggle("#menu"+i, "active")
	.addTo(controller);
}

function setNavBar(){
    $('.menu-control').css('display', 'none');
    $('#top_navbar_computer').css('display', 'none');
    $('#top_navbar_phone').css('display', 'none');
}

setNavBar();

// tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
})

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
}

function group_information_insertion() {
    const groupSection = document.querySelector("#Group .box");
    let member = ``;
    let text = ``;
    let windowSize = window.matchMedia("(min-width: 768px)")
    function newlineDetect(size) {
        if (size.matches) text = `&nbsp;&nbsp;`;
        else text = `<br>`;
    }
    newlineDetect(windowSize) // Call listener function at run time
    windowSize.addListener(newlineDetect); 
    for (const [key, value] of Object.entries(groupInfo)) {
        let content = `<div class="card_a" data-toggle="collapse" data-parent="#accordion" href="#collapse_${key}" aria-expanded="true" aria-controls="collapse_${key}">
                    <div class="card_a_close">
                        <card-title id="card_a_title"><t-20>${key}${text}${value.description}<t-20></card-title>
                        <i class="fa-solid fa-chevron-down" role="button" ></i>
                    </div>
                    <div id="collapse_${key}" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne" style="width: 100%;">
                        <div class="row group_member">`;
        value.member.forEach((person) => {
            content += `<div class="col-10 col-md-4 group_member_block">
                            <p><b style="font-size: 16px;">${person.name}</b><br>${person.school}<br>${person.department}</p>
                            </div>`
        })
        content += `</div></div></div>`
        member += content;
    }
    groupSection.insertAdjacentHTML("beforeend", member);
}

group_information_insertion();

function schedule_information_insertion(type) {
    const scheduleSection = document.querySelector("#carouselSchedule");
    const scheduleSectionPhone = document.querySelector("#schedule_phone .schedule_box");
    let workshop = ``;
    let endDiv = ``;
    switch(type) {
        case "desktop":
            workshop = `<div class="carousel-inner">`;
            endDiv = `</div></div>`;
            break;
        case "phone":
            endDiv = `</div>`;
            break;
    }
    for (const [key, value] of Object.entries(scheduleInfo)) {
        value.forEach((schedule, idx) => {
            let activeDiv = ``;
            if (type == "desktop") {
                activeDiv = (idx == 0 && key == "前置工作坊")  ? `<div class="carousel-item active">`: `<div class="carousel-item">`;
            }
            let start_date = 13;
            if(key=="正式工作坊") start_date = 26;
            let content = `${activeDiv}
                            <div class="card_b">
                                <card-title>
                                    <t-24>${key}</t-24>
                                    <br>
                                    <t-24><blue-text>8 / ${start_date + idx}・Day ${idx+1} </blue-text></t-24>
                                </card-title>`;
                                
            let index = 1;
            for (const [key, value] of Object.entries(schedule)) {
                content += `<div class="schedule-text">
                                <div class="left-text">${key}</div>  
                                <div class="right-text">${value}</div>
                            </div>`;
                if (index < Object.entries(schedule).length) {
                    content += "<white-line></white-line>";
                    index += 1;
                }
                
            }
            if( (idx == 1 && key == "前置工作坊") || (idx == 2 && key == "正式工作坊") ){
                content +=  `<button type="button" class="cta_btn" style="max-height: 100%; margin:auto; margin-bottom:5%;" onclick="window.open('https://docs.google.com/forms/d/e/1FAIpQLScXBW5Z-xjLmo55iADtUDajNS3eGo_OYl8kx2GOh-LEo0O-uA/viewform')">我要報名！</button> `;
            }
            if( (idx == 1 && key == "正式工作坊") ){
                content +=  `<button type="button" class="cta_btn nav-link" style="max-height: 100%; margin:auto; margin-bottom:5%;" href="#speaker">講者陣容</button> `;
            }
            content += endDiv;
            workshop += content;
        })
    }
    if (type == "desktop") {
        workshop += `</div>`;
        scheduleSection.insertAdjacentHTML("afterbegin", workshop);
    } else {
        scheduleSectionPhone.insertAdjacentHTML("afterbegin", workshop);
    }
}
schedule_information_insertion("phone");
schedule_information_insertion("desktop");

function previousWork_information_insertion(){
    const previousWorkSection = document.querySelector("#Previous .box");
    let workContent = ``;
    let rowSection = ``;
    previousWorkInfo.forEach((work, idx) => {
        if(idx % 2 == 0) {
            rowSection =`<div class="row justify-content-around">`
            workContent += rowSection;
        } else { rowSection = ``; }
        workContent += `<div class="col-12 col-md-6" style="margin: 0;">
            <div class="card_a" data-toggle="collapse" data-parent="#accordion" href="#work-${work.index}" aria-expanded="true" aria-controls="work-${work.index}">
                <div class="card_a_show">
                    <a href="${work.url}" target="_blank">
                        <img class="card_g_img" src="${work.imgUrl}" data-toggle="tooltip" data-placement="right" title="點擊圖片進入youtube"></a>
                    <card-title><t-20>${work.name}</t-20></card-title> <br>
                    <card-title><t-16>${work.award}</t-16></card-title> 
                </div>
                <div id="work-${work.index}" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                    <p>${work.description}</p>
                </div>
                <div class="card_a_close">
                    <i class="fa-solid fa-chevron-down" role="button" ></i>
                </div>
            </div>
        </div>`
        if((idx+1) % 2 == 0) {
            workContent += `</div>`;
        }
    })
    previousWorkSection.insertAdjacentHTML("beforeend", workContent);
}
previousWork_information_insertion();






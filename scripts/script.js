
servicechoice = "none"

colorswitch = "blue"
// let colorswitch = "purple"
// let colorswitch = "red"
// let colorswitch = "orange"
// let colorswitch = "yellow"
// let colorswitch = "green"

if (colorswitch == "blue" ) {
  const bkgrdjs = document.querySelector('#bkgrd')
  bkgrdjs.src = "images/1x/headerB.png"

  const bkgrdfooterjs = document.querySelector('#bkgrdfooter')
  bkgrdfooterjs.src = "images/1x/footerB.png"

}

// var idclick = document.getElementById("IDimage")


// var purpleclick = document.getElementsByClassName("pentagon")
// async function Purplefunction (event) {











var idclick = document.getElementById("IDimage")

async function IDfunction (event) {
            event.preventDefault()
            console.log("idclick function works")

            servicechoice = "identity"
            console.log(servicechoice)

            document.getElementById("editbox").style.visibility =`visible`;
            document.getElementById("footerjump").style.marginTop =`0px`;

            if (colorswitch == "blue" ) {
              // other color
              document.getElementById("servicebutton").style.backgroundColor =`#7b3ea2`;
              document.getElementById("statcta").style.backgroundColor =`#7b3ea2`;
              document.getElementById("testcta").style.backgroundColor =`#7b3ea2`;
              document.getElementById("bordering").style.borderColor =`#2f53d2`;

              // images color change
              const graybkgrdjs = document.querySelector('#graybkgrd')
              graybkgrdjs.src = "images/1x/midB.png"

              const leftjs = document.querySelector('#left')
              leftjs.src = "images/1x/leftB.png"

              const rightjs = document.querySelector('#right')
              rightjs.src = "images/1x/rightB.png"

              const botsemijs = document.querySelector('#botsemi')
              botsemijs.src = "images/1x/semiB.png"

              const botpentjs = document.querySelector('#botpent')
              botpentjs.src = "images/1x/pentB.png"

              const bottrijs = document.querySelector('#bottri')
              bottrijs.src = "images/1x/triB.png"

              const botsquarejs = document.querySelector('#botsquare')
              botsquarejs.src = "images/1x/squareB.png"

              const botcircjs = document.querySelector('#botcirc')
              botcircjs.src = "images/1x/circB.png"

              const botoctjs = document.querySelector('#botoct')
              botoctjs.src = "images/1x/octB.png"

              const midsemijs = document.querySelector('#midsemi')
              midsemijs.src = "images/1x/semiB.png"

              const midpentjs = document.querySelector('#midpent')
              midpentjs.src = "images/1x/pentB.png"

              const midtrijs = document.querySelector('#midtri')
              midtrijs.src = "images/1x/triB.png"

              const midsquarejs = document.querySelector('#midsquare')
              midsquarejs.src = "images/1x/squareB.png"

              const midcircjs = document.querySelector('#midcirc')
              midcircjs.src = "images/1x/circB.png"

              const midoctjs = document.querySelector('#midoct')
              midoctjs.src = "images/1x/octB.png"

              // color + content change
              const stat1imgjs = document.querySelector('#stat1img')
              stat1imgjs.src = "images/1x/iconmagnetB.png"

              const stat2imgjs = document.querySelector('#stat2img')
              stat2imgjs.src = "images/1x/iconarrowB.png"
              
              const stat3imgjs = document.querySelector('#stat3img')
              stat3imgjs.src = "images/1x/iconcheckB.png"

            }  else if (colorswitch == "purple") {
                  // other color
                  document.getElementById("servicebutton").style.backgroundColor =`#e15a8a`;
                  document.getElementById("statcta").style.backgroundColor =`#e15a8a`;
                  document.getElementById("testcta").style.backgroundColor =`#e15a8a`;
                  document.getElementById("bordering").style.borderColor =`#7b3ea2`;
              
                  // images color change
                  const graybkgrdjs = document.querySelector('#graybkgrd')
                  graybkgrdjs.src = "images/1x/midV.png"
              
                  const leftjs = document.querySelector('#left')
                  leftjs.src = "images/1x/leftV.png"
              
                  const rightjs = document.querySelector('#right')
                  rightjs.src = "images/1x/rightV.png"
              
                  const botsemijs = document.querySelector('#botsemi')
                  botsemijs.src = "images/1x/semiV.png"
              
                  const botpentjs = document.querySelector('#botpent')
                  botpentjs.src = "images/1x/pentV.png"
              
                  const bottrijs = document.querySelector('#bottri')
                  bottrijs.src = "images/1x/triV.png"
              
                  const botsquarejs = document.querySelector('#botsquare')
                  botsquarejs.src = "images/1x/squareV.png"
              
                  const botcircjs = document.querySelector('#botcirc')
                  botcircjs.src = "images/1x/circV.png"
              
                  const botoctjs = document.querySelector('#botoct')
                  botoctjs.src = "images/1x/octV.png"
              
                  const midsemijs = document.querySelector('#midsemi')
                  midsemijs.src = "images/1x/semiV.png"
              
                  const midpentjs = document.querySelector('#midpent')
                  midpentjs.src = "images/1x/pentV.png"
              
                  const midtrijs = document.querySelector('#midtri')
                  midtrijs.src = "images/1x/triV.png"
              
                  const midsquarejs = document.querySelector('#midsquare')
                  midsquarejs.src = "images/1x/squareV.png"
              
                  const midcircjs = document.querySelector('#midcirc')
                  midcircjs.src = "images/1x/circV.png"
              
                  const midoctjs = document.querySelector('#midoct')
                  midoctjs.src = "images/1x/octV.png"
              
                  // color + content change
                  const stat1imgjs = document.querySelector('#stat1img')
                  stat1imgjs.src = "images/1x/iconmagnetV.png"
              
                  const stat2imgjs = document.querySelector('#stat2img')
                  stat2imgjs.src = "images/1x/iconarrowV.png"
                  
                  const stat3imgjs = document.querySelector('#stat3img')
                  stat3imgjs.src = "images/1x/iconcheckV.png"

            } else if (colorswitch == "red") {

                  // other color
                  document.getElementById("servicebutton").style.backgroundColor =`#d18b30`;
                  document.getElementById("statcta").style.backgroundColor =`#d18b30`;
                  document.getElementById("testcta").style.backgroundColor =`#d18b30`;
                  document.getElementById("bordering").style.borderColor =`#e15a8a`;
              
                  // images color change
                  const graybkgrdjs = document.querySelector('#graybkgrd')
                  graybkgrdjs.src = "images/1x/midR.png"
              
                  const leftjs = document.querySelector('#left')
                  leftjs.src = "images/1x/leftR.png"
              
                  const rightjs = document.querySelector('#right')
                  rightjs.src = "images/1x/rightR.png"
              
                  const botsemijs = document.querySelector('#botsemi')
                  botsemijs.src = "images/1x/semiR.png"
              
                  const botpentjs = document.querySelector('#botpent')
                  botpentjs.src = "images/1x/pentR.png"
              
                  const bottrijs = document.querySelector('#bottri')
                  bottrijs.src = "images/1x/triR.png"
              
                  const botsquarejs = document.querySelector('#botsquare')
                  botsquarejs.src = "images/1x/squareR.png"
              
                  const botcircjs = document.querySelector('#botcirc')
                  botcircjs.src = "images/1x/circR.png"
              
                  const botoctjs = document.querySelector('#botoct')
                  botoctjs.src = "images/1x/octR.png"
              
                  const midsemijs = document.querySelector('#midsemi')
                  midsemijs.src = "images/1x/semiR.png"
              
                  const midpentjs = document.querySelector('#midpent')
                  midpentjs.src = "images/1x/pentR.png"
              
                  const midtrijs = document.querySelector('#midtri')
                  midtrijs.src = "images/1x/triR.png"
              
                  const midsquarejs = document.querySelector('#midsquare')
                  midsquarejs.src = "images/1x/squareR.png"
              
                  const midcircjs = document.querySelector('#midcirc')
                  midcircjs.src = "images/1x/circR.png"
              
                  const midoctjs = document.querySelector('#midoct')
                  midoctjs.src = "images/1x/octR.png"
              
                  // color + content change
                  const stat1imgjs = document.querySelector('#stat1img')
                  stat1imgjs.src = "images/1x/iconmagnetR.png"
              
                  const stat2imgjs = document.querySelector('#stat2img')
                  stat2imgjs.src = "images/1x/iconarrowR.png"
                  
                  const stat3imgjs = document.querySelector('#stat3img')
                  stat3imgjs.src = "images/1x/iconcheckR.png"

            } else if (colorswitch == "orange") {

                  // other color
                  document.getElementById("servicebutton").style.backgroundColor =`#d8d31d`;
                  document.getElementById("statcta").style.backgroundColor =`#d8d31d`;
                  document.getElementById("testcta").style.backgroundColor =`#d8d31d`;
                  document.getElementById("bordering").style.borderColor =`#d18b30`;
              
                  // images color change
                  const graybkgrdjs = document.querySelector('#graybkgrd')
                  graybkgrdjs.src = "images/1x/midO.png"
              
                  const leftjs = document.querySelector('#left')
                  leftjs.src = "images/1x/leftO.png"
              
                  const rightjs = document.querySelector('#right')
                  rightjs.src = "images/1x/rightO.png"
              
                  const botsemijs = document.querySelector('#botsemi')
                  botsemijs.src = "images/1x/semiO.png"
              
                  const botpentjs = document.querySelector('#botpent')
                  botpentjs.src = "images/1x/pentO.png"
              
                  const bottrijs = document.querySelector('#bottri')
                  bottrijs.src = "images/1x/triO.png"
              
                  const botsquarejs = document.querySelector('#botsquare')
                  botsquarejs.src = "images/1x/squareO.png"
              
                  const botcircjs = document.querySelector('#botcirc')
                  botcircjs.src = "images/1x/circO.png"
              
                  const botoctjs = document.querySelector('#botoct')
                  botoctjs.src = "images/1x/octO.png"
              
                  const midsemijs = document.querySelector('#midsemi')
                  midsemijs.src = "images/1x/semiO.png"
              
                  const midpentjs = document.querySelector('#midpent')
                  midpentjs.src = "images/1x/pentO.png"
              
                  const midtrijs = document.querySelector('#midtri')
                  midtrijs.src = "images/1x/triO.png"
              
                  const midsquarejs = document.querySelector('#midsquare')
                  midsquarejs.src = "images/1x/squareO.png"
              
                  const midcircjs = document.querySelector('#midcirc')
                  midcircjs.src = "images/1x/circO.png"
              
                  const midoctjs = document.querySelector('#midoct')
                  midoctjs.src = "images/1x/octO.png"
              
                  // color + content change
                  const stat1imgjs = document.querySelector('#stat1img')
                  stat1imgjs.src = "images/1x/iconmagnetO.png"
              
                  const stat2imgjs = document.querySelector('#stat2img')
                  stat2imgjs.src = "images/1x/iconarrowO.png"
                  
                  const stat3imgjs = document.querySelector('#stat3img')
                  stat3imgjs.src = "images/1x/iconcheckO.png"

            } else if (colorswitch == "yellow") {

                  // other color
                  document.getElementById("servicebutton").style.backgroundColor =`#32b96d`;
                  document.getElementById("statcta").style.backgroundColor =`#32b96d`;
                  document.getElementById("testcta").style.backgroundColor =`#32b96d`;
                  document.getElementById("bordering").style.borderColor =`#d8d31d`;
              
                  // images color change
                  const graybkgrdjs = document.querySelector('#graybkgrd')
                  graybkgrdjs.src = "images/1x/midY.png"
              
                  const leftjs = document.querySelector('#left')
                  leftjs.src = "images/1x/leftY.png"
              
                  const rightjs = document.querySelector('#right')
                  rightjs.src = "images/1x/rightY.png"
              
                  const botsemijs = document.querySelector('#botsemi')
                  botsemijs.src = "images/1x/semiY.png"
              
                  const botpentjs = document.querySelector('#botpent')
                  botpentjs.src = "images/1x/pentY.png"
              
                  const bottrijs = document.querySelector('#bottri')
                  bottrijs.src = "images/1x/triY.png"
              
                  const botsquarejs = document.querySelector('#botsquare')
                  botsquarejs.src = "images/1x/squareY.png"
              
                  const botcircjs = document.querySelector('#botcirc')
                  botcircjs.src = "images/1x/circY.png"
              
                  const botoctjs = document.querySelector('#botoct')
                  botoctjs.src = "images/1x/octY.png"
              
                  const midsemijs = document.querySelector('#midsemi')
                  midsemijs.src = "images/1x/semiY.png"
              
                  const midpentjs = document.querySelector('#midpent')
                  midpentjs.src = "images/1x/pentY.png"
              
                  const midtrijs = document.querySelector('#midtri')
                  midtrijs.src = "images/1x/triY.png"
              
                  const midsquarejs = document.querySelector('#midsquare')
                  midsquarejs.src = "images/1x/squareY.png"
              
                  const midcircjs = document.querySelector('#midcirc')
                  midcircjs.src = "images/1x/circY.png"
              
                  const midoctjs = document.querySelector('#midoct')
                  midoctjs.src = "images/1x/octY.png"
              
                  // color + content change
                  const stat1imgjs = document.querySelector('#stat1img')
                  stat1imgjs.src = "images/1x/iconmagnetY.png"
              
                  const stat2imgjs = document.querySelector('#stat2img')
                  stat2imgjs.src = "images/1x/iconarrowY.png"
                  
                  const stat3imgjs = document.querySelector('#stat3img')
                  stat3imgjs.src = "images/1x/iconcheckY.png"

            } else if (colorswitch == "green") {

                  // other color
                  document.getElementById("servicebutton").style.backgroundColor =`#2f53d2`;
                  document.getElementById("statcta").style.backgroundColor =`#2f53d2`;
                  document.getElementById("testcta").style.backgroundColor =`#2f53d2`;
                  document.getElementById("bordering").style.borderColor =`#32b96d`;
              
                  // images color change
                  const graybkgrdjs = document.querySelector('#graybkgrd')
                  graybkgrdjs.src = "images/1x/midG.png"
              
                  const leftjs = document.querySelector('#left')
                  leftjs.src = "images/1x/leftG.png"
              
                  const rightjs = document.querySelector('#right')
                  rightjs.src = "images/1x/rightG.png"
              
                  const botsemijs = document.querySelector('#botsemi')
                  botsemijs.src = "images/1x/semiG.png"
              
                  const botpentjs = document.querySelector('#botpent')
                  botpentjs.src = "images/1x/pentG.png"
              
                  const bottrijs = document.querySelector('#bottri')
                  bottrijs.src = "images/1x/triG.png"
              
                  const botsquarejs = document.querySelector('#botsquare')
                  botsquarejs.src = "images/1x/squareG.png"
              
                  const botcircjs = document.querySelector('#botcirc')
                  botcircjs.src = "images/1x/circG.png"
              
                  const botoctjs = document.querySelector('#botoct')
                  botoctjs.src = "images/1x/octG.png"
              
                  const midsemijs = document.querySelector('#midsemi')
                  midsemijs.src = "images/1x/semiG.png"
              
                  const midpentjs = document.querySelector('#midpent')
                  midpentjs.src = "images/1x/pentG.png"
              
                  const midtrijs = document.querySelector('#midtri')
                  midtrijs.src = "images/1x/triG.png"
              
                  const midsquarejs = document.querySelector('#midsquare')
                  midsquarejs.src = "images/1x/squareG.png"
              
                  const midcircjs = document.querySelector('#midcirc')
                  midcircjs.src = "images/1x/circG.png"
              
                  const midoctjs = document.querySelector('#midoct')
                  midoctjs.src = "images/1x/octG.png"
              
                  // color + content change
                  const stat1imgjs = document.querySelector('#stat1img')
                  stat1imgjs.src = "images/1x/iconmagnetG.png"
              
                  const stat2imgjs = document.querySelector('#stat2img')
                  stat2imgjs.src = "images/1x/iconarrowG.png"
                  
                  const stat3imgjs = document.querySelector('#stat3img')
                  stat3imgjs.src = "images/1x/iconcheckG.png"

            }
            
            // images no color change
            const example1js = document.querySelector('#example1')
            example1js.src = "images/1x/cat1.png"

            const example2js = document.querySelector('#example2')
            example2js.src = "images/1x/cat2.png"

            const example3js = document.querySelector('#example3')
            example3js.src = "images/1x/cat3.png"

            const example4js = document.querySelector('#example4')
            example4js.src = "images/1x/cat4.png"

            const example5js = document.querySelector('#example5')
            example5js.src = "images/1x/cat5.png"

            const example6js = document.querySelector('#example6')
            example6js.src = "images/1x/cat6.png"

            // const example7js = document.querySelector('#example7')
            // example7js.src = "images/1x/cat7.png"

            // const example8js = document.querySelector('#example8')
            // example8js.src = "images/1x/cat8.png"



            // Texto Chango
            const projhead = document.querySelector('#pasthead')
            projhead.innerText = "some branding and identity systems developed by shape shop"

            const seemorejs = document.querySelector('#seemore')
            seemorejs.innerText = "click here for more detail on past projects"

            const servhead = document.querySelector('#servicehead')
            servhead.innerText = "shape shop's identity and branding services include:"

            const semitext = document.querySelector('#servicetext1')
            semitext.innerText = "Research into your brand, story and message. \
            Study into your direct competitors. \"A deep understanding of how you \
            need to look, and why"

            const tritext = document.querySelector('#servicetext2')
            tritext.innerText = "Identity that conveys who you are, appeals to who you want to draw in, and stands apart from the competitors"

            const circtext = document.querySelector('#servicetext3')
            circtext.innerText = "Answer complicated questions such as branding during acquisitions and mergers, amongst partnerships and within parent and child brands"

            const penttext = document.querySelector('#servicetext4')
            penttext.innerText = "Visual branding deliverables include logos, branding strategy and style guides complete with brand colors, images, patterns, visual style and more"

            const squaretext = document.querySelector('#servicetext5')
            squaretext.innerText = "Our style guides leave no corner unturned: they include guidelines for your look and feel across media such as print, web and even video"

            const octtext = document.querySelector('#servicetext6')
            octtext.innerText = "Other optional deliverables include naming strategy, voice and tone guides and additional print and digital assets"

            const statheadjs = document.querySelector('#stathead')
            statheadjs.innerText = "shape shop's identity and branding service:"

            const stat1txtjs = document.querySelector('#stat1txt')
            stat1txtjs.innerText = "quality identity and branding allows you to stand out among competitors, attracting more clients"

            const stat2txtjs = document.querySelector('#stat2txt')
            stat2txtjs.innerText = "stay recognizable and memorable, leading to repeat business"

            const stat3txtjs = document.querySelector('#stat3txt')
            stat3txtjs.innerText = "appear trustworthy and polished, which creates more demand"

            const testheadjs = document.querySelector('#testhead')
            testheadjs.innerText = "what shape shops clients have to say about our identity and branding services:"

            const testimonialtextjs = document.querySelector('#testimonialtext')
            testimonialtextjs.innerText = "In this children's picture book, a spoiled Russian Blue cat living in a fancy hotel in Paris, France finds himself unable to enter the hotel one day."

            const servicebuttonjs = document.querySelector('#servicebutton')
            servicebuttonjs.innerText = "Contact Us!"

            const statctajs = document.querySelector('#statcta')
            statctajs.innerText = "Contact Us!"

            const testctajs = document.querySelector('#testcta')
            testctajs.innerText = "Contact Us!"

            // magically appear

}


var Printclick = document.getElementById("Printimage")

async function Printfunction (event) {
            event.preventDefault()
            console.log("printclick function works")

            servicechoice = "print"

            document.getElementById("editbox").style.visibility =`visible`;
            document.getElementById("footerjump").style.marginTop =`0px`;

            if (colorswitch == "blue" ) {
              // other color
              document.getElementById("servicebutton").style.backgroundColor =`#7b3ea2`;
              document.getElementById("statcta").style.backgroundColor =`#7b3ea2`;
              document.getElementById("testcta").style.backgroundColor =`#7b3ea2`;
              document.getElementById("bordering").style.borderColor =`#2f53d2`;

              // images color change
              const graybkgrdjs = document.querySelector('#graybkgrd')
              graybkgrdjs.src = "images/1x/midB.png"

              const leftjs = document.querySelector('#left')
              leftjs.src = "images/1x/leftB.png"

              const rightjs = document.querySelector('#right')
              rightjs.src = "images/1x/rightB.png"

              const botsemijs = document.querySelector('#botsemi')
              botsemijs.src = "images/1x/semiB.png"

              const botpentjs = document.querySelector('#botpent')
              botpentjs.src = "images/1x/pentB.png"

              const bottrijs = document.querySelector('#bottri')
              bottrijs.src = "images/1x/triB.png"

              const botsquarejs = document.querySelector('#botsquare')
              botsquarejs.src = "images/1x/squareB.png"

              const botcircjs = document.querySelector('#botcirc')
              botcircjs.src = "images/1x/circB.png"

              const botoctjs = document.querySelector('#botoct')
              botoctjs.src = "images/1x/octB.png"

              const midsemijs = document.querySelector('#midsemi')
              midsemijs.src = "images/1x/semiB.png"

              const midpentjs = document.querySelector('#midpent')
              midpentjs.src = "images/1x/pentB.png"

              const midtrijs = document.querySelector('#midtri')
              midtrijs.src = "images/1x/triB.png"

              const midsquarejs = document.querySelector('#midsquare')
              midsquarejs.src = "images/1x/squareB.png"

              const midcircjs = document.querySelector('#midcirc')
              midcircjs.src = "images/1x/circB.png"

              const midoctjs = document.querySelector('#midoct')
              midoctjs.src = "images/1x/octB.png"

              // color + content change
              const stat1imgjs = document.querySelector('#stat1img')
              stat1imgjs.src = "images/1x/iconpodB.png"

              const stat2imgjs = document.querySelector('#stat2img')
              stat2imgjs.src = "images/1x/iconbookB.png"
              
              const stat3imgjs = document.querySelector('#stat3img')
              stat3imgjs.src = "images/1x/iconhandsB.png"

            }  else if (colorswitch == "purple") {
                  // other color
                  document.getElementById("servicebutton").style.backgroundColor =`#e15a8a`;
                  document.getElementById("statcta").style.backgroundColor =`#e15a8a`;
                  document.getElementById("testcta").style.backgroundColor =`#e15a8a`;
                  document.getElementById("bordering").style.borderColor =`#7b3ea2`;
              
                  // images color change
                  const graybkgrdjs = document.querySelector('#graybkgrd')
                  graybkgrdjs.src = "images/1x/midV.png"
              
                  const leftjs = document.querySelector('#left')
                  leftjs.src = "images/1x/leftV.png"
              
                  const rightjs = document.querySelector('#right')
                  rightjs.src = "images/1x/rightV.png"
              
                  const botsemijs = document.querySelector('#botsemi')
                  botsemijs.src = "images/1x/semiV.png"
              
                  const botpentjs = document.querySelector('#botpent')
                  botpentjs.src = "images/1x/pentV.png"
              
                  const bottrijs = document.querySelector('#bottri')
                  bottrijs.src = "images/1x/triV.png"
              
                  const botsquarejs = document.querySelector('#botsquare')
                  botsquarejs.src = "images/1x/squareV.png"
              
                  const botcircjs = document.querySelector('#botcirc')
                  botcircjs.src = "images/1x/circV.png"
              
                  const botoctjs = document.querySelector('#botoct')
                  botoctjs.src = "images/1x/octV.png"
              
                  const midsemijs = document.querySelector('#midsemi')
                  midsemijs.src = "images/1x/semiV.png"
              
                  const midpentjs = document.querySelector('#midpent')
                  midpentjs.src = "images/1x/pentV.png"
              
                  const midtrijs = document.querySelector('#midtri')
                  midtrijs.src = "images/1x/triV.png"
              
                  const midsquarejs = document.querySelector('#midsquare')
                  midsquarejs.src = "images/1x/squareV.png"
              
                  const midcircjs = document.querySelector('#midcirc')
                  midcircjs.src = "images/1x/circV.png"
              
                  const midoctjs = document.querySelector('#midoct')
                  midoctjs.src = "images/1x/octV.png"
              
                  // color + content change
                  const stat1imgjs = document.querySelector('#stat1img')
                  stat1imgjs.src = "images/1x/iconpodV.png"
              
                  const stat2imgjs = document.querySelector('#stat2img')
                  stat2imgjs.src = "images/1x/iconbookV.png"
                  
                  const stat3imgjs = document.querySelector('#stat3img')
                  stat3imgjs.src = "images/1x/iconhandsV.png"

            } else if (colorswitch == "red") {

                  // other color
                  document.getElementById("servicebutton").style.backgroundColor =`#d18b30`;
                  document.getElementById("statcta").style.backgroundColor =`#d18b30`;
                  document.getElementById("testcta").style.backgroundColor =`#d18b30`;
                  document.getElementById("bordering").style.borderColor =`#e15a8a`;
              
                  // images color change
                  const graybkgrdjs = document.querySelector('#graybkgrd')
                  graybkgrdjs.src = "images/1x/midR.png"
              
                  const leftjs = document.querySelector('#left')
                  leftjs.src = "images/1x/leftR.png"
              
                  const rightjs = document.querySelector('#right')
                  rightjs.src = "images/1x/rightR.png"
              
                  const botsemijs = document.querySelector('#botsemi')
                  botsemijs.src = "images/1x/semiR.png"
              
                  const botpentjs = document.querySelector('#botpent')
                  botpentjs.src = "images/1x/pentR.png"
              
                  const bottrijs = document.querySelector('#bottri')
                  bottrijs.src = "images/1x/triR.png"
              
                  const botsquarejs = document.querySelector('#botsquare')
                  botsquarejs.src = "images/1x/squareR.png"
              
                  const botcircjs = document.querySelector('#botcirc')
                  botcircjs.src = "images/1x/circR.png"
              
                  const botoctjs = document.querySelector('#botoct')
                  botoctjs.src = "images/1x/octR.png"
              
                  const midsemijs = document.querySelector('#midsemi')
                  midsemijs.src = "images/1x/semiR.png"
              
                  const midpentjs = document.querySelector('#midpent')
                  midpentjs.src = "images/1x/pentR.png"
              
                  const midtrijs = document.querySelector('#midtri')
                  midtrijs.src = "images/1x/triR.png"
              
                  const midsquarejs = document.querySelector('#midsquare')
                  midsquarejs.src = "images/1x/squareR.png"
              
                  const midcircjs = document.querySelector('#midcirc')
                  midcircjs.src = "images/1x/circR.png"
              
                  const midoctjs = document.querySelector('#midoct')
                  midoctjs.src = "images/1x/octR.png"
              
                  // color + content change
                  const stat1imgjs = document.querySelector('#stat1img')
                  stat1imgjs.src = "images/1x/iconpodR.png"
              
                  const stat2imgjs = document.querySelector('#stat2img')
                  stat2imgjs.src = "images/1x/iconbookR.png"
                  
                  const stat3imgjs = document.querySelector('#stat3img')
                  stat3imgjs.src = "images/1x/iconhandsR.png"

            } else if (colorswitch == "orange") {

                  // other color
                  document.getElementById("servicebutton").style.backgroundColor =`#d8d31d`;
                  document.getElementById("statcta").style.backgroundColor =`#d8d31d`;
                  document.getElementById("testcta").style.backgroundColor =`#d8d31d`;
                  document.getElementById("bordering").style.borderColor =`#d18b30`;
              
                  // images color change
                  const graybkgrdjs = document.querySelector('#graybkgrd')
                  graybkgrdjs.src = "images/1x/midO.png"
              
                  const leftjs = document.querySelector('#left')
                  leftjs.src = "images/1x/leftO.png"
              
                  const rightjs = document.querySelector('#right')
                  rightjs.src = "images/1x/rightO.png"
              
                  const botsemijs = document.querySelector('#botsemi')
                  botsemijs.src = "images/1x/semiO.png"
              
                  const botpentjs = document.querySelector('#botpent')
                  botpentjs.src = "images/1x/pentO.png"
              
                  const bottrijs = document.querySelector('#bottri')
                  bottrijs.src = "images/1x/triO.png"
              
                  const botsquarejs = document.querySelector('#botsquare')
                  botsquarejs.src = "images/1x/squareO.png"
              
                  const botcircjs = document.querySelector('#botcirc')
                  botcircjs.src = "images/1x/circO.png"
              
                  const botoctjs = document.querySelector('#botoct')
                  botoctjs.src = "images/1x/octO.png"
              
                  const midsemijs = document.querySelector('#midsemi')
                  midsemijs.src = "images/1x/semiO.png"
              
                  const midpentjs = document.querySelector('#midpent')
                  midpentjs.src = "images/1x/pentO.png"
              
                  const midtrijs = document.querySelector('#midtri')
                  midtrijs.src = "images/1x/triO.png"
              
                  const midsquarejs = document.querySelector('#midsquare')
                  midsquarejs.src = "images/1x/squareO.png"
              
                  const midcircjs = document.querySelector('#midcirc')
                  midcircjs.src = "images/1x/circO.png"
              
                  const midoctjs = document.querySelector('#midoct')
                  midoctjs.src = "images/1x/octO.png"
              
                  // color + content change
                  const stat1imgjs = document.querySelector('#stat1img')
                  stat1imgjs.src = "images/1x/iconpodO.png"
              
                  const stat2imgjs = document.querySelector('#stat2img')
                  stat2imgjs.src = "images/1x/iconbookO.png"
                  
                  const stat3imgjs = document.querySelector('#stat3img')
                  stat3imgjs.src = "images/1x/iconhandsO.png"

            } else if (colorswitch == "yellow") {

                  // other color
                  document.getElementById("servicebutton").style.backgroundColor =`#32b96d`;
                  document.getElementById("statcta").style.backgroundColor =`#32b96d`;
                  document.getElementById("testcta").style.backgroundColor =`#32b96d`;
                  document.getElementById("bordering").style.borderColor =`#d8d31d`;
              
                  // images color change
                  const graybkgrdjs = document.querySelector('#graybkgrd')
                  graybkgrdjs.src = "images/1x/midY.png"
              
                  const leftjs = document.querySelector('#left')
                  leftjs.src = "images/1x/leftY.png"
              
                  const rightjs = document.querySelector('#right')
                  rightjs.src = "images/1x/rightY.png"
              
                  const botsemijs = document.querySelector('#botsemi')
                  botsemijs.src = "images/1x/semiY.png"
              
                  const botpentjs = document.querySelector('#botpent')
                  botpentjs.src = "images/1x/pentY.png"
              
                  const bottrijs = document.querySelector('#bottri')
                  bottrijs.src = "images/1x/triY.png"
              
                  const botsquarejs = document.querySelector('#botsquare')
                  botsquarejs.src = "images/1x/squareY.png"
              
                  const botcircjs = document.querySelector('#botcirc')
                  botcircjs.src = "images/1x/circY.png"
              
                  const botoctjs = document.querySelector('#botoct')
                  botoctjs.src = "images/1x/octY.png"
              
                  const midsemijs = document.querySelector('#midsemi')
                  midsemijs.src = "images/1x/semiY.png"
              
                  const midpentjs = document.querySelector('#midpent')
                  midpentjs.src = "images/1x/pentY.png"
              
                  const midtrijs = document.querySelector('#midtri')
                  midtrijs.src = "images/1x/triY.png"
              
                  const midsquarejs = document.querySelector('#midsquare')
                  midsquarejs.src = "images/1x/squareY.png"
              
                  const midcircjs = document.querySelector('#midcirc')
                  midcircjs.src = "images/1x/circY.png"
              
                  const midoctjs = document.querySelector('#midoct')
                  midoctjs.src = "images/1x/octY.png"
              
                  // color + content change
                  const stat1imgjs = document.querySelector('#stat1img')
                  stat1imgjs.src = "images/1x/iconpodY.png"
              
                  const stat2imgjs = document.querySelector('#stat2img')
                  stat2imgjs.src = "images/1x/iconbookY.png"
                  
                  const stat3imgjs = document.querySelector('#stat3img')
                  stat3imgjs.src = "images/1x/iconhandsY.png"

            } else if (colorswitch == "green") {

                  // other color
                  document.getElementById("servicebutton").style.backgroundColor =`#2f53d2`;
                  document.getElementById("statcta").style.backgroundColor =`#2f53d2`;
                  document.getElementById("testcta").style.backgroundColor =`#2f53d2`;
                  document.getElementById("bordering").style.borderColor =`#32b96d`;
              
                  // images color change
                  const graybkgrdjs = document.querySelector('#graybkgrd')
                  graybkgrdjs.src = "images/1x/midG.png"
              
                  const leftjs = document.querySelector('#left')
                  leftjs.src = "images/1x/leftG.png"
              
                  const rightjs = document.querySelector('#right')
                  rightjs.src = "images/1x/rightG.png"
              
                  const botsemijs = document.querySelector('#botsemi')
                  botsemijs.src = "images/1x/semiG.png"
              
                  const botpentjs = document.querySelector('#botpent')
                  botpentjs.src = "images/1x/pentG.png"
              
                  const bottrijs = document.querySelector('#bottri')
                  bottrijs.src = "images/1x/triG.png"
              
                  const botsquarejs = document.querySelector('#botsquare')
                  botsquarejs.src = "images/1x/squareG.png"
              
                  const botcircjs = document.querySelector('#botcirc')
                  botcircjs.src = "images/1x/circG.png"
              
                  const botoctjs = document.querySelector('#botoct')
                  botoctjs.src = "images/1x/octG.png"
              
                  const midsemijs = document.querySelector('#midsemi')
                  midsemijs.src = "images/1x/semiG.png"
              
                  const midpentjs = document.querySelector('#midpent')
                  midpentjs.src = "images/1x/pentG.png"
              
                  const midtrijs = document.querySelector('#midtri')
                  midtrijs.src = "images/1x/triG.png"
              
                  const midsquarejs = document.querySelector('#midsquare')
                  midsquarejs.src = "images/1x/squareG.png"
              
                  const midcircjs = document.querySelector('#midcirc')
                  midcircjs.src = "images/1x/circG.png"
              
                  const midoctjs = document.querySelector('#midoct')
                  midoctjs.src = "images/1x/octG.png"
              
                  // color + content change
                  const stat1imgjs = document.querySelector('#stat1img')
                  stat1imgjs.src = "images/1x/iconpodG.png"
              
                  const stat2imgjs = document.querySelector('#stat2img')
                  stat2imgjs.src = "images/1x/iconbookG.png"
                  
                  const stat3imgjs = document.querySelector('#stat3img')
                  stat3imgjs.src = "images/1x/iconhandsG.png"

            }
            
            // images no color change
            const example1js = document.querySelector('#example1')
            example1js.src = "images/1x/nug1.png"

            const example2js = document.querySelector('#example2')
            example2js.src = "images/1x/nug2.png"

            const example3js = document.querySelector('#example3')
            example3js.src = "images/1x/nug3.png"

            const example4js = document.querySelector('#example4')
            example4js.src = "images/1x/nug4.png"

            const example5js = document.querySelector('#example5')
            example5js.src = "images/1x/nug5.png"

            const example6js = document.querySelector('#example6')
            example6js.src = "images/1x/nug6.png"

            // const example7js = document.querySelector('#example7')
            // example7js.src = "images/1x/nug7.png"

            // const example8js = document.querySelector('#example8')
            // example8js.src = "images/1x/nug8.png"



            // Texto Chango
            const projhead = document.querySelector('#pasthead')
            projhead.innerText = "great prints and experienced crafted by shape shop"

            const seemorejs = document.querySelector('#seemore')
            seemorejs.innerText = "click here for more detail on past projects"

            const servhead = document.querySelector('#servicehead')
            servhead.innerText = "shape shop's print design services include:"

            const semitext = document.querySelector('#servicetext1')
            semitext.innerText = "anything that can be printed from menus and brochures to food trucks and trade show booths"

            const tritext = document.querySelector('#servicetext2')
            tritext.innerText = "complete file setup and communication with printers"

            const circtext = document.querySelector('#servicetext3')
            circtext.innerText = "scalability on paper prints: get the resources to always order more"

            const penttext = document.querySelector('#servicetext4')
            penttext.innerText = "this section has a lot of chicken nuggets"

            const squaretext = document.querySelector('#servicetext5')
            squaretext.innerText = "environmental prints, such as food trucks and booths, will attract clients and leave a lasting impresssion"

            const octtext = document.querySelector('#servicetext6')
            octtext.innerText = "another comment about chicken nuggets"

            const statheadjs = document.querySelector('#stathead')
            statheadjs.innerText = "shape shop's print design service helps you by:"

            const stat1txtjs = document.querySelector('#stat1txt')
            stat1txtjs.innerText = "developing environments that will help you stand apart from a crown and attract clients"

            const stat2txtjs = document.querySelector('#stat2txt')
            stat2txtjs.innerText = "create swag items that will leave a lasting impression with your clients"

            const stat3txtjs = document.querySelector('#stat3txt')
            stat3txtjs.innerText = "designing infomative pieces that make difficult messages easy to understand"

            const testheadjs = document.querySelector('#testhead')
            testheadjs.innerText = "what shape shops clients have to say about our print services:"

            const testimonialtextjs = document.querySelector('#testimonialtext')
            testimonialtextjs.innerText = "Took two young children for lunch and was surprised at how quickly we were served. Staff were friendly and helpful. We were handed balloons, crayons to take home and a printed table cloth to colour in."

            const servicebuttonjs = document.querySelector('#servicebutton')
            servicebuttonjs.innerText = "Contact Us!"

            const statctajs = document.querySelector('#statcta')
            statctajs.innerText = "Contact Us!"

            const testctajs = document.querySelector('#testcta')
            testctajs.innerText = "Contact Us!"

            // magically appear

}

var Digiclick = document.getElementById("Digiimage")

async function Digifunction (event) {
            event.preventDefault()
            console.log("Digiclick function works")

            servicechoice = "digital"

            document.getElementById("editbox").style.visibility =`visible`;
            document.getElementById("footerjump").style.marginTop =`0px`;

            if (colorswitch == "blue" ) {
              // other color
              document.getElementById("servicebutton").style.backgroundColor =`#7b3ea2`;
              document.getElementById("statcta").style.backgroundColor =`#7b3ea2`;
              document.getElementById("testcta").style.backgroundColor =`#7b3ea2`;
              document.getElementById("bordering").style.borderColor =`#2f53d2`;

              // images color change
              const graybkgrdjs = document.querySelector('#graybkgrd')
              graybkgrdjs.src = "images/1x/midB.png"

              const leftjs = document.querySelector('#left')
              leftjs.src = "images/1x/leftB.png"

              const rightjs = document.querySelector('#right')
              rightjs.src = "images/1x/rightB.png"

              const botsemijs = document.querySelector('#botsemi')
              botsemijs.src = "images/1x/semiB.png"

              const botpentjs = document.querySelector('#botpent')
              botpentjs.src = "images/1x/pentB.png"

              const bottrijs = document.querySelector('#bottri')
              bottrijs.src = "images/1x/triB.png"

              const botsquarejs = document.querySelector('#botsquare')
              botsquarejs.src = "images/1x/squareB.png"

              const botcircjs = document.querySelector('#botcirc')
              botcircjs.src = "images/1x/circB.png"

              const botoctjs = document.querySelector('#botoct')
              botoctjs.src = "images/1x/octB.png"

              const midsemijs = document.querySelector('#midsemi')
              midsemijs.src = "images/1x/semiB.png"

              const midpentjs = document.querySelector('#midpent')
              midpentjs.src = "images/1x/pentB.png"

              const midtrijs = document.querySelector('#midtri')
              midtrijs.src = "images/1x/triB.png"

              const midsquarejs = document.querySelector('#midsquare')
              midsquarejs.src = "images/1x/squareB.png"

              const midcircjs = document.querySelector('#midcirc')
              midcircjs.src = "images/1x/circB.png"

              const midoctjs = document.querySelector('#midoct')
              midoctjs.src = "images/1x/octB.png"

              // color + content change
              const stat1imgjs = document.querySelector('#stat1img')
              stat1imgjs.src = "images/1x/iconpointB.png"

              const stat2imgjs = document.querySelector('#stat2img')
              stat2imgjs.src = "images/1x/iconeyeB.png"
              
              const stat3imgjs = document.querySelector('#stat3img')
              stat3imgjs.src = "images/1x/iconcursorB.png"

            }  else if (colorswitch == "purple") {
                  // other color
                  document.getElementById("servicebutton").style.backgroundColor =`#e15a8a`;
                  document.getElementById("statcta").style.backgroundColor =`#e15a8a`;
                  document.getElementById("testcta").style.backgroundColor =`#e15a8a`;
                  document.getElementById("bordering").style.borderColor =`#7b3ea2`;
              
                  // images color change
                  const graybkgrdjs = document.querySelector('#graybkgrd')
                  graybkgrdjs.src = "images/1x/midV.png"
              
                  const leftjs = document.querySelector('#left')
                  leftjs.src = "images/1x/leftV.png"
              
                  const rightjs = document.querySelector('#right')
                  rightjs.src = "images/1x/rightV.png"
              
                  const botsemijs = document.querySelector('#botsemi')
                  botsemijs.src = "images/1x/semiV.png"
              
                  const botpentjs = document.querySelector('#botpent')
                  botpentjs.src = "images/1x/pentV.png"
              
                  const bottrijs = document.querySelector('#bottri')
                  bottrijs.src = "images/1x/triV.png"
              
                  const botsquarejs = document.querySelector('#botsquare')
                  botsquarejs.src = "images/1x/squareV.png"
              
                  const botcircjs = document.querySelector('#botcirc')
                  botcircjs.src = "images/1x/circV.png"
              
                  const botoctjs = document.querySelector('#botoct')
                  botoctjs.src = "images/1x/octV.png"
              
                  const midsemijs = document.querySelector('#midsemi')
                  midsemijs.src = "images/1x/semiV.png"
              
                  const midpentjs = document.querySelector('#midpent')
                  midpentjs.src = "images/1x/pentV.png"
              
                  const midtrijs = document.querySelector('#midtri')
                  midtrijs.src = "images/1x/triV.png"
              
                  const midsquarejs = document.querySelector('#midsquare')
                  midsquarejs.src = "images/1x/squareV.png"
              
                  const midcircjs = document.querySelector('#midcirc')
                  midcircjs.src = "images/1x/circV.png"
              
                  const midoctjs = document.querySelector('#midoct')
                  midoctjs.src = "images/1x/octV.png"
              
                  // color + content change
                  const stat1imgjs = document.querySelector('#stat1img')
                  stat1imgjs.src = "images/1x/iconpointV.png"
              
                  const stat2imgjs = document.querySelector('#stat2img')
                  stat2imgjs.src = "images/1x/iconeyeV.png"
                  
                  const stat3imgjs = document.querySelector('#stat3img')
                  stat3imgjs.src = "images/1x/iconcursorV.png"

            } else if (colorswitch == "red") {

                  // other color
                  document.getElementById("servicebutton").style.backgroundColor =`#d18b30`;
                  document.getElementById("statcta").style.backgroundColor =`#d18b30`;
                  document.getElementById("testcta").style.backgroundColor =`#d18b30`;
                  document.getElementById("bordering").style.borderColor =`#e15a8a`;
              
                  // images color change
                  const graybkgrdjs = document.querySelector('#graybkgrd')
                  graybkgrdjs.src = "images/1x/midR.png"
              
                  const leftjs = document.querySelector('#left')
                  leftjs.src = "images/1x/leftR.png"
              
                  const rightjs = document.querySelector('#right')
                  rightjs.src = "images/1x/rightR.png"
              
                  const botsemijs = document.querySelector('#botsemi')
                  botsemijs.src = "images/1x/semiR.png"
              
                  const botpentjs = document.querySelector('#botpent')
                  botpentjs.src = "images/1x/pentR.png"
              
                  const bottrijs = document.querySelector('#bottri')
                  bottrijs.src = "images/1x/triR.png"
              
                  const botsquarejs = document.querySelector('#botsquare')
                  botsquarejs.src = "images/1x/squareR.png"
              
                  const botcircjs = document.querySelector('#botcirc')
                  botcircjs.src = "images/1x/circR.png"
              
                  const botoctjs = document.querySelector('#botoct')
                  botoctjs.src = "images/1x/octR.png"
              
                  const midsemijs = document.querySelector('#midsemi')
                  midsemijs.src = "images/1x/semiR.png"
              
                  const midpentjs = document.querySelector('#midpent')
                  midpentjs.src = "images/1x/pentR.png"
              
                  const midtrijs = document.querySelector('#midtri')
                  midtrijs.src = "images/1x/triR.png"
              
                  const midsquarejs = document.querySelector('#midsquare')
                  midsquarejs.src = "images/1x/squareR.png"
              
                  const midcircjs = document.querySelector('#midcirc')
                  midcircjs.src = "images/1x/circR.png"
              
                  const midoctjs = document.querySelector('#midoct')
                  midoctjs.src = "images/1x/octR.png"
              
                  // color + content change
                  const stat1imgjs = document.querySelector('#stat1img')
                  stat1imgjs.src = "images/1x/iconpointR.png"
              
                  const stat2imgjs = document.querySelector('#stat2img')
                  stat2imgjs.src = "images/1x/iconeyeR.png"
                  
                  const stat3imgjs = document.querySelector('#stat3img')
                  stat3imgjs.src = "images/1x/iconcursorR.png"

            } else if (colorswitch == "orange") {

                  // other color
                  document.getElementById("servicebutton").style.backgroundColor =`#d8d31d`;
                  document.getElementById("statcta").style.backgroundColor =`#d8d31d`;
                  document.getElementById("testcta").style.backgroundColor =`#d8d31d`;
                  document.getElementById("bordering").style.borderColor =`#d18b30`;
              
                  // images color change
                  const graybkgrdjs = document.querySelector('#graybkgrd')
                  graybkgrdjs.src = "images/1x/midO.png"
              
                  const leftjs = document.querySelector('#left')
                  leftjs.src = "images/1x/leftO.png"
              
                  const rightjs = document.querySelector('#right')
                  rightjs.src = "images/1x/rightO.png"
              
                  const botsemijs = document.querySelector('#botsemi')
                  botsemijs.src = "images/1x/semiO.png"
              
                  const botpentjs = document.querySelector('#botpent')
                  botpentjs.src = "images/1x/pentO.png"
              
                  const bottrijs = document.querySelector('#bottri')
                  bottrijs.src = "images/1x/triO.png"
              
                  const botsquarejs = document.querySelector('#botsquare')
                  botsquarejs.src = "images/1x/squareO.png"
              
                  const botcircjs = document.querySelector('#botcirc')
                  botcircjs.src = "images/1x/circO.png"
              
                  const botoctjs = document.querySelector('#botoct')
                  botoctjs.src = "images/1x/octO.png"
              
                  const midsemijs = document.querySelector('#midsemi')
                  midsemijs.src = "images/1x/semiO.png"
              
                  const midpentjs = document.querySelector('#midpent')
                  midpentjs.src = "images/1x/pentO.png"
              
                  const midtrijs = document.querySelector('#midtri')
                  midtrijs.src = "images/1x/triO.png"
              
                  const midsquarejs = document.querySelector('#midsquare')
                  midsquarejs.src = "images/1x/squareO.png"
              
                  const midcircjs = document.querySelector('#midcirc')
                  midcircjs.src = "images/1x/circO.png"
              
                  const midoctjs = document.querySelector('#midoct')
                  midoctjs.src = "images/1x/octO.png"
              
                  // color + content change
                  const stat1imgjs = document.querySelector('#stat1img')
                  stat1imgjs.src = "images/1x/iconpointO.png"
              
                  const stat2imgjs = document.querySelector('#stat2img')
                  stat2imgjs.src = "images/1x/iconeyeO.png"
                  
                  const stat3imgjs = document.querySelector('#stat3img')
                  stat3imgjs.src = "images/1x/iconcursorO.png"

            } else if (colorswitch == "yellow") {

                  // other color
                  document.getElementById("servicebutton").style.backgroundColor =`#32b96d`;
                  document.getElementById("statcta").style.backgroundColor =`#32b96d`;
                  document.getElementById("testcta").style.backgroundColor =`#32b96d`;
                  document.getElementById("bordering").style.borderColor =`#d8d31d`;
              
                  // images color change
                  const graybkgrdjs = document.querySelector('#graybkgrd')
                  graybkgrdjs.src = "images/1x/midY.png"
              
                  const leftjs = document.querySelector('#left')
                  leftjs.src = "images/1x/leftY.png"
              
                  const rightjs = document.querySelector('#right')
                  rightjs.src = "images/1x/rightY.png"
              
                  const botsemijs = document.querySelector('#botsemi')
                  botsemijs.src = "images/1x/semiY.png"
              
                  const botpentjs = document.querySelector('#botpent')
                  botpentjs.src = "images/1x/pentY.png"
              
                  const bottrijs = document.querySelector('#bottri')
                  bottrijs.src = "images/1x/triY.png"
              
                  const botsquarejs = document.querySelector('#botsquare')
                  botsquarejs.src = "images/1x/squareY.png"
              
                  const botcircjs = document.querySelector('#botcirc')
                  botcircjs.src = "images/1x/circY.png"
              
                  const botoctjs = document.querySelector('#botoct')
                  botoctjs.src = "images/1x/octY.png"
              
                  const midsemijs = document.querySelector('#midsemi')
                  midsemijs.src = "images/1x/semiY.png"
              
                  const midpentjs = document.querySelector('#midpent')
                  midpentjs.src = "images/1x/pentY.png"
              
                  const midtrijs = document.querySelector('#midtri')
                  midtrijs.src = "images/1x/triY.png"
              
                  const midsquarejs = document.querySelector('#midsquare')
                  midsquarejs.src = "images/1x/squareY.png"
              
                  const midcircjs = document.querySelector('#midcirc')
                  midcircjs.src = "images/1x/circY.png"
              
                  const midoctjs = document.querySelector('#midoct')
                  midoctjs.src = "images/1x/octY.png"
              
                  // color + content change
                  const stat1imgjs = document.querySelector('#stat1img')
                  stat1imgjs.src = "images/1x/iconpointY.png"
              
                  const stat2imgjs = document.querySelector('#stat2img')
                  stat2imgjs.src = "images/1x/iconeyeY.png"
                  
                  const stat3imgjs = document.querySelector('#stat3img')
                  stat3imgjs.src = "images/1x/iconcursorY.png"

            } else if (colorswitch == "green") {

                  // other color
                  document.getElementById("servicebutton").style.backgroundColor =`#2f53d2`;
                  document.getElementById("statcta").style.backgroundColor =`#2f53d2`;
                  document.getElementById("testcta").style.backgroundColor =`#2f53d2`;
                  document.getElementById("bordering").style.borderColor =`#32b96d`;
              
                  // images color change
                  const graybkgrdjs = document.querySelector('#graybkgrd')
                  graybkgrdjs.src = "images/1x/midG.png"
              
                  const leftjs = document.querySelector('#left')
                  leftjs.src = "images/1x/leftG.png"
              
                  const rightjs = document.querySelector('#right')
                  rightjs.src = "images/1x/rightG.png"
              
                  const botsemijs = document.querySelector('#botsemi')
                  botsemijs.src = "images/1x/semiG.png"
              
                  const botpentjs = document.querySelector('#botpent')
                  botpentjs.src = "images/1x/pentG.png"
              
                  const bottrijs = document.querySelector('#bottri')
                  bottrijs.src = "images/1x/triG.png"
              
                  const botsquarejs = document.querySelector('#botsquare')
                  botsquarejs.src = "images/1x/squareG.png"
              
                  const botcircjs = document.querySelector('#botcirc')
                  botcircjs.src = "images/1x/circG.png"
              
                  const botoctjs = document.querySelector('#botoct')
                  botoctjs.src = "images/1x/octG.png"
              
                  const midsemijs = document.querySelector('#midsemi')
                  midsemijs.src = "images/1x/semiG.png"
              
                  const midpentjs = document.querySelector('#midpent')
                  midpentjs.src = "images/1x/pentG.png"
              
                  const midtrijs = document.querySelector('#midtri')
                  midtrijs.src = "images/1x/triG.png"
              
                  const midsquarejs = document.querySelector('#midsquare')
                  midsquarejs.src = "images/1x/squareG.png"
              
                  const midcircjs = document.querySelector('#midcirc')
                  midcircjs.src = "images/1x/circG.png"
              
                  const midoctjs = document.querySelector('#midoct')
                  midoctjs.src = "images/1x/octG.png"
              
                  // color + content change
                  const stat1imgjs = document.querySelector('#stat1img')
                  stat1imgjs.src = "images/1x/iconpointG.png"
              
                  const stat2imgjs = document.querySelector('#stat2img')
                  stat2imgjs.src = "images/1x/iconeyeG.png"
                  
                  const stat3imgjs = document.querySelector('#stat3img')
                  stat3imgjs.src = "images/1x/iconcursorG.png"

            }
            
            // images no color change
            const example1js = document.querySelector('#example1')
            example1js.src = "images/1x/couch1.png"

            const example2js = document.querySelector('#example2')
            example2js.src = "images/1x/couch2.png"

            const example3js = document.querySelector('#example3')
            example3js.src = "images/1x/couch3.png"

            const example4js = document.querySelector('#example4')
            example4js.src = "images/1x/couch4.png"

            const example5js = document.querySelector('#example5')
            example5js.src = "images/1x/couch5.png"

            const example6js = document.querySelector('#example6')
            example6js.src = "images/1x/couch6.png"

            // const example7js = document.querySelector('#example7')
            // example7js.src = "images/1x/couch7.png"

            // const example8js = document.querySelector('#example8')
            // example8js.src = "images/1x/couch8.png"



            // Texto Chango
            const projhead = document.querySelector('#pasthead')
            projhead.innerText = "some digital assets designed by shape shop"

            const seemorejs = document.querySelector('#seemore')
            seemorejs.innerText = "click here for more detail on past projects"

            const servhead = document.querySelector('#servicehead')
            servhead.innerText = "shape shop's a la cartedigital design services can include:"

            const semitext = document.querySelector('#servicetext1')
            semitext.innerText = "video and motion graphics services"

            const tritext = document.querySelector('#servicetext2')
            tritext.innerText = "digital ads as print, video or audio"

            const circtext = document.querySelector('#servicetext3')
            circtext.innerText = "website ux design"

            const penttext = document.querySelector('#servicetext4')
            penttext.innerText = "social media graphics to share on all platforms"

            const squaretext = document.querySelector('#servicetext5')
            squaretext.innerText = "landing page setups"

            const octtext = document.querySelector('#servicetext6')
            octtext.innerText = "setup of the look and feel of any digital software app you have"

            const statheadjs = document.querySelector('#stathead')
            statheadjs.innerText = "shape shop's digital design services:"

            const stat1txtjs = document.querySelector('#stat1txt')
            stat1txtjs.innerText = "modern UX design that’s as forward thinking as you are"

            const stat2txtjs = document.querySelector('#stat2txt')
            stat2txtjs.innerText = "eye catching social graphics to make your impressions turn to leads"

            const stat3txtjs = document.querySelector('#stat3txt')
            stat3txtjs.innerText = "ads that turn to clicks from terminus to tiktok"

            const testheadjs = document.querySelector('#testhead')
            testheadjs.innerText = "what shape shops clients have to say about digital design services:"

            const testimonialtextjs = document.querySelector('#testimonialtext')
            testimonialtextjs.innerText = "Ron and Lucy were very pleasant. They assisted me with my selections and were extremely patient as I contemplated my choices. The furniture is of great quality. I will definitely be buying again. Thanks Ron and Lucy!"

            const servicebuttonjs = document.querySelector('#servicebutton')
            servicebuttonjs.innerText = "Contact Us!"

            const statctajs = document.querySelector('#statcta')
            statctajs.innerText = "Contact Us!"

            const testctajs = document.querySelector('#testcta')
            testctajs.innerText = "Contact Us!"

            // magically appear

}

//collapse on switch
document.querySelectorAll('.botshape').forEach(collapseclick => {
  collapseclick.addEventListener('click', event => {

    event.preventDefault()
    console.log("you clicked the bottom")

    servicechoice = "none"


    

    document.getElementById("editbox").style.visibility =`hidden`;
    // document.getElementById("editbox").style.height =`10px`;
    document.getElementById("footerjump").style.marginTop =`-1050px`;

    window.scroll({
      top: 0, 
      left: 0, 
      // behavior: 'smooth'
    });



 
                      const graybkgrdjs = document.querySelector('#graybkgrd')
                      graybkgrdjs.src = ""
                  
                      const leftjs = document.querySelector('#left')
                      leftjs.src = ""
                  
                      const rightjs = document.querySelector('#right')
                      rightjs.src = ""
                  
                      const botsemijs = document.querySelector('#botsemi')
                      botsemijs.src = ""
                  
                      const botpentjs = document.querySelector('#botpent')
                      botpentjs.src = ""
                  
                      const bottrijs = document.querySelector('#bottri')
                      bottrijs.src = ""
                  
                      const botsquarejs = document.querySelector('#botsquare')
                      botsquarejs.src = ""
                  
                      const botcircjs = document.querySelector('#botcirc')
                      botcircjs.src = ""
                  
                      const botoctjs = document.querySelector('#botoct')
                      botoctjs.src = ""
                  
                      const midsemijs = document.querySelector('#midsemi')
                      midsemijs.src = ""
                  
                      const midpentjs = document.querySelector('#midpent')
                      midpentjs.src = ""
                  
                      const midtrijs = document.querySelector('#midtri')
                      midtrijs.src = ""
                  
                      const midsquarejs = document.querySelector('#midsquare')
                      midsquarejs.src = ""
                  
                      const midcircjs = document.querySelector('#midcirc')
                      midcircjs.src = ""
                  
                      const midoctjs = document.querySelector('#midoct')
                      midoctjs.src = ""
                  
                      // color + content change
                      const stat1imgjs = document.querySelector('#stat1img')
                      stat1imgjs.src = ""
                  
                      const stat2imgjs = document.querySelector('#stat2img')
                      stat2imgjs.src = ""
                      
                      const stat3imgjs = document.querySelector('#stat3img')
                      stat3imgjs.src = ""
    
                
                
                // images no color change
                const example1js = document.querySelector('#example1')
                example1js.src = ""
    
                const example2js = document.querySelector('#example2')
                example2js.src = ""
    
                const example3js = document.querySelector('#example3')
                example3js.src = ""
    
                const example4js = document.querySelector('#example4')
                example4js.src = ""
    
                const example5js = document.querySelector('#example5')
                example5js.src = ""
    
                const example6js = document.querySelector('#example6')
                example6js.src = ""
    
                // const example7js = document.querySelector('#example7')
                // example7js.src = ""
    
                // const example8js = document.querySelector('#example8')
                // example8js.src = ""
    
    
    
                // Texto Chango
                const projhead = document.querySelector('#pasthead')
                projhead.innerText = ""
    
                const seemorejs = document.querySelector('#seemore')
                seemorejs.innerText = ""
    
                const servhead = document.querySelector('#servicehead')
                servhead.innerText = ""
    
                const semitext = document.querySelector('#servicetext1')
                semitext.innerText = ""
    
                const tritext = document.querySelector('#servicetext2')
                tritext.innerText = ""
    
                const circtext = document.querySelector('#servicetext3')
                circtext.innerText = ""
    
                const penttext = document.querySelector('#servicetext4')
                penttext.innerText = ""
    
                const squaretext = document.querySelector('#servicetext5')
                squaretext.innerText = ""
    
                const octtext = document.querySelector('#servicetext6')
                octtext.innerText = ""
    
                const statheadjs = document.querySelector('#stathead')
                statheadjs.innerText = ""
    
                const stat1txtjs = document.querySelector('#stat1txt')
                stat1txtjs.innerText = ""
    
                const stat2txtjs = document.querySelector('#stat2txt')
                stat2txtjs.innerText = ""
    
                const stat3txtjs = document.querySelector('#stat3txt')
                stat3txtjs.innerText = ""
    
                const testheadjs = document.querySelector('#testhead')
                testheadjs.innerText = ""
    
                const testimonialtextjs = document.querySelector('#testimonialtext')
                testimonialtextjs.innerText = ""
    
                const servicebuttonjs = document.querySelector('#servicebutton')
                servicebuttonjs.innerText = ""
    
                const statctajs = document.querySelector('#statcta')
                statctajs.innerText = ""
    
                const testctajs = document.querySelector('#testcta')
                testctajs.innerText = ""

  })
})








// COLOR SWITCHIN

document.querySelectorAll('.semicircle').forEach(blueclick => {
  blueclick.addEventListener('click', event => {

    event.preventDefault()
    console.log(servicechoice)
  
    colorswitch = "blue"
    const bkgrdjs = document.querySelector('#bkgrd')
    bkgrdjs.src = "images/1x/headerB.png"
  
    const bkgrdfooterjs = document.querySelector('#bkgrdfooter')
    bkgrdfooterjs.src = "images/1x/footerB.png"

    if (servicechoice == "identity" ) {
      IDfunction (event)
    }
    if (servicechoice == "print" ) {
      Printfunction (event)
    }
    if (servicechoice == "digital" ) {
      Digifunction (event)
    }
  })
})

document.querySelectorAll('.pentagon').forEach(purpleclick => {
  purpleclick.addEventListener('click', event => {

    event.preventDefault()
    console.log("is purple now it works")
    console.log(servicechoice)
  
    colorswitch = "purple"
    const bkgrdjs = document.querySelector('#bkgrd')
    bkgrdjs.src = "images/1x/headerV.png"
  
    const bkgrdfooterjs = document.querySelector('#bkgrdfooter')
    bkgrdfooterjs.src = "images/1x/footerV.png"



    if (servicechoice == "identity" ) {
      console.log("purple and identity")
      IDfunction (event)
    }
    if (servicechoice == "print" ) {
      Printfunction (event)
    }
    if (servicechoice == "digital" ) {
      Digifunction (event)
    }
  })
})

document.querySelectorAll('.triangle').forEach(redclick => {
  redclick.addEventListener('click', event => {

    event.preventDefault()
    console.log("is red now it works")
    console.log(servicechoice)
  
    colorswitch = "red"
    const bkgrdjs = document.querySelector('#bkgrd')
    bkgrdjs.src = "images/1x/headerR.png"
  
    const bkgrdfooterjs = document.querySelector('#bkgrdfooter')
    bkgrdfooterjs.src = "images/1x/footerR.png"



    if (servicechoice == "identity" ) {
      console.log("red and identity")
      IDfunction (event)
    }
    if (servicechoice == "print" ) {
      Printfunction (event)
    }
    if (servicechoice == "digital" ) {
      Digifunction (event)
    }
  })
})

document.querySelectorAll('.square').forEach(orangeclick => {
  orangeclick.addEventListener('click', event => {

    event.preventDefault()
    console.log("is orange now it works")
    console.log(servicechoice)
  
    colorswitch = "orange"
    const bkgrdjs = document.querySelector('#bkgrd')
    bkgrdjs.src = "images/1x/headerO.png"
  
    const bkgrdfooterjs = document.querySelector('#bkgrdfooter')
    bkgrdfooterjs.src = "images/1x/footerO.png"



    if (servicechoice == "identity" ) {
      console.log("orange and identity")
      IDfunction (event)
    }
    if (servicechoice == "print" ) {
      Printfunction (event)
    }
    if (servicechoice == "digital" ) {
      Digifunction (event)
    }
  })
})

document.querySelectorAll('.circle').forEach(yellowclick => {
  yellowclick.addEventListener('click', event => {

    event.preventDefault()
    console.log("is yellow now it works")
    console.log(servicechoice)
  
    colorswitch = "yellow"
    const bkgrdjs = document.querySelector('#bkgrd')
    bkgrdjs.src = "images/1x/headerY.png"
  
    const bkgrdfooterjs = document.querySelector('#bkgrdfooter')
    bkgrdfooterjs.src = "images/1x/footerY.png"



    if (servicechoice == "identity" ) {
      console.log("yellow and identity")
      IDfunction (event)
    }
    if (servicechoice == "print" ) {
      Printfunction (event)
    }
    if (servicechoice == "digital" ) {
      Digifunction (event)
    }
  })
})

document.querySelectorAll('.octagon').forEach(greenclick => {
  greenclick.addEventListener('click', event => {

    event.preventDefault()
    console.log("is green now it works")
    console.log(servicechoice)
  
    colorswitch = "green"
    const bkgrdjs = document.querySelector('#bkgrd')
    bkgrdjs.src = "images/1x/headerG.png"
  
    const bkgrdfooterjs = document.querySelector('#bkgrdfooter')
    bkgrdfooterjs.src = "images/1x/footerG.png"



    if (servicechoice == "identity" ) {
      console.log("green and identity")
      IDfunction (event)
    }
    if (servicechoice == "print" ) {
      Printfunction (event)
    }
    if (servicechoice == "digital" ) {
      Digifunction (event)
    }
  })
})









// purpleclick.addEventListener('click', Purplefunction)
Digiclick.addEventListener('click', Digifunction)
Printclick.addEventListener('click', Printfunction)
idclick.addEventListener('click', IDfunction)

// image shifter:

document.getElementById("editbox").style.visibility =`hidden`;
// document.getElementById("editbox").style.height =`10px`;
document.getElementById("footerjump").style.marginTop =`-1050px`;




// TODO:

// jquery to end scroll at bottom
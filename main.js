// your code here
const tweetForm = document.querySelector('form');
const tweetLi = document.createElement('li');
const randomTweet = document.querySelector('#btn__new-tweet');
const viewAll = document.querySelector('#btn__view-all');

tweetForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let inputValue = newTweet();
    let date = new Date();
    let tweet = {...inputValue, created_at : date.format()};
    console.log(tweet);
    if (tweet.user === '') {
        alert('이름을 입력해주세요!')
    } else if (tweet.comment === '') {
        alert('내용을 입력해주세요!')
    } else {   
        makeDom(tweet);
        addData(tweet);
    }
})

function renderTweet() {
    for(let i = 0; i < DATA.length; i++) {
        makeDom(DATA[i]);
    }
}

renderTweet();

randomTweet.addEventListener('click', function() {
    //메소드를 사용해서 3개 랜덤 생성
    let randomTweet = [];
    for (let i = 0; i < 3; i++) {
        randomTweet.push(generateNewTweet())
    }
    //생성한 객체들을 데이터에 추가
    for (let i = 0; i < randomTweet.length; i++) {
        addData(randomTweet[i]);
    }
    //생성한 객체들을 HTML에 추가
    for (let i = 0; i < randomTweet.length; i++) {
        makeDom(randomTweet[i]);
    }
})

ul.addEventListener('click', function(e){
    if (e.target.id === 'twitt__name') {
        let tempArr = [];
        for (let i = 0; i < DATA.length; i++) {
            if (e.target.textContent === DATA[i].user) {
                tempArr.push(DATA[i]);
            }
        }

        removeTweet();
        
        for (let i = 0; i < tempArr.length; i++) {
            makeDom(tempArr[i]);
        }
    }
})

viewAll.addEventListener('click', function () {
    removeTweet();
    for(let i = 0; i < DATA.length; i++) {
        makeDom(DATA[i]);
    }
})
//event bubbling event capturing 나중에 검색
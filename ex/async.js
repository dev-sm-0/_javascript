
const sDate = new Date().getTime()

function getDiff() {
    return (new Date().getTime() - sDate) / 1000 + 's => '
}

async function fetchUser() {

    return 'async test';
}

const user = this.fetchUser();

user.then(console.log)

// await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(4000);
    return 'Apple';
}

async function getBanana() {
    await delay(3000);
    return 'Banana';
}

async function pickFruits() {
    const appleWait = getApple()
    const bananaWait = getBanana()

    const apple = await appleWait
    const banana = await bananaWait
    return getDiff() +  `${apple} + ${banana}`
}

pickFruits().then(console.log);

function pickAllFruits() {
    return Promise.all([getBanana(), getApple()])
    .then(fruits =>  getDiff() + fruits.join(' + '))
}

pickAllFruits().then(console.log)


function pickFruitsOne() {
    return Promise.race([getBanana(), getApple()]);
}

pickFruitsOne().then(console.log)
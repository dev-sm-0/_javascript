
async function fetchUser() {

    return 'kim';
}

const user = this.fetchUser();

user.then(console.log)

// await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return 'Apple';
}

async function getBanana() {
    await delay(2000);
    return 'Banana';
}

async function pickFruits() {
    const appleWait = getApple()
    const bananaWait = getBanana()

    const apple = await appleWait
    const banana = await bananaWait
    return `${apple} + ${banana}`
}

pickFruits().then(console.log);

function pickAllFruits() {
    return Promise.all([getBanana(), getApple()])
    .then(fruits => fruits.join(' + '))
}

pickAllFruits().then(console.log)


function pickFruitsOne() {
    return Promise.race([getBanana(), getApple()]);
}

pickFruitsOne().then(console.log)
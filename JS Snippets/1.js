for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        // console.log(i)
        a(i)
    }, 1000);
}

for (let i = 10; i < 15; i++) {
    setTimeout(() => {
        a(i);
        // console.log(i + 1)
    }, 1000);
}

function a(i) {
    console.log(i);
}
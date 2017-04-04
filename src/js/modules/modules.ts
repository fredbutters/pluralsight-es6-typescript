function doStuff(...stuff: string[]) {
    stuff.forEach(item => { console.log(item) });
}

function complain(...gripes: string[]) {
    gripes.forEach(gripe => {
        console.log(gripe);
    })
}
export { doStuff as default, complain };

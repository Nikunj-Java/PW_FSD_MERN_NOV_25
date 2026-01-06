// loop within loop

/*
for (initialization ;condition ;increment) {

    for (initialization; condition ;increment) {

    }

}*/

for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 2; j++) {

        for (let k = 1; k <= 1; k++) {

            console.log(i, j,k)
        }
    }

}
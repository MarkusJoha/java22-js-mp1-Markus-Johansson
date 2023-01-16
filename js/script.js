let rowNumber = 1;

for (let i = 0; i < 5; i++) {
    const h1 = document.createElement('h1');
    const hue = 120 + (120 * i / 5 - 1);
    h1.innerText = 'Rad ' + rowNumber;
    h1.style.fontSize = `${12 + i * 5}px`;
    rowNumber++;
    h1.style.textAlign = `center`;
    h1.style.background = `hsl(${hue}, 80%, 85%)`;
    h1.style.color = 'hsl(240, 100%, 70%)';
    document.body.append(h1);
}

const mainDiv = document.createElement('div');
document.body.append(mainDiv);
mainDiv.style.border = `2px solid black`;
mainDiv.style.display = 'flex';
mainDiv.style.justifyContent = 'space-evenly';
mainDiv.style.padding = '75px 0px';

const array = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];

for (let i = 0; i < 3; i++) {
    const subDiv = document.createElement('div');
    mainDiv.append(subDiv);
    subDiv.style.background = '#a8a8f0';
    subDiv.style.padding = '10px';

    for (let x = 0; x < 10; x++) {
        const p = document.createElement('p');
        p.style.margin = '0';
        p.style.width = '40px';
        subDiv.append(p);
    }
    const pAll = document.querySelectorAll('p');

    if (i == 0) {
        for (let z = 0; z < 10; z++) {
            pAll[z].innerText = z;
            if (z % 2 == 0) {
                pAll[z].style.background = 'black';
                pAll[z].style.color = 'white';
            }
            else {
                pAll[z].style.background = ' white';
            }
        }
        pAll[4].style.background = 'inherit';
    }
    else if (i == 1) {
        for (let z = 0; z < 10; z++) {
            pAll[10 + z].innerText = 9 - z;
            pAll[10 + z].style.textAlign = 'center';
            if (z % 2 == 0) {
                pAll[10 + z].style.background = 'white'
            }
            else {
                pAll[10 + z].style.background = 'black';
                pAll[10 + z].style.color = 'white';
            }
        }
        pAll[10 + 1].style.background = 'inherit';

    }
    else {
        for (let z = 0; z < 10; z++) {
            pAll[20 + z].innerText = array[z];
            pAll[20 + z].style.textAlign = 'right';
            if (z % 2 == 0) {
                pAll[20 + z].style.background = 'black';
                pAll[20 + z].style.color = 'white';
            }
            else {
                pAll[20 + z].style.background = 'white';
            }
        }
        pAll[25].style.background = 'inherit';
    }



}
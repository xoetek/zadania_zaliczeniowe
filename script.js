document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    const pageCont = document.createElement('div');    
    const header = document.createElement('header');
    header.textContent = 'One Piece is real';
    pageCont.id = 'pageCont';

    const leftSection = document.createElement('div');
    leftSection.id = 'left-section';
    leftSection.textContent = 'Podgląd';
    
    const button = document.createElement('button');
    button.id = 'expandSection';
    button.onclick = () => {
        leftSection.classList.toggle('expanded')
        for(i=0;i<leftSection.children.length;i++){
            leftSection.children[i].classList.toggle('prevExpanded')
        }

    };
    
    const imgSrc = [
        'img/1.png',
        'img/2.png',
        'img/3.png',
        'img/4.jpg'
    ];
    const imgView = document.createElement('div');
    imgSrc.forEach((src, i) =>{
        const img = document.createElement('img');
        const prev = document.createElement('img');
        if (i === 0) img.classList.add('activeImg');
        img.classList.add('stackedImg');
        img.src = src;
        prev.classList.add('prev')
        prev.src = src;
        imgView.appendChild(img);
        leftSection.appendChild(prev);
    });
    
    const imgButtonLeft = document.createElement('button');
    const imgButtonRight = document.createElement('button');
    imgButtonLeft.classList.add('imgButton');
    imgButtonLeft.textContent = '<<';
    imgButtonRight.classList.add('imgButton');
    imgButtonRight.textContent = '>>';
    let currInd = 0;
    imgButtonLeft.onclick = () => {
        if (currInd === 0){
            imgView.children[0].classList.remove('activeImg');
            imgView.children[imgSrc.length-1].classList.add('activeImg');
            currInd = imgSrc.length - 1;
        }
        else{
            imgView.children[currInd].classList.remove('activeImg');
            imgView.children[currInd-1].classList.add('activeImg');
            currInd--;
            console.log(currInd);
        }
    }
    imgButtonRight.onclick = () => {
        console.log(currInd)
        if (currInd  === imgSrc.length-1){
            imgView.children[currInd].classList.remove('activeImg');
            imgView.children[0].classList.add('activeImg');
            currInd = 0;
        }
        else{
            imgView.children[currInd].classList.remove('activeImg');
            imgView.children[currInd+1].classList.add('activeImg');
            currInd++;
        }
    }
    const foot = document.createElement('footer');
    foot.textContent = 'This site was brought to you by Marcin Nisio'
    app.appendChild(header);
    app.appendChild(leftSection);
    app.appendChild(button);
    app.appendChild(pageCont);
    pageCont.appendChild(imgView);
    pageCont.appendChild(imgButtonLeft);
    pageCont.appendChild(imgButtonRight);
    app.appendChild(foot);
  });
import React,{useEffect} from 'react';

const KonamiCode = () => {
    useEffect(() => {
        const allowedKeys = {
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down',
            65: 'a',
            66: 'b'
        }
        //Konami code sequence
        const konamiCode = ['up','up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a']
        let position = 0;
    
        document.addEventListener('keydown', (e) => {
            let key = allowedKeys[e.keyCode];
            let requiredKey = konamiCode[position];
    
            if (key === requiredKey) {
                position++;
    
                if (position === konamiCode.length) {
                    activateCheats();
                    position = 0;
                }
            } else {
                position = 0;
            }
        });
        
        let audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
    const activateCheats = () => {
        audio.play();
    }
    }, [])
    
    

    return <div></div>
}

export default KonamiCode;
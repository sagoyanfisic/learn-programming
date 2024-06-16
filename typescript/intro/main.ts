// tuplas
(() => {    
    const here: [string, number, boolean] = ["typescript",  100, false];
})();

// Enum
(() => {    
    enum AudioLevel {
        low = 1,
        medium = 2,
        high = 3
    }

    const currentAudio = AudioLevel.low;
    console.log(currentAudio);
    console.log(currentAudio)

    //let audioLevel: number = 1;
})();

// void
(() => {    
    function callBatman():void {
       // return 1;  no valid
    }
     
    const callSuperman = ():void => {
        return;
    }


    const a = callBatman()
    console.log(a)
})();

// Never
(() => {    
    const abc = ():never => {
        
    }
    abc()

    const error = (message: string): never => {
        throw new Error(message);
    }
    error('Error en la aplicación');
    console.log('Este mensaje no se muestra');

    const error = (message: string):(never|number) => {
        if (false) {
            throw new Error(message);    
        }
        return 1;

    }
    error('Error en la aplicación');
    console.log('Este mensaje no se muestra');

})();

// Null and Undefined
(() => {    
    let nada: undefined = undefined; // no valid
    let nada: undefined = null; // no valid
    let isActive: boolean = null; // valid

    // true, false, null, undefined son valores primitivos y permitidos en boolean
    console.log(isActive);

    console.log(nada);\


})();
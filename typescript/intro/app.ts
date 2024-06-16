(() => {

    // Tipos
    const batman: = 'Bruce';
    const superman = 'Clark';

    const existe = false;

    // resolucion de la promesa
    const batmain: string = 'Bruce';
    const superman: string = 'Clark';

    const existe: boolean = false;

  
    // Tuplas
    const parejaHeroes[] = [batman,superman];
    const villano = ['Lex Lutor',5,true];

    const parejaHeroes: [string, string] = [batman,superman];
    const villano: [string, number, boolean] = ['Lex Lutor',5,true];

    // Arreglos
    const aliados = ['Mujer Maravilla','Acuaman','San', 'Flash'];
    const aliados: string [] = ['Mujer Maravilla','Acuaman','San', 'Flash'];

  
    //Enumeraciones
    const fuerzaFlash = 5;
    const fuerzaSuperman = 100;
    const fuerzaBatman = 1;
    const fuerzaAcuaman = 0;

    enum Fuerza {
      flash = 5,
      superman = 100,
      batman = 1,
      acuaman = 0
    }

    const fuerzaAcuaman: Fuerza = Fuerza.acuaman;
    const fuerzaFlash: Fuerza = Fuerza.flash;
    const fuerzaSuperman: Fuerza = Fuerza.superman;
    const fuerzaBatman: Fuerza = Fuerza.batman;


    // Retorno de funciones
    function activar_batiseñal(){
      return 'activada';
    }

    function activar_batiseñal(): string {
      return 'activada';
    }
  
    function pedir_ayuda(){
      console.log('Auxilio!!!');
    }

    function pedir_ayuda(): void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
  })()
  
  
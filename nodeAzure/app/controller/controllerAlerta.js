class ControllerAlerta{
    constructor(valor){

        this.valor = valor
        this.i=0;
        this.chamar=true;
        this.alerta=false;

    }

    compara(valor){


        if(valor >= 3.5 && valor <= 6.5){
            console.log('estado ok')
        }
        else if(valor >= 2.5 && valor <= 7.5){
            if(this.chamar){

                this.disparar('pisca_yellow');
            }
            else if(this.alerta){
                console.log('alertaaa');
            }


        }else{

             this.disparar('stop_yellow');


        }

       



    }

    disparar(value){
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        global.socket_io.emit(`${value}`);
        this.contagem();

    }
    contagem(){
        this.chamar=false;
        setTimeout(function(){
            this.alerta=true;
        },10)



    }




}

module.exports=ControllerAlerta;
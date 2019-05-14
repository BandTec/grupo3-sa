var sql = require('./repositorio');

class controller{

    constructor(){
        this.i=0;
        this.t=[]
        this.u=[];
        
    }

    inserir(temp){
        if(this.i < 20){
           var tem = this.valida(Number(temp[0]+temp[1]+temp[2]+temp[3]+temp[4]));
           var umi = this.valida(Number(temp[6]+temp[7]+temp[8]+temp[3]+temp[9]));

            if(tem && umi){
                this.t[this.i]=tem-22
                this.u[this.i]=umi
                this.i++;

            }
            

        }else{
        var avgT= this.media(this.t);
        var avgU= this.media(this.u);
        console.log(avgT+" "+avgU)
        sql.busca(avgT,avgU );


        this.i=0;
        }
    }
    media(a){
        var sum = 0;
        for( let cont = 0; cont < a.length; cont++ ){
            sum += parseInt( a[cont], 10 ); //don't forget to add the base
        }
        var avg = sum/a.length;
        return avg
    }

    valida(n){
        var t = n/2
        if(t%2>=0){
            return n
        }else{
            return false;
        }
        
    }


}

module.exports = controller;
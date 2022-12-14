class Alumno {
    constructor(codigo, nombre, nota1, nota2, nota3, nota4){
        this.codigo =  codigo;
        this.nombre =  nombre;
        this.nota1 =  nota1;
        this.nota2 =  nota2;
        this.nota3 =  nota3;
        this.nota4 =  nota4;
    }
    prom() {
        let nota1 = this.nota1*0.15;
        let nota2 = this.nota2*0.20;
        let nota3 = this.nota3*0.25;
        let nota4 = this.nota4*0.40;
        let suma= nota1+nota2+nota3+nota4;
        return(suma)

    }
    condi(){
        if(this.prom() >= 12){
            alert("Estas aprobado")
        }else{
            alert("Estas desaprobado")
        }
    }

    obsequio(){
        if(this.prom() > 17){
            alert("Tienes una Mochila")
        }else{
            alert("no ganaste nada")
        }
    }
}

const codigo = prompt("Coloca el codigo")
const nombre = prompt ("Ingresa tu nombre")
const nota1 = prompt("Ingresa tu primera nota")
const nota2 = prompt("Ingresa tu segunda nota")
const nota3 = prompt("Ingresa tu tercera nota")
const nota4 = prompt("Ingresa tu cuarta nota")

let alum1 = new Alumno(codigo,nombre,nota1,nota2,nota3,nota4);
console.log(alum1);

alum1.prom();
alum1.condi();
alum1.obsequio();
var idade = 22
console.log(`voce tem ${idade} anos`)
if (idade<16){
    console.log('nao votante')
}
    else if( idade<18 || idade>65){
        console.log('voto opcional')
    }
    else{
        console.log('voto obrigatorio')
    }
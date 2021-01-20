console.log('Función deepEqual()')
var propertys =  [];  //Seguir probando
var namPropertys = [];
function deepEqual(a, b) {
  if (a === b) 
    return true;
  if ((typeof(a) == 'object') && (typeof(b) == 'object')) {
    var keysa = Object.keys(a);
    var keysb = Object.keys(b);
    if(keysa.length != keysb.length)
      return false;
    for (var i = 0; i < keysa.length; i++) {
      propertys.push(String(deepEqual(keysa[i], keysb[i])));
    }
    if (propertys.includes('false')) 
      return false;
    for (var i = 0; i < keysa.length; i++) {
      namPropertys.push(String(deepEqual(a[keysa[i]], b[keysb[i]])));
    }
    if (namPropertys.includes('false')) 
      return false;
    return true;
  }
  return false;
}

var john = {
  firstName: 'John',
  lastName: 'Doe'
}

console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true ?
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false


separador(3);
console.log('Funcion chunk()');
function chunk(arr,size){
    var array = [];
    for(var i = 0; i < arr.length; i+= size){
        array.push(arr.slice(i,i+size));
    }
    return array;
}

var data = [1,2,3,4,5,6,7,8];

console.log('Test 1:', chunk(data,1));
console.log('Test 2:', chunk(data,2));
console.log('Test 3:', chunk(data,3));



separador(3);
console.log('Funcion frecuency()')
// Funcion que cuenta el numero de n caracteres de un string 
console.log('**************\t Frecuencia de caracteres \t**************');


function frequency(string) {
    console.log(string);

    let a_cont              =   [];
    let o_result            =   {};
    let i_tamString         =   string.length;
    let i_tamProperties     =   0;
    let i_value             =   0;
    let a_nChar             =   string.split('')
    let s_property          =   "";
    
    for(let i = 0  ;  i < i_tamString  ; i++){
        c_char = a_nChar[i];

        if( a_cont[c_char]  === undefined){
            a_cont[c_char]  =   1;
        }
        else{
            a_cont[c_char] ++;
        }
    }

    a_cont.sort();

    a_properties    =   Object.keys(a_cont);
    a_properties.sort();
    
    i_tamProperties =   a_properties.length;
    
    for(let j = 0  ;  j < i_tamProperties  ;  j++){
        s_property  =   a_properties[j];
        
        i_value =   a_cont[s_property];
        
        o_result[s_property]    =   i_value;
    }
    return o_result;
}

console.log('Test 1:', frequency('cccbbbaaa'))
// {a: 3, b: 3, c: 3}
console.log('Test 2:', frequency('www.bedu.org'))
// {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log('Test 3:', frequency('john.doe@domain.com'))
// {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}
console.log('Test 3:', frequency('jacqueline'))



function separador(n) {
    for(var i = 0; i < n; i++) {
        console.log('\n');
    }
}
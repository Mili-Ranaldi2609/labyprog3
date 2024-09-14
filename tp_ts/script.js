console.log("Ejercicio 2: corriendo desde typescript");
//Ejercicio 3 tipos de datos
var str = "Hola, TypeScript!";
var num = 123;
var boo = true;
var fecha = new Date();
fecha.setMonth(8);
fecha.setDate(13);
fecha.setFullYear(2024);
function mostrandoDatos() {
    document.getElementById('text').textContent = str;
    document.getElementById('number').textContent = num.toString();
    document.getElementById('boolean').textContent = boo.toString();
    document.getElementById('date').textContent = fecha.toDateString();
}
document.addEventListener("DOMContentLoaded", mostrandoDatos);
//ejercicio 4
var num2 = 234;
function numAString() {
    document.getElementById('number_string').textContent = num2.toString();
}
document.addEventListener("DOMContentLoaded", numAString);
//ejercicio 5
var numeros = [12, 34, 22, 31];
var total = 0;
numeros.forEach(function (a) {
    total += a;
});
document.getElementById('array').textContent = total.toString();
var estudiante = {
    nombre: 'Milagros Ranaldi',
    edad: 21,
    curso: 'Lab y Prog 2'
};
document.addEventListener("DOMContentLoaded", function () {
    var estudianteDatos = document.getElementById('student');
    // Verificar que el elemento no sea null
    if (estudianteDatos) {
        estudianteDatos.innerHTML = "<p>Nombre: ".concat(estudiante.nombre, "</p>\n            <p>Edad: ").concat(estudiante.edad, "</p>\n            <p>Curso: ").concat(estudiante.curso, "</p>");
    }
});
var direccion1 = {
    street: 'Carrodilla',
    city: 'Lujan de cuyo',
    zip_code: 5505
};
document.addEventListener("DOMContentLoaded", function () {
    var mostrarDireccion = document.getElementById('address');
    // Verificar que el elemento no sea null
    if (mostrarDireccion) {
        mostrarDireccion.innerHTML = "<p>Direcci\u00F3n: Calle: ".concat(direccion1.street, ", Departamento: ").concat(direccion1.city, ", CP: ").concat(direccion1.zip_code, "</p>");
    }
});
var usuario = {
    name: 'Jose Fernandez',
    age: 25,
    saludar: function () {
        return "Hola soy ".concat(usuario.name);
    }
};
document.addEventListener("DOMContentLoaded", function () {
    var saludo = document.getElementById('user');
    // Verificar que el elemento no sea null
    if (saludo) {
        saludo.innerText = usuario.saludar();
    }
});
//ejercicio 9
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.presentation = function () {
        return "Hola mi nombre es ".concat(this.name, " y tengo ").concat(this.age, " a\u00F1os");
    };
    return Person;
}());
var person = new Person("Rodrigo", 34);
document.addEventListener("DOMContentLoaded", function () {
    var presentationElement = document.getElementById('pres');
    // Verificar que el elemento no sea null
    if (presentationElement) {
        presentationElement.innerText = person.presentation();
    }
});
//ejercicio 10 
var Box = /** @class */ (function () {
    function Box(v) {
        this.v = v;
    }
    Box.prototype.setV = function (v) {
        this.v = v;
    };
    //get nos da el valor
    Box.prototype.getV = function () {
        return this.v;
    };
    return Box;
}());
var cajaTexto = new Box("Mensaje Secreto");
var cajaNumero = new Box(45);
document.addEventListener("DOMContentLoaded", function () {
    var box_text = document.getElementById('box_text');
    var box_num = document.getElementById('box_number');
    // Verificar que el elemento no sea null
    if (box_text) {
        box_text.innerText = "Contenido de cajaDeTexto: ".concat(cajaTexto.getV());
    }
    if (box_num) {
        box_num.innerText = "Contenido de cajaDeNumero: ".concat(cajaNumero.getV());
    }
});
//ejercicio 11
function display(valor) {
    return valor;
}
var text11 = 'Caracoles';
var boo11 = false;
var datotext = display(text11);
var datoboo = display(boo11);
document.addEventListener("DOMContentLoaded", function () {
    var functiont = document.getElementById('function_text');
    var functionn = document.getElementById('function_boo');
    // Verificar que el elemento no sea null
    if (functiont) {
        functiont.innerText = "Identidad Del Texto: ".concat(datotext);
    }
    if (functionn) {
        functionn.innerText = "Identidad Del Numero: ".concat(datoboo);
    }
});
//ejercicio 12
var Colores;
(function (Colores) {
    Colores[Colores["Rojo"] = 0] = "Rojo";
    Colores[Colores["Amarrillo"] = 1] = "Amarrillo";
    Colores[Colores["Azul"] = 2] = "Azul";
    Colores[Colores["Verde"] = 3] = "Verde";
    Colores[Colores["Cian"] = 4] = "Cian";
    Colores[Colores["Rosado"] = 5] = "Rosado";
})(Colores || (Colores = {}));
var colorFav = Colores[2]; //le paso el indice de mi color elegido
document.getElementById('enum_colors').textContent = colorFav.toString();

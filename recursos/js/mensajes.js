//TODAS LAS FUNCIONES AQUI SON ASINCRONAS. ESO SIGNIFICA QUE LOS PROCESOS ESPERARAN A TENER UNA RESPUESTA ANTES DE CONTINUAR
//NORMALMENTE LA PAGINA SE PODRIA SEGUIR USANDO PERO ESTAS FUNCIONES INVOCAN UN MODAL QUE LA CUBRE.
//SI SE DA CLICK AL MODAL ESTE LO INTERPRETA COMO QUE LA RESPUESTA A LA FUNCION ES UN FALSE Y TERMINA LA EJECUSION.
//SOLO TODAS LAS FUNCIONES SIGUEN LA MISMA ESTRUCTIRA COMENTADA EN EL ALERT
async function jfhfalert(mensaje, titulo) {
    var modal = document.getElementById("jfhf");//BUSCA
    if (modal == null) {//SI NO EXISTE LO CREA
        var mymodal = document.createElement("div")
        mymodal.setAttribute("class", "cami_m")
        mymodal.setAttribute("id", "jfhf")
        document.body.appendChild(mymodal);
        var modal = document.getElementById("jfhf");
    }
    //INGRESA EL CONTENIDO DEPENNDIENDO DEL TIPO DE MENSAJE
    modal.innerHTML = '<div class="camisamus_alert"><div id="cami-al-tit"><g id="cami-titulo">Alerta</g><span class="cami-close">×</span></div><div id="camisamus-ms-al" class="cami-mesager-alert"></div></div>'
    var span = document.getElementsByClassName("cami-close")[0];
    var mesager = document.getElementById("camisamus-ms-al");
    if(Array.isArray(mensaje)!=true){//SI NO ES ARRAY
    mesager.innerHTML = '';//LO LLENA
    var node = document.createElement("p");                 
    var textnode = document.createTextNode(mensaje);         
    node.appendChild(textnode);
    node.setAttribute("class", "cami-al-con")                             
    mesager.appendChild(node); 
    }else{//SI ES ARRAY
        for (i = 0; i < mensaje.length; i++) {//RECORRE EL ARRY 
            var node = document.createElement("p");             //LLENA CON EL CONTENIDO    
            var textnode = document.createTextNode(mensaje[i]);         
            node.appendChild(textnode);
            node.setAttribute("class", "cami-al-con")                             
            mesager.appendChild(node); 
        } 
    }    
    if (titulo != undefined) {//SI EXISTE EL TITULO
        var tit = document.getElementById('cami-titulo')//LE AGREGA EL TITULO
        tit.innerText = titulo
    }
    async function errshow() {//DECLARA LA FUNCION PARA MOSTRARLO
        modal.style.display = "block";
        var result = await resultado()
        return result
    }


    async function resultado() {//DECLARA LOS LISTENERS PARA CERRARLO
        return new Promise(function (resolve, rejrct) {
            $(document).on('click', '.cami-close', function (e) {//SI SE DA CLICK
                var input = false
                modal.style.display = "none";//ESCONDE EL MODAL
                $(document).off('click', '.cca')//APAGA LOS LISTENERS
                $(document).off('click', '.acc')
                $(document).off('click', '.cami-close')
                $(document).off('click', '.cami_m')
                resolve(input);//DEVUELVE UN VALOR
            });
            $(document).on('click', '.cami_m', function (e) {
                if (!$(event.target).closest(".camisamus_alert").length) {
                    var input = false
                    modal.style.display = "none";
                    $(document).off('click', '.cca')
                    $(document).off('click', '.acc')
                    $(document).off('click', '.cami-close')
                    $(document).off('click', '.cami_m')
                    resolve(input);
                }
            });
        });
    }
    r = await errshow()//LLAMA A LA FUNCION PARA MOSTRAR EL MODAL
    return r
}

async function jfhfinform(mensaje, titulo) {
    var modal = document.getElementById("jfhf");//BUSCA
    if (modal == null) {//SI NO EXISTE LO CREA
        var mymodal = document.createElement("div")
        mymodal.setAttribute("class", "cami_m")
        mymodal.setAttribute("id", "jfhf")
        document.body.appendChild(mymodal);
        var modal = document.getElementById("jfhf");
    }
    //INGRESA EL CONTENIDO DEPENNDIENDO DEL TIPO DE MENSAJE
    modal.innerHTML = '<div class="camisamus_inf"><div id="cami-inf-tit"><g id="cami-titulo">Informacion</g><span class="cami-close">×</span></div><div id="camisamus-ms-inf" class="cami-mesager-alert"></div><div class="cami-txtcontainet"><input type="button" class="infb" value="Aceptar"></div></div>'
    var span = document.getElementsByClassName("cami-close")[0];
    var mesager = document.getElementById("camisamus-ms-inf");
    if(Array.isArray(mensaje)!=true){//SI NO ES ARRAY
    mesager.innerHTML = '';//LO LLENA
    var node = document.createElement("p");                 
    var textnode = document.createTextNode(mensaje);         
    node.appendChild(textnode);
    node.setAttribute("class", "cami-al-con")                             
    mesager.appendChild(node); 
    }else{//SI ES ARRAY
        for (i = 0; i < mensaje.length; i++) {//RECORRE EL ARRY 
            var node = document.createElement("p");             //LLENA CON EL CONTENIDO    
            var textnode = document.createTextNode(mensaje[i]);         
            node.appendChild(textnode);
            node.setAttribute("class", "cami-al-con")                             
            mesager.appendChild(node); 
        } 
    }    
    if (titulo != undefined) {//SI EXISTE EL TITULO
        var tit = document.getElementById('cami-titulo')//LE AGREGA EL TITULO
        tit.innerText = titulo
    }
    async function errshow() {//DECLARA LA FUNCION PARA MOSTRARLO
        modal.style.display = "block";
        var result = await resultado()
        return result
    }


    async function resultado() {//DECLARA LOS LISTENERS PARA CERRARLO
        return new Promise(function (resolve, rejrct) {
            $(document).on('click', '.cami-close', function (e) {//SI SE DA CLICK
                var input = false
                modal.style.display = "none";//ESCONDE EL MODAL
                $(document).off('click', '.cca')//APAGA LOS LISTENERS
                $(document).off('click', '.acc')
                $(document).off('click', '.cami-close')
                $(document).off('click', '.cami_m')
                resolve(input);//DEVUELVE UN VALOR
            });
            $(document).on('click', '.cami_m', function (e) {
                if (!$(event.target).closest(".camisamus_alert").length) {
                    var input = false
                    modal.style.display = "none";
                    $(document).off('click', '.cca')
                    $(document).off('click', '.acc')
                    $(document).off('click', '.cami-close')
                    $(document).off('click', '.cami_m')
                    resolve(input);
                }
            });
        });
    }
    r = await errshow()//LLAMA A LA FUNCION PARA MOSTRAR EL MODAL
    return r
}

async function jfhfconfirm(mensaje, titulo) {
    var modal = document.getElementById("jfhf");
    if (modal == null) {
        var mymodal = document.createElement("div")
        mymodal.setAttribute("class", "cami_m")
        mymodal.setAttribute("id", "jfhf")
        document.body.appendChild(mymodal);
        var modal = document.getElementById("jfhf");
    }
    modal.innerHTML = '<div class="camisamus_conf"><div id="cami-conf-tit"><g id="cami-titulo">Confirmar</g><span class="cami-close">×</span></div><div id="camisamus-ms-conf"></div><div><input type="button" class="caa" value="Cancelar"><input type="button" class="acc" value="Aceptar"></div></div>'
    var span = document.getElementsByClassName("cami-close")[0];
    var aceptar = document.getElementsByClassName("acc")[0];
    var cancelar = document.getElementsByClassName("caa")[0];
    var mesager = document.getElementById("camisamus-ms-conf");
    mesager.innerHTML = '';
    var node = document.createElement("p");                 
    var textnode = document.createTextNode(mensaje);         
    node.appendChild(textnode);
    node.setAttribute("class", "cami-al-conf")                             
    mesager.appendChild(node);     
    if (titulo != undefined) {
        var tit = document.getElementById('cami-titulo')
        tit.innerText = titulo
    }

    async function confshow() {
        modal.style.display = "block";
        var result = await resultado()
        return result
    }
    async function resultado() {
        return new Promise(function k(resolve, rejrct) {
            var input
            $(document).on('click', '.cami-close', function (e) {
                input = false
                modal.style.display = "none";
                $(document).off('click', '.cca')
                $(document).off('click', '.acc')
                $(document).off('click', '.cami-close')
                $(document).off('click', '.cami_m')
                resolve(input);
            });
            $(document).on('click', '.caa', function (e) {
                input = false
                modal.style.display = "none";
                $(document).off('click', '.cca')
                $(document).off('click', '.acc')
                $(document).off('click', '.cami-close')
                $(document).off('click', '.cami_m')
                resolve(input);
            });
            $(document).on('click', '.acc', function (e) {
                input = true
                modal.style.display = "none";
                $(document).off('click', '.cca')
                $(document).off('click', '.acc')
                $(document).off('click', '.cami-close')
                $(document).off('click', '.cami_m')
                resolve(input);
            });
            $(document).on('click', '.cami_m', function (e) {
                if (!$(event.target).closest(".camisamus_alert, .camisamus_conf").length) {
                    var input = false
                    modal.style.display = "none";
                    $(document).off('click', '.cca')
                    $(document).off('click', '.acc')
                    $(document).off('click', '.cami-close')
                    $(document).off('click', '.cami_m')
                    resolve(input);
                }
            });
            return
        });
    }
    var r = await confshow()
    return r
}

async function jfhfprompt(mensaje, titulo) {
    var modal = document.getElementById("jfhf");
    if (modal == null) {
        var mymodal = document.createElement("div")
        mymodal.setAttribute("class", "cami_m")
        mymodal.setAttribute("id", "jfhf")
        document.body.appendChild(mymodal);
        var modal = document.getElementById("jfhf");
    }
    modal.innerHTML = '<div class="camisamus_prom"><div id="cami-pro-tit"><g id="cami-titulo">Consulta</g><span class="cami-close">×</span></div><div id="camisamus-ms-pro"></div><div class="cami-txtcontainet"><input type="text" class="camisamus-txtvar"></div><div><input type="button" class="caa" value="Cancelar"><input type="button" class="acc" value="Aceptar"></div></div>'
    var span = document.getElementsByClassName("cami-close")[0];
    var aceptar = document.getElementsByClassName("acc")[0];
    var cancelar = document.getElementsByClassName("caa")[0];
    var mesager = document.getElementById("camisamus-ms-pro");
    mesager.innerHTML = '';
    var node = document.createElement("p");                 
    var textnode = document.createTextNode(mensaje);         
    node.appendChild(textnode);
    node.setAttribute("class", "cami-al-pro")                             
    mesager.appendChild(node);     
    if (titulo != undefined) {
        var tit = document.getElementById('cami-titulo')
        tit.innerText = titulo
    }

    async function resultado() {
        return new Promise(function k(resolve, rejrct) {
            $(document).on('click', '.cami-close', function (e) {
                var input = false
                modal.style.display = "none";
                $(document).off('click', '.cca')
                $(document).off('click', '.acc')
                $(document).off('click', '.cami-close')
                $(document).off('click', '.cami_m')
                resolve(input);
            });
            $(document).on('click', '.caa', function (e) {
                var input = false
                modal.style.display = "none";
                $(document).off('click', '.cca')
                $(document).off('click', '.acc')
                $(document).off('click', '.cami-close')
                $(document).off('click', '.cami_m')
                resolve(input);
            });
            $(document).on('click', '.acc', function (e) {
                var input = document.getElementsByClassName("camisamus-txtvar")[0].value;
                if (input == "") { input = false }
                modal.style.display = "none";
                $(document).off('click', '.cca')
                $(document).off('click', '.acc')
                $(document).off('click', '.cami-close')
                $(document).off('click', '.cami_m')
                resolve(input);
            });
            $(document).on('click', '.cami_m', function (e) {
                if (!$(event.target).closest(".camisamus_alert , .camisamus_prom").length) {
                    var input = false
                    modal.style.display = "none";
                    $(document).off('click', '.cca')
                    $(document).off('click', '.acc')
                    $(document).off('click', '.cami-close')
                    $(document).off('click', '.cami_m')
                    resolve(input);
                }
            });
            return
        });
    }
    async function proshow() {
        modal.style.display = "block";
        var result = await resultado()
        return result
    }
    var r = await proshow()
    return r
}
//ESTAS SON LAS FUNCIONES CON EL NOMBRE CORTO PARA SU USO
async function zalert(Contenido, titulo) {
    if (titulo != undefined){
    var r = await jfhfalert(Contenido, titulo)
}else{
    var r = await jfhfalert(Contenido)
}
    return r
}
async function zconfirm(Contenido, titulo) {
    if (titulo != undefined){
    var r = await jfhfconfirm(Contenido, titulo)
}else{
    var r = await jfhfconfirm(Contenido)
}
    return r
}
async function zprompt(Contenido, titulo) {
    if (titulo != undefined){
        var r = await jfhfprompt(Contenido, titulo)
    }else{
        var r = await jfhfprompt(Contenido)
    }
    return r
}
async function zinform(Contenido, titulo) {
    if (titulo != undefined){
        var r = await jfhfinform(Contenido, titulo)
    }else{
        var r = await jfhfinform(Contenido)
    }
    return r
}
//EL USO DE ESTAS FUNCIONES REQUIERE QUE A LA PAGINA TAMBIEN SE IMPORTE JQERY Y MENSAJES.CSS
//PARA ALTERAR LA PRESENTACION FINAL DE LOS MENSAJES SE DEBE EDITAR EL CSS 
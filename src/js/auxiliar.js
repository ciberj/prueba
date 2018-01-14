
function buscarPvp(productos){
    var parametros = {
            "comercios" : "mediamarkt",
            "productos" : productos
            
    };
   // console.log(document.domain);
    $.ajax({
            data:  parametros,//parametros, //datos que se envian a traves de ajax
            
            url:   '/api/producto', //archivo que recibe la peticion no es necesario poner el dkominio si no se quiere.
            type:  'post', //método de envio
            beforeSend: function () {
                    $("#resultado").html('<div><img src="35.gif"/></div>');
            },
            success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                varGlobal = response;// guardamos el response por si lo queremos grabar.
                var json = (JSON.parse(response));
                
                var result="";
                
                json.forEach(function(element) {
                    
                        result= result+ element.producto + "     ";
                        element.datos.forEach(function(e) {
                                result= result+e.comercio+ "     "+e.pvp+ "\t";
                        });
                        result=result+"<br>";
                        

                    });
                   console.log(json);
                    $("#resultado").html(result);
                    
                /*                
                    varGlobal = response;// guardamos el response por si lo queremos grabar.
                    //console.log(response);
                    var json = (JSON.parse(response));
                    var result="";
                    json.forEach(function(element) {
                        result= result+ element.producto + "     "+ element.pvp + "<br>";
                    });
                    //console.log(json)
                    $("#resultado").html(result);
                */
                    
            },
            error: function(result) {
            alert("Error en llamada ajax");
        }
    });

};	


function grabarDatos(){
                var parametros ={
                    "datos":varGlobal
                };
    
                $.ajax({
                        data: parametros,//parametros, //datos que s-de envian a traves de ajax
                        url:   '/api/grabar', //archivo que recibe la peticion
                        type:  'post', //método de envio
                        beforeSend: function () {
                                $("#resultado").html("Procesando, espere por favor...");
                        },
                        success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                                
                                $("#resultado").html("DATOS GRABADOS CORRECTAMENTE");
                               
                                location.href = '/api/datos.csv';
                                //window.open("api/datos.csv"); 
    
    
                            
                                
                        },
                        error: function(result) {
                        alert("Error en llamada ajax");
                    }
                
                })};
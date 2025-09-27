

describe('modulo 2: arbitrios municipales', () => {

  it('prueba de registro', () => {
    
    cy.visit('http://172.29.170.36:5555?t=eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJVdWh3RktFM19PLWV0aEtqY2Z2cWxwT0QzeE1mTHoyNjVPQm0wdFpENG5NIn0<eyJleHAiOjE3NTIwNTM3MDcsImlhdCI6MTc1MTk4MTcwNywianRpIjoiYzY4NjE3ZmEtZGE3ZC00Y2JmLTg3OTUtMDc0NDI1NzNjZGFlIiwiaXNzIjoiaHR0cDovLzE3Mi4yOS41NS41NDo4MDgwL3JlYWxtcy9zYXQtbW9iaWxlcyIsInN1YiI6ImNjMWVmMDk4LWMzOTItNGFmNS1hZDMyLWMyMDgwMWI4MjM4YSIsInR5cCI6IkJlYXJlciIsImF6cCI6IlJhdGlmaWNhY2lvbmVzIiwic2Vzc2lvbl9zdGF0ZSI6IjBhMDhiYmFkLThlYjgtNDVhNi1hOWI0LTkzMzYxMDJjN2Q0ZSIsInNjb3BlIjoiIiwic2lkIjoiMGEwOGJiYWQtOGViOC00NWE2LWE5YjQtOTMzNjEwMmM3ZDRlIn0<CDHTGWP6w_g7thOFB4ProINeLsXy2yUAa1jViWOq3PhpVEctLnvmT64O3Nf4KUfCj8qIdNcUtWYXXIoJnXsjnE5eUvn_fF2SvqzPPOeH6IghOsbwj_8ZIW3IBkW-pa_T4GjafhRgYUB4O6fQ_0Sm8h4KuGGLnbXeVYbD1qypQfRNGNpRyiSxBX19z7wh26KmhfhJNqRhGnsAYkEGE86nb1e4_-wd9XaXAOtX7mUlPuI7KCvdMKFIxA2JgNJRkISjVecdppzC6kAPh4g2vqoSjSIqSUQhAKIfYWA7wER5E3WGhMtTywonuxXggNvsZaz328ZpDkqIpyxtYNLvje9a2Q&cp=301356&rt=eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwYjk5YWRmYS1lNzgwLTRkMjgtYTE2ZC1jMTY4M2JkNGUzZGQifQ<eyJleHAiOjE3NTIwMTc3MDcsImlhdCI6MTc1MTk4MTcwNywianRpIjoiMjdkZjM4YWItNGIxZC00MWU3LWI3OGMtMDQ1ZjhjMDhmOTE0IiwiaXNzIjoiaHR0cDovLzE3Mi4yOS41NS41NDo4MDgwL3JlYWxtcy9zYXQtbW9iaWxlcyIsImF1ZCI6Imh0dHA6Ly8xNzIuMjkuNTUuNTQ6ODA4MC9yZWFsbXMvc2F0LW1vYmlsZXMiLCJzdWIiOiJjYzFlZjA5OC1jMzkyLTRhZjUtYWQzMi1jMjA4MDFiODIzOGEiLCJ0eXAiOiJSZWZyZXNoIiwiYXpwIjoiUmF0aWZpY2FjaW9uZXMiLCJzZXNzaW9uX3N0YXRlIjoiMGEwOGJiYWQtOGViOC00NWE2LWE5YjQtOTMzNjEwMmM3ZDRlIiwic2NvcGUiOiIiLCJzaWQiOiIwYTA4YmJhZC04ZWI4LTQ1YTYtYTliNC05MzM2MTAyYzdkNGUifQ<1nCsf7ADLc6Tbt5IX6VzVuaZlSKhoZz-09hHjpb56fA&cr=1')

    cy.get('[aria-label="Ratificaciones de Ordenanzas Municipales"]').click();
    cy.get('[aria-label="Arbitrios Municipales"]').click();

    /*

    //crear nueva solicitud

    cy.get('[aria-label="Nuevo"').click();
    cy.wait(2000);

    cy.get('[role="dialog"]').within(()=>{

        cy.get('tbody tr').eq(0).within(()=>{

            cy.get('td').eq(1).find('input[type="radio"]').click();
            cy.get('td').eq(2).find('input[type="radio"]').click();
            cy.get('td').eq(3).find('input[type="radio"]').click();
            cy.get('td').eq(1).find('input[type="radio"]').click();

        });

        cy.get('tbody tr').eq(1).within(()=>{

            cy.get('td').eq(1).find('input[type="radio"]').click();
            cy.get('td').eq(2).find('input[type="radio"]').click();
            cy.get('td').eq(3).find('input[type="radio"]').click();
            cy.get('td').eq(2).find('input[type="radio"]').click();

        });

        cy.get('tbody tr').eq(2).within(()=>{

            cy.get('td').eq(1).find('input[type="radio"]').click();
            cy.get('td').eq(2).find('input[type="radio"]').click();
            cy.get('td').eq(3).find('input[type="radio"]').click();
            cy.get('td').eq(2).find('input[type="radio"]').click();

        });

        cy.get('tbody tr').eq(3).within(()=>{

            cy.get('td').eq(1).find('input[type="radio"]').click();
            cy.get('td').eq(2).find('input[type="radio"]').click();
            cy.get('td').eq(3).find('input[type="radio"]').click();

        });

    }); 

    cy.get('[data-pc-section="content"]').find('button[aria-label="Crear"]').click();

    --
     //crear solicitud

    cy.get('[aria-label="Nuevo"').click();
    cy.wait(2000);
    cy.get('[aria-modal="true"]').find('button[aria-label="Continuar"]').click();

    */

    cy.get('tbody tr').eq(0).find('td').eq(0).find('button[type="button"]').click(); //tb solicitudes de rati

    cy.get('tbody tr').eq(1).find('td').eq(0).within(()=>{ //tb servicios

        cy.get('tbody tr').eq(0).find('td').eq(2).find('button[aria-label="Continuar"]').click(); //fila servicios
    });

    cy.get('div[role="dialog"]').find('button[aria-label="Close"]').click();


    //---primera persona
/*
    cy.get('.basis-3\\/12').find('input[data-pc-name="inputtext"]').type('12345678');
    cy.get('#nombreRepresentante').type('samuel prada vidal');
    cy.get('button[aria-label="Añadir"]').click();
    cy.wait(2000);
*/
    cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(0).find('td').eq(1).find('#correoRepresentante').clear();
    cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(0).find('td').eq(1).find('#correoRepresentante').type('jmarca@sat.gob.pe');
    cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(0).find('td').eq(2).find('#cargoRepresentante').clear();
    cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(0).find('td').eq(2).find('#cargoRepresentante').type('jefe');
    cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(0).find('td').eq(3).find('#telefonoRepresentante').clear();
    cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(0).find('td').eq(3).find('#telefonoRepresentante').type('940482244');

 

    //---segunda persona
/*
    cy.get('.basis-3\\/12').find('input[data-pc-name="inputtext"]').type('12345678');
    cy.get('#nombreRepresentante').type('samuel prada vidal');
    cy.get('button[aria-label="Añadir"]').click();
    cy.wait(2000);
*/
    cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(1).find('td').eq(1).find('#correoRepresentante').clear();
    cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(1).find('td').eq(1).find('#correoRepresentante').type('jmarca@sat.gob.pe');
    cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(1).find('td').eq(2).find('#cargoRepresentante').clear();
    cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(1).find('td').eq(2).find('#cargoRepresentante').type('jefe');
    cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(1).find('td').eq(3).find('#telefonoRepresentante').clear();
    cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(1).find('td').eq(3).find('#telefonoRepresentante').type('940482244');

    //---tercera persona

    cy.get('.basis-3\\/12').find('input[data-pc-name="inputtext"]').type('12345678');
    cy.get('#nombreRepresentante').type('samuel prada vidal');
    cy.get('button[aria-label="Añadir"]').click();
    cy.wait(2000);
  
    cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(2).find('td').eq(1).find('#correoRepresentante').clear();
    cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(2).find('td').eq(1).find('#correoRepresentante').type('jmarca@sat.gob.pe');
    cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(2).find('td').eq(2).find('#cargoRepresentante').clear();
    cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(2).find('td').eq(2).find('#cargoRepresentante').type('jefe');
    cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(2).find('td').eq(3).find('#telefonoRepresentante').clear();
    cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(2).find('td').eq(3).find('#telefonoRepresentante').type('940482244');

    cy.wait(2000);

   
    //---eliminar persona

    cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(2).find('td').eq(4).find('a').click();


    cy.get('div[data-pc-name="fileupload"]').find('input[type="file"]').attachFile('pruebapdf.pdf');

    cy.get('div').should('have.class','pt-4').find('button[aria-label="Continuar"]').click();

  
    //paso 1
  
    //fila 1
    cy.get('[data-p-active="true"]').find('table[aria-label="requisitos"').find('tbody tr').eq(0).find('td').eq(2).find('input[type="file"]').attachFile('pruebapdf.pdf');
    
    cy.get('[data-p-active="true"]').find('table[aria-label="requisitos"]').find('tbody tr').eq(0).within(()=>{
        cy.get('input[type="text"]').clear();
        cy.get('input[type="text"]').type('comentario de prueba');
      
    });

    //probar btn ver y eliminar
    
    cy.get('[data-p-active="true"]').find('table[aria-label="requisitos"]').find('tbody tr').eq(0).find('td').eq(3).within(()=>{
      cy.get('input[type="file"]').attachFile('pruebaword.docx'); 
      cy.wait(1000);
      cy.contains('Ver').click();
      cy.contains('Eliminar').click();
      
    }); 

    //fila 2
    cy.get('[data-p-active="true"]').find('table[aria-label="requisitos"').find('tbody tr').eq(1).find('td').eq(2).find('input[type="file"]').attachFile('pruebapdf.pdf');
    
    //fila 3
    cy.get('[data-p-active="true"]').find('table[aria-label="requisitos"').find('tbody tr').eq(2).find('td').eq(2).find('input[type="file"]').attachFile('pruebapdf.pdf');
    
    //fila 4
    cy.get('[data-p-active="true"]').find('table[aria-label="requisitos"').find('tbody tr').eq(3).find('td').eq(2).find('input[type="file"]').attachFile('pruebapdf.pdf');

    //fila 5
    cy.get('[data-p-active="true"]').find('table[aria-label="requisitos"').find('tbody tr').eq(4).find('td').eq(2).find('input[type="file"]').attachFile('pruebapdf.pdf');

    cy.get('[data-p-active="true"]').find('table[aria-label="requisitos"]').find('tbody tr').eq(4).within(()=>{
        cy.get('input[type="text"]').clear();
        cy.get('input[type="text"]').type('comentario de prueba');

    });

    cy.get('div[data-pc-section="panelcontainer"]').within(()=>{
      cy.get('button[aria-label="Continuar"]').click();

    });
    

    //paso 2 --hasta aqui solo los servicios en modalidad prorroga- serenasgo

    //fila 1
    cy.get('[data-p-active="true"]').find('table[aria-label="requisitos"').find('tbody tr').eq(0).find('td').eq(2).find('input[type="file"]').attachFile('pruebapdf.pdf');
    
    cy.get('[data-p-active="true"]').find('table[aria-label="requisitos"]').find('tbody tr').eq(0).within(()=>{
        cy.get('input[type="text"]').clear();
        cy.get('input[type="text"]').type('comentario de prueba');
      
    });

    //fila 2
    cy.get('[data-p-active="true"]').find('table[aria-label="requisitos"').find('tbody tr').eq(1).find('td').eq(2).find('input[type="file"]').attachFile('pruebapdf.pdf');
    
    //fila 3
    cy.get('[data-p-active="true"]').find('table[aria-label="requisitos"').find('tbody tr').eq(2).find('td').eq(2).find('input[type="file"]').attachFile('pruebapdf.pdf');
    
    
    //btn continuar
    cy.get('div[data-pc-section="panelcontainer"]').within(()=>{
      cy.get('button[aria-label="Continuar"]').click();

    });

/*
    //----------------------------utilizado por nuevo regimen----------------------------------------

    //paso 2

    //fila 1
    cy.get('[data-p-active="true"]').find('table[aria-label="requisitos"').find('tbody tr').eq(0).find('td').eq(2).find('input[type="file"]').attachFile('pruebapdf.pdf');
    
    cy.get('[data-p-active="true"]').find('table[aria-label="requisitos"]').find('tbody tr').eq(0).within(()=>{
        cy.get('input[type="text"]').clear();
        cy.get('input[type="text"]').type('comentario de prueba');
      
    });

    //fila 2
    cy.get('[data-p-active="true"]').find('table[aria-label="requisitos"').find('tbody tr').eq(1).find('td').eq(2).find('input[type="file"]').attachFile('pruebapdf.pdf');
    
    //fila 3
    cy.get('[data-p-active="true"]').find('table[aria-label="requisitos"').find('tbody tr').eq(2).find('td').eq(2).find('input[type="file"]').attachFile('pruebapdf.pdf');

    //para nuevo regimen se debe utilizar las filas 9 y 10 en solo el caso serenazgo
    //para nuevo regimen se debe utilizar las filas del 1-5 (0-4) calles
    //para nuevo regimen se debe utilizar las filas 6 y 7 - residuos
    //para nuevo regimen se debe utilizar las filas 8 y 9 - parques
    
    //fila 4
    cy.get('[data-p-active="true"]').find('table[aria-label="requisitos"').find('tbody tr').eq(7).find('td').eq(2).find('input[type="file"]').attachFile('pruebapdf.pdf');

    //fila 5
    cy.get('[data-p-active="true"]').find('table[aria-label="requisitos"').find('tbody tr').eq(8).find('td').eq(2).find('input[type="file"]').attachFile('pruebapdf.pdf');

    cy.get('[data-p-active="true"]').find('table[aria-label="requisitos"]').find('tbody tr').eq(8).within(()=>{
        cy.get('input[type="text"]').clear();
        cy.get('input[type="text"]').type('comentario de prueba');

    });

    //btn continuar
    cy.get('div[data-pc-section="panelcontainer"]').within(()=>{
      cy.get('button[aria-label="Continuar"]').click();

    });

    //paso 3

    //fila 1
    cy.get('[data-p-active="true"]').find('table[aria-label="requisitos"').find('tbody tr').eq(0).find('td').eq(2).find('input[type="file"]').attachFile('pruebapdf.pdf');
    
    cy.get('[data-p-active="true"]').find('table[aria-label="requisitos"]').find('tbody tr').eq(0).within(()=>{
        cy.get('input[type="text"]').clear();
        cy.get('input[type="text"]').type('comentario de prueba');
      
    });

    //fila 2
    cy.get('[data-p-active="true"]').find('table[aria-label="requisitos"').find('tbody tr').eq(1).find('td').eq(2).find('input[type="file"]').attachFile('pruebapdf.pdf');
    
    //fila 3
    cy.get('[data-p-active="true"]').find('table[aria-label="requisitos"').find('tbody tr').eq(2).find('td').eq(2).find('input[type="file"]').attachFile('pruebapdf.pdf');
    
    //btn-continuar
    cy.get('div[data-pc-section="panelcontainer"]').within(()=>{
      cy.get('button[aria-label="Continuar"]').click();

    });

    
    //descarga de formatos
    cy.get('.p-8').find('table[aria-label="requisitos"]').find('tbody tr').eq(0).within(()=>{

      cy.contains('Descargar formato').click();
      cy.get('input[type="file"]').attachFile('pruebaexcel.xlsx');

    });

    cy.get('.p-8').within(()=>{
          cy.get('button[aria-label="Continuar"]').click();

    });
    

    //probar las tasas nuevo regimen
    cy.get('[role="dialog"]').within(()=>{
      cy.wait(1500);
      cy.get('#rbtnRespuestaopc2').find('[name="rbtnRespuestaopc2"]').click();
    
      cy.get('#rbtnRespuestaopc3').find('[name="rbtnRespuestaopc3"]').click();
      cy.get('#rbtnRespuestaopc1').find('[name="rbtnRespuestaopc1"]').click();
      cy.wait(1500);
      cy.get('button[aria-label="Continuar"]').click();
     

    });

    cy.get('[aria-label="CERRAR"]').click();
    cy.wait(1000);


    //subir elemento
    cy.get('.p-8').within(()=>{
        //en caso exista el boton descargar descarga el documento en caso no solo sube el archivo el caso es solo para la opcion no
      cy.get('[role="tabpanel"]').find('input[type="file"]').attachFile('pruebaexcel.xlsx');
    }); 

    cy.get('button[aria-label="Continuar"]').click();  

    //ventana modales adventencia, compromiso, presentar solicitud y confirmacion
    cy.get('button[aria-label="CERRAR"]').click(); 
    cy.wait(1000);

    cy.get('button[aria-label="ESTOY DE ACUERDO"]').click();
    cy.wait(1000);

    cy.get('button[aria-label="Presentar Solicitud"]').click();
    cy.wait(2000);
    cy.get('button[aria-label="CERRAR"]').click(); //aqui termina serenazgo Y CALLES - nuevo regimen 
    cy.wait(1000);

    //-----------------------------------------------------------------------
*/

    //condicion para que realice un determinado flujo segun el servicio

    //paso 3 generacion tb de costos - prorroga -serenazgos

    //cy.get('button[aria-label="Generar costos"]').click();


    //selecion de %ipc exclusivo de modo ipc - calles,residuos,parques y serenazgo
    cy.get('[role="combobox"]').contains('span','Seleccione').invoke('text','Febrero - 0.58 %');
    //cy.get('[data-pc-name="dropdown"]').click(); ---poner datos

    cy.get('button[aria-label="Guardar"').click();
    cy.get('button[aria-label="Close"]').click();
    cy.get('button[aria-label="Continuar"]').click();

   
    //paso exclusivo de servicios de recoleccion de residuos solidos - ventana modal de comencio anbulatorio
    cy.wait(1000);
    cy.get('#confirmacion1').click();
    cy.get('#confirmacion2').click();
    cy.get('[role="dialog"]').within(()=>{

        cy.get('button[aria-label="Continuar"]').click();

    });


    //paso 4 generacion tb de tasas - prorroga -serenazgos 

    cy.contains('GENERAR TASA ESTIMADA 2026').click();
    cy.get('button[aria-label="Guardar"').click();
    cy.get('button[aria-label="Close"]').click();
    cy.get('button[aria-label="Continuar"]').click();

    cy.get('button[aria-label="CERRAR"]').click();
    cy.get('button[aria-label="ESTOY DE ACUERDO"]').click();
    cy.wait(2000);
    cy.get('button[aria-label="CERRAR"]').click();


    



   

  })
});











    /*
    //eliminar una solicitud

    cy.get('tbody tr').eq(2).find('td').eq(4).find('.flex-none').within(()=>{

      cy.get('button[type="button"]').click();

    });

    cy.get('div[role="alertdialog"]').find('button[aria-label="Aceptar"]').click();
*/ 
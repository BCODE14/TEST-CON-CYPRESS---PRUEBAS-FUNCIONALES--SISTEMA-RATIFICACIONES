

describe('modulo1: estacionamiento vehicular en zonas urbanas', () => {

  it('prueba de registro de solicitud', () => {
    
    const ini = Date.now();

    cy.visit('http://172.29.170.36:5555?t=eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJVdWh3RktFM19PLWV0aEtqY2Z2cWxwT0QzeE1mTHoyNjVPQm0wdFpENG5NIn0<eyJleHAiOjE3NTIxNTM2OTAsImlhdCI6MTc1MjA4MTY5MCwianRpIjoiMzNhMzQzZDAtN2I1YS00ZjZjLTg2ZTEtYTExNDViMDhjODFiIiwiaXNzIjoiaHR0cDovLzE3Mi4yOS41NS41NDo4MDgwL3JlYWxtcy9zYXQtbW9iaWxlcyIsInN1YiI6ImNjMWVmMDk4LWMzOTItNGFmNS1hZDMyLWMyMDgwMWI4MjM4YSIsInR5cCI6IkJlYXJlciIsImF6cCI6IlJhdGlmaWNhY2lvbmVzIiwic2Vzc2lvbl9zdGF0ZSI6IjljNGM0MTJjLWM1MzUtNDUxNC04Mjk0LWZlN2I4NDNiODBhYiIsInNjb3BlIjoiIiwic2lkIjoiOWM0YzQxMmMtYzUzNS00NTE0LTgyOTQtZmU3Yjg0M2I4MGFiIn0<TJFq3PLuacTplQG4q0ri_d3qNNCTPqtl-ieg3aBAWad9ekriFlTwG-TIdxgwI7RZI1WUOLcjWIPcNBgjG8Z8kzhKMbuH68BUjTGGhK3dw95Pz3HDwJKPLRTQJsdwAQJL9tHPzmgol1SKSANHah9CoWDiEK1kj3tbNLXaKv3ByW23YUi9Qy39c3NtrgP_uauTyEZ4OaSFRWcFazO7AQDoHg5QOBCAU9MCCe_UgtwZRFqg2PtQdeLmVJUtLlqJVKwsHALcERT7gCiZcU5d6ORnFXq_qhj-Wfg3uCUjkyxzhQAv7NoODKchP8cRlmEn4VuShQiY3J3kOs268KtbjL2XPQ&cp=301356&rt=eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwYjk5YWRmYS1lNzgwLTRkMjgtYTE2ZC1jMTY4M2JkNGUzZGQifQ<eyJleHAiOjE3NTIxMTc2OTAsImlhdCI6MTc1MjA4MTY5MCwianRpIjoiYTQ5NTE4ZDItZTBkYi00N2E4LWI0N2UtYzUwMTJlMjk3NGU4IiwiaXNzIjoiaHR0cDovLzE3Mi4yOS41NS41NDo4MDgwL3JlYWxtcy9zYXQtbW9iaWxlcyIsImF1ZCI6Imh0dHA6Ly8xNzIuMjkuNTUuNTQ6ODA4MC9yZWFsbXMvc2F0LW1vYmlsZXMiLCJzdWIiOiJjYzFlZjA5OC1jMzkyLTRhZjUtYWQzMi1jMjA4MDFiODIzOGEiLCJ0eXAiOiJSZWZyZXNoIiwiYXpwIjoiUmF0aWZpY2FjaW9uZXMiLCJzZXNzaW9uX3N0YXRlIjoiOWM0YzQxMmMtYzUzNS00NTE0LTgyOTQtZmU3Yjg0M2I4MGFiIiwic2NvcGUiOiIiLCJzaWQiOiI5YzRjNDEyYy1jNTM1LTQ1MTQtODI5NC1mZTdiODQzYjgwYWIifQ<w_v6sjkEDWpE73yFPXxYg1BidKmRdm6uAJC4K0ZbtxA&cr=1').then(()=>{

      const fin=Date.now();
      const dur_total=ini - fin;
      expect(dur_total,`tiempo de espera agotada`).to.be.lessThan(3000);

    });

    cy.wait(3000);
    cy.get('[aria-label="Ratificaciones de Ordenanzas Municipales"]').click();
    cy.get('[aria-label="Estacionamiento Vehicular en Zonas Urbanas"]').click();

/*
    //probar eliminar una solicitud

    //paso 1: crear solicitud

    cy.get('[aria-label="Nuevo"').click();
    cy.wait(2000);
    cy.get('[aria-modal="true"]').find('button[aria-label="Continuar"]').click();

    //paso 2: eliminar una solicitud

    cy.get('tbody tr').eq(2).find('td').eq(4).find('.flex-none').within(()=>{

      cy.get('button[type="button"]').click();

    });

    //paso 3: eliminar el modal de dias faltantes 
    cy.get('div[role="alertdialog"]').find('button[aria-label="Aceptar"]').click();
*/   

    //paso 1: crear solicitud de retificacion

    cy.get('[aria-label="Nuevo"').click();
    cy.wait(2000);
    cy.get('[aria-modal="true"]').find('button[aria-label="Continuar"]').click();
    cy.wait(2000);
    //paso 2: selecionar fila de la tabla
    cy.get('[data-p-index="0"').find('button[aria-label="Continuar"]').click();
    cy.wait(2000);

    //paso 3: aceptar modal de dias falta
    cy.get('[aria-modal="true"]').find('button[aria-label="Aceptar"]').click();
    cy.wait(2000);

    //paso 4: agregar representantes en caso no exista ya representantes agregados ---para esto hay que ver si esta la tabla datos generales ---ultima modi 08/07

    //paso x: acceder a una solicitud ya creada
/*
    cy.get('tbody tr').eq(1).find('td').eq(4).within(()=>{

      cy.get('button[aria-label="Continuar"]').click();

    });
*/
    cy.get('table[aria-label="datos generales"]').then(($tab)=>{

      const a=$tab.length;
      cy.log(a.toString());
      if($tab.length === 0){
        cy.log('no existe la tabla');

         //---primera persona
        cy.get('.basis-3\\/12').find('input[data-pc-name="inputtext"]').type('12345678');
        cy.get('#nombreRepresentante').type('samuel prada vidal');
        cy.get('button[aria-label="Añadir"]').click();
        cy.wait(2000);

        cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(0).find('td').eq(1).find('#correoRepresentante').type('jmarca@sat.gob.pe');
        cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(0).find('td').eq(2).find('#cargoRepresentante').type('jefe');
        cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(0).find('td').eq(3).find('#telefonoRepresentante').type('940482244');

        
        //---segunda persona
   
        cy.get('.basis-3\\/12').find('input[data-pc-name="inputtext"]').type('12345678');
        cy.get('#nombreRepresentante').type('samuel prada vidal');
        cy.get('button[aria-label="Añadir"]').click();
        cy.wait(2000);

        cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(1).find('td').eq(1).find('#correoRepresentante').type('jmarca@sat.gob.pe');
        cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(1).find('td').eq(2).find('#cargoRepresentante').type('jefe');
        cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(1).find('td').eq(3).find('#telefonoRepresentante').type('940482244');

        //---tercera persona

        cy.get('.basis-3\\/12').find('input[data-pc-name="inputtext"]').type('12345678');
        cy.get('#nombreRepresentante').type('samuel prada vidal');
        cy.get('button[aria-label="Añadir"]').click();
        cy.wait(2000);

        cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(2).find('td').eq(1).find('#correoRepresentante').type('jmarca@sat.gob.pe');
        cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(2).find('td').eq(2).find('#cargoRepresentante').type('jefe');
        cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(2).find('td').eq(3).find('#telefonoRepresentante').type('940482244');
        cy.wait(2000);

        //---eliminar persona

        cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(2).find('td').eq(4).find('a').click();
        cy.get('div[data-pc-name="fileupload"]').find('input[type="file"]').attachFile('pruebapdf.pdf');
        cy.get('div').should('have.class','pt-4').find('button[aria-label="Continuar"]').click();
        
      }else{

        //---primera persona
        cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(0).find('td').eq(1).find('#correoRepresentante').clear();
        cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(0).find('td').eq(1).find('#correoRepresentante').type('jmarca@sat.gob.pe');
        cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(0).find('td').eq(2).find('#cargoRepresentante').clear();
        cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(0).find('td').eq(2).find('#cargoRepresentante').type('jefe');
        cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(0).find('td').eq(3).find('#telefonoRepresentante').clear();
        cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(0).find('td').eq(3).find('#telefonoRepresentante').type('940482244');

        //---segunda persona
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

       
      }

    });



/*

    //paso 1
  
    //fila 1
    cy.get('[data-p-active="true"]').find('table[aria-label="requisitos"').find('tbody tr').eq(0).find('td').eq(2).find('input[type="file"]').attachFile('pruebapdf.pdf');
    
    cy.get('[data-p-active="true"]').find('table[aria-label="requisitos"]').find('tbody tr').eq(0).within(()=>{
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
      cy.get('input[type="text"]').type('comentario de prueba');

    });

    cy.get('div[data-pc-section="panelcontainer"]').within(()=>{
      cy.get('button[aria-label="Continuar"]').click();

    });
    
    //paso 2

    //fila 1
    cy.get('[data-p-active="true"]').find('table[aria-label="requisitos"').find('tbody tr').eq(0).find('td').eq(2).find('input[type="file"]').attachFile('pruebapdf.pdf');
    
    cy.get('[data-p-active="true"]').find('table[aria-label="requisitos"]').find('tbody tr').eq(0).within(()=>{
      cy.get('input[type="text"]').type('comentario de prueba');
      
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
    

    //probar las tasas
    cy.get('.dialog-custom').within(()=>{
      cy.wait(1500);
      cy.get('.options-container').find('#sinTasa').click();
      
      cy.get('.options-container').find('#conTasa').click();
      cy.wait(1500);

    });

    cy.get('[aria-label="Cerrar"]').click();
    cy.wait(1000);

    cy.get('.dialog-custom').within(()=>{
      cy.get('.options-container').find('#no').click();
      cy.get('button[aria-label="Continuar"]').click();
    });
    
    cy.wait(1000);

    //subir elemento
    cy.get('.p-8').within(()=>{
      cy.get('.basis-full').find('input[type="file"]').attachFile('pruebaexcel.xlsx');
    }); 

    cy.get('button[aria-label="Continuar"]').click();  

    //ventana adventencia
    cy.get('button[aria-label="CERRAR"]').click();
    cy.wait(1000);
    cy.get('button[aria-label="ESTOY DE ACUERDO"]').click();
    cy.wait(1000);

    cy.get('button[aria-label="Presentar Solicitud"]').click();
    cy.wait(1000);
    cy.get('button[aria-label="CERRAR"]').click(); 
    cy.wait(1000);
    
    */
  
  })
});
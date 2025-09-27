import { Environment } from "../support/enum/environment";


describe('Modulo1: estacionamiento vehicular en zonas urbanas', () => {

  it('Test Estacionamiento Vehicular en Zonas Urbanas', () => {
    
    let mod=2;//modulo de prueba
    let ser=3;//regimen - regimen nuevo,ipc,prorroga
    let num=2;//fila - servicio - barrido,residuos,parque,serenazgo
    let url='http://172.29.170.36:5555?t=eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJVdWh3RktFM19PLWV0aEtqY2Z2cWxwT0QzeE1mTHoyNjVPQm0wdFpENG5NIn0<eyJleHAiOjE3NTI2NTgwNTgsImlhdCI6MTc1MjU4NjA1OCwianRpIjoiM2ZmNzEyYmMtNDQ4NC00YWZkLTliNTEtMzFjYTBiM2JmNGVkIiwiaXNzIjoiaHR0cDovLzE3Mi4yOS41NS41NDo4MDgwL3JlYWxtcy9zYXQtbW9iaWxlcyIsInN1YiI6ImNjMWVmMDk4LWMzOTItNGFmNS1hZDMyLWMyMDgwMWI4MjM4YSIsInR5cCI6IkJlYXJlciIsImF6cCI6IlJhdGlmaWNhY2lvbmVzIiwic2Vzc2lvbl9zdGF0ZSI6IjA2OTY4OGZlLTQ4NjYtNGM2Ny1hODkwLTg0MzkwMWNiZWRjYiIsInNjb3BlIjoiIiwic2lkIjoiMDY5Njg4ZmUtNDg2Ni00YzY3LWE4OTAtODQzOTAxY2JlZGNiIn0<qimb_uffLk_0XTjUDR8cDdWNS1ADg1rInH6NL0FIcE-ypCNSsmhhDfAKL_WrKiiwv3dWRcjeJPfqucmZJiVSrRTyv-UJBSmc1zoi1gbPnL_LwiVu6PjRo5NXjrsKKJLkwwRKFq1wylnbrS41Xg0h9xXa79eFhftY-whPhWT0JoYoH2O3AOrq1a7pWB5yv7UZJXa9hODKMOHGcmoMSAMaqJxQzjFd595XksrctwSKbBNG7dOrxDBKViPAgtB4iyxQF_ul1DDWdlXhfR0fhYHiJhQln_mg3iMSR_JtCX6ML1F8GsG9HQHN7VbidzsV2hKgJu74lMiGczIBlYzEcY05hg&cp=301356&rt=eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwYjk5YWRmYS1lNzgwLTRkMjgtYTE2ZC1jMTY4M2JkNGUzZGQifQ<eyJleHAiOjE3NTI2MjIwNTgsImlhdCI6MTc1MjU4NjA1OCwianRpIjoiZGIyZThkNjMtZWFkNy00Y2U0LTg5YzEtZGE1OWE0MGI4MWUwIiwiaXNzIjoiaHR0cDovLzE3Mi4yOS41NS41NDo4MDgwL3JlYWxtcy9zYXQtbW9iaWxlcyIsImF1ZCI6Imh0dHA6Ly8xNzIuMjkuNTUuNTQ6ODA4MC9yZWFsbXMvc2F0LW1vYmlsZXMiLCJzdWIiOiJjYzFlZjA5OC1jMzkyLTRhZjUtYWQzMi1jMjA4MDFiODIzOGEiLCJ0eXAiOiJSZWZyZXNoIiwiYXpwIjoiUmF0aWZpY2FjaW9uZXMiLCJzZXNzaW9uX3N0YXRlIjoiMDY5Njg4ZmUtNDg2Ni00YzY3LWE4OTAtODQzOTAxY2JlZGNiIiwic2NvcGUiOiIiLCJzaWQiOiIwNjk2ODhmZS00ODY2LTRjNjctYTg5MC04NDM5MDFjYmVkY2IifQ<HK0PnnSXJVUaKGYjlqS5QI5Dmunxhymx0C3oAX1rrgQ&cr=1'; 
   // const url=Cypress.env(Environment.URL_ROOT);
   // cy.log(url);

    while(mod <= 4)
    {

    //paso 1: acceder a la web

    //test modulo 1
    cy.SitioWeb(url);
    cy.wait(3000);
    cy.get('[aria-label="Estacionamiento Vehicular en Zonas Urbanas"]').click();

    if(mod == 2){
      //test modulo 2
      cy.SitioWeb(url);
      cy.wait(3000);
      cy.get('[aria-label="Arbitrios Municipales"]').click();

    }else{
      if(mod == 3){
        //test modulo 3
        cy.SitioWeb(url);
        cy.wait(3000);
        cy.get('[aria-label="Ratificaciones de Ordenanzas Municipales"]').click();

      }else if (mod == 4){
        //test modulo 4
        cy.SitioWeb(url);
        cy.wait(3000);
        cy.get('[aria-label="Estacionamiento Vehicular en Playas"]').click();
      }
    }
  
    //----------------------------------MODULOS ------------------------------------------

    //ventana modal dias faltantes
    cy.AceptModalDiasFaltantes(mod);

    //probar eliminar una solicitud
    //cy.TestElimSolic(3); //enviar la fila que deseas acceder

    if(mod==2)
    {
      //paso 2: crear solicitud
      cy.CreSolMod(ser);
      //paso 3: acceder a solicitud
      cy.AcceTabSolic(num);

    }else
    {
      //paso 2: crear solicitud
      cy.CrearSolic();

      //paso 3: acceder a solicitud
      cy.AccederSolic(1); //envia a la fila que deseas acceder

    }
   
    //paso 4: agregar representantes 
    //compobar si hay filas en la tabla representantes
    cy.get('tbody').then(($tab)=>{

      if($tab.find('tr').length === 0){
        cy.log('No existe la tabla representantes');

        cy.AgregarRepret('12345678','jose parso gonzales');
        cy.AgrDatRep('jmarca@sat.gob.pe','jefe','940482244');

        //---segunda persona
        cy.AgregarRepret('12345678','jose parso gonzales');
        cy.AgrDatRep('jmarca@sat.gob.pe','jefe','940482244');

        //---tercera persona
        cy.AgregarRepret('12345678','jose parso gonzales');
        cy.AgrDatRep('jmarca@sat.gob.pe','jefe','940482244');

        //---eliminar persona
        cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(2).find('td').eq(4).find('a').click();

        //adjuntar archivo de acreditacion de cargo
        cy.get('div[data-pc-name="fileupload"]').find('input[type="file"]').attachFile('pruebapdf.pdf');
        cy.get('div').should('have.class','pt-4').find('button[aria-label="Continuar"]').click();
        
      }else{

        cy.log('Existe representantes agregados');
       
        //---primera persona
        cy.AgrDatRep('jmarca@sat.gob.pe','jefe','940482244');

        //---segunda persona
        cy.AgrDatRep('jmarca@sat.gob.pe','jefe','940482244');

        //---tercera persona
        cy.AgregarRepret('12345678','jose parso gonzales');
        cy.AgrDatRep('jmarca@sat.gob.pe','jefe','940482244');

        //---eliminar persona
        cy.get('table[aria-label="datos generales"]').find('tbody tr').eq(2).find('td').eq(4).find('a').click();

        //adjuntar archivo de acreditacion de cargo
        cy.get('div[data-pc-name="fileupload"]').find('input[type="file"]').attachFile('pruebapdf.pdf');
        cy.get('div').should('have.class','pt-4').find('button[aria-label="Continuar"]').click();
       
      }

    });

    cy.get('li').then(($li)=>{

      cy.log('espacio tablas');

      cy.log(($li.length).toString());
      
      if( $li.length === 4){
        cy.log("modo 2");
        //paso 1
        cy.RecTab('pruebapdf.pdf','pruebaword.docx','comentario de prueba');

        //paso 2
        cy.RecTab('pruebapdf.pdf','pruebaword.docx','comentario de prueba');
      
      }else{

        cy.log("modo 1,3,4");
        //paso 1
        cy.RecTab('pruebapdf.pdf','pruebaword.docx','comentario de prueba');

        //paso 2
        cy.RecTab('pruebapdf.pdf','pruebaword.docx','comentario de prueba');
    
        //paso 3
        cy.RecTab('pruebapdf.pdf','pruebaword.docx','comentario de prueba');

      }

    });
  
    if(mod==2 && ser==2 ){

      cy.ComboxIpc(num,ser);
      cy.GenTasasMod2();

    }else{

      if(mod==2 && ser==3){

        cy.GenTabCost();
        cy.GenTasasMod2();

      }else{

          //descarga de formatos
          cy.DescPlant('pruebaexcel.xlsx');
          
          //probar las tasas
          cy.TestTasas(mod);

          //subir elemento
          cy.SubiDesArch('pruebaexcel.xlsx',3);

          //ventanas modales
          cy.ModalConfFin();

          //modal dias faltantes
          cy.AceptModalDiasFaltantes(mod);

      }

    }
    
    mod++;
  }
    
        });
});
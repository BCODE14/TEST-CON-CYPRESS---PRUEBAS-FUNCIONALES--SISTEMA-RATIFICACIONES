/// <reference types="cypress" />


import 'cypress-file-upload';

//creando comandos funciones compartidas por todas los demas test

//#region definicion de la url
Cypress.Commands.add('SitioWeb',(WEB:string)=>{

    const ini = Date.now();

    cy.visit(WEB).then(()=>{

      const fin=Date.now();
      const dur_total=ini - fin;
      expect(dur_total,`tiempo de espera de carga de la pagina`).to.be.lessThan(3000);
    });

});

//#region crear solicitud
Cypress.Commands.add('CrearSolic',()=>{

    //crear solicitud de retificacion
    cy.get('[aria-label="Nuevo"').click();
    cy.wait(2000);
    cy.get('[aria-modal="true"]').find('button[aria-label="Continuar"]').click();
    cy.wait(2000);

});

//#region acceder solicitud creada
Cypress.Commands.add('AccederSolic',(fila:number)=>{

    //acceder a una solicitud ya creada
    cy.get('tbody tr').eq(fila).find('td').eq(4).within(()=>{
      cy.get('button[aria-label="Continuar"]').click();
    });

    //aceptar modal de dias falta
    cy.get('[aria-modal="true"]').find('button[aria-label="Aceptar"]').click();
    cy.wait(2000);

});

//#region eliminar solicitud
Cypress.Commands.add('TestElimSolic',(fila:number)=>{

    //eliminar una solicitud
    cy.get('tbody tr').eq(fila).find('td').eq(4).find('.flex-none').within(()=>{
      cy.get('button[type="button"]').click();
    });

    //eliminar el modal de dias faltantes 
    cy.get('div[role="alertdialog"]').find('button[aria-label="Aceptar"]').click();

});

//#region agregar represt
Cypress.Commands.add('AgregarRepret',(dni:string,nom:string)=>{
        cy.get('.basis-3\\/12').find('input[data-pc-name="inputtext"]').type(dni);
        cy.get('#nombreRepresentante').type(nom);
        cy.get('button[aria-label="Añadir"]').click();
        cy.wait(2000);
});

//#region agregar datos
Cypress.Commands.add('AgrDatRep',(correo:string, cargo:string, celular:string)=>{

    cy.get('table[aria-label="datos generales"]').find('tbody tr').each(($fila,index,$lista)=>{

        cy.wrap($fila).find('td').eq(1).find('#correoRepresentante').clear();
        cy.wrap($fila).find('td').eq(1).find('#correoRepresentante').type(correo);
        
        cy.wrap($fila).find('td').eq(2).find('#cargoRepresentante').clear();
        cy.wrap($fila).find('td').eq(2).find('#cargoRepresentante').type(cargo);

        cy.wrap($fila).find('td').eq(3).find('#telefonoRepresentante').clear();
        cy.wrap($fila).find('td').eq(3).find('#telefonoRepresentante').type(celular);

    });

});


Cypress.Commands.add('TestBtnElim',()=>{

      //probar btn ver y eliminar
      cy.get('[data-p-active="true"]').find('table[aria-label="requisitos"]').find('tbody tr').eq(0).find('td').eq(3).within(()=>{
      cy.get('input[type="file"]').attachFile('pruebaword.docx'); 
      cy.wait(1000);
      cy.contains('Ver').click();
      cy.contains('Eliminar').click();
      
    }); 
});

//#region iterar tabla
Cypress.Commands.add('RecTab',(filepdf:string,filedoc:string,coment:string)=>{

       cy.get('[data-p-active="true"]').find('table[aria-label="requisitos"').find('tbody tr').each(($fila,index,$lista)=>{

          cy.log(($fila.find('td').length).toString());
         
          if( $fila.find('td').length != 0 ){

            cy.wrap($fila).find('td').eq(2).find('input[type="file"]').attachFile(filepdf);

        
            //probar btn ver y eliminar
            cy.wrap($fila).then(($fila)=>{

                if( $fila.find('td').eq(3).find('input[type="file"]').length >= 1 ){

                    cy.get('input[type="file"]').attachFile(filedoc); 
                    cy.wait(1000);
                    cy.contains('Ver').click();
                    cy.contains('Eliminar').click();

                }else{

                    cy.log('No hay para adjuntar archivos')

                }
            });

            //probar comentarios
            cy.wrap($fila).then(($fila)=>{

              cy.log(($fila.find('td').eq(5).find('input[type="text"]').length).toString());

                if( $fila.find('td').eq(5).find('input[type="text"]').length == 1){

                  cy.log(($fila).toString());
                  cy.log(($fila.find('td').eq(5).find('input[type="text"]').length).toString());

                    cy.wrap($fila).find('td').eq(5).find('input[type="text"]').type(coment);
                
                    
                }else{

                    cy.log('no hay input de comentario');
                }

            });
 
    
          }else{

            cy.log('no tiene columnas');

          }

          });

        cy.wait(1000);
        cy.get('div[data-pc-section="panelcontainer"]').within(()=>{
              cy.get('button[aria-label="Continuar"]').click();
              cy.wait(3000);
        }); 
            

});

//#region descargar formatos
Cypress.Commands.add('DescPlant',(fileexcel:string)=>{

    cy.get('.p-8').find('table[aria-label="requisitos"]').find('tbody tr').eq(0).within(()=>{

      cy.contains('Descargar formato').click();
      cy.get('input[type="file"]').attachFile(fileexcel);

    });

    cy.get('.p-8').within(()=>{
          cy.get('button[aria-label="Continuar"]').click();

    });


});

//#region probar tasas
Cypress.Commands.add('TestTasas',(mod:number)=>{
/*
    cy.get('.dialog-custom').within(()=>{
      cy.wait(1500);
      cy.get('.options-container').find('#sinTasa').click();
      
      cy.get('.options-container').find('#conTasa').click();
      cy.wait(1500);

    });

    //ventana modal --aplicar logica
    cy.get('[aria-label="Cerrar"]').click();
    cy.wait(1000);

    cy.get('.dialog-custom').within(()=>{
      cy.get('.options-container').find('#no').click();
      cy.get('button[aria-label="Continuar"]').click();
    });
    
    cy.wait(1000);
*/

      if(mod == 2){

        //probar las tasas nuevo regimen
        cy.get('[role="dialog"]').within(()=>{
        cy.wait(1500);
        cy.get('#rbtnRespuestaopc2').find('[name="rbtnRespuestaopc2"]').click();
      
        cy.get('#rbtnRespuestaopc3').find('[name="rbtnRespuestaopc3"]').click();
        cy.get('#rbtnRespuestaopc1').find('[name="rbtnRespuestaopc1"]').click();
        cy.wait(1500);
        cy.get('button[aria-label="Continuar"]').click();
        cy.get('[aria-label="CERRAR"]').click();
        cy.wait(1000);
     
        });

      }else{
  
        cy.get('.dialog-custom').within(()=>{
        cy.wait(1500);
        cy.get('.options-container').find('#sinTasa').click();
        cy.get('.options-container').find('#no').click();
        cy.get('.options-container').find('#conTasa').click();
        cy.wait(1500);

        });

        //ventana modal --aplicar logica
        cy.get('[aria-label="Cerrar"]').click();
        cy.wait(2000);

        cy.get('.dialog-custom').within(()=>{
          
          cy.get('button[aria-label="Continuar"]').click();
        });
        
        cy.wait(2000);

        cy.get('.dialog-custom').within(()=>{
          
          cy.get('button[aria-label="Continuar"]').click();
        });
        
        cy.wait(2000);

      }
    
});

//#region subir y descargar archivo
Cypress.Commands.add('SubiDesArch',(filexcel:string, mod:number)=>{ 

   if( mod == 1){

      //modu 1
      cy.get('.p-8').within(()=>{
        cy.get('.basis-full').find('input[type="file"]').attachFile(filexcel);
      }); 

      cy.wait(1000);
      cy.get('button[aria-label="Continuar"]').click(); 

    }else{
      if( mod == 2){

        cy.get('.p-8').within(()=>{
            //en caso exista el boton descargar descarga el documento en caso no solo sube el archivo el caso es solo para la opcion no
        cy.get('[role="tabpanel"]').find('input[type="file"]').attachFile(filexcel);
        }); 

        cy.get('button[aria-label="Continuar"]').click();

      }else{
        
        //modu 3 y 4
        cy.get('.p-8').within(()=>{
          //en caso exista el boton descargar descarga el documento en caso no solo sube el archivo el caso es solo para la opcion no
        cy.get('[data-pc-name="fileupload"]').find('input[type="file"]').attachFile(filexcel);
        cy.wait(2000);
        cy.get('button[aria-label="Continuar"]').click(); 

      });

    } }  

});

//#region ventanas finales de confirmacion
Cypress.Commands.add('ModalConfFin',()=>{

    cy.get('button[aria-label="CERRAR"]').click();
    cy.wait(1000);
    cy.get('button[aria-label="ESTOY DE ACUERDO"]').click();
    cy.wait(1000);

    cy.get('button[aria-label="Presentar Solicitud"]').click();
    cy.wait(1000);
    cy.get('button[aria-label="CERRAR"]').click(); 
    cy.wait(1000);

});

//#region modal dias faltantes
Cypress.Commands.add('AceptModalDiasFaltantes',(mod:number)=>{

    if(mod == 1){

    }else{

      if(mod == 2){

      }else{
        cy.get('div[role="dialog"]').find('button[aria-label="Aceptar"]').click();
      }
      
    }
});


//#region crear solicitud modulo 2

Cypress.Commands.add('CreSolMod',(reg:number)=>{

   //crear nueva solicitud

    cy.get('[aria-label="Nuevo"').click();
    cy.wait(2000);

    cy.get('table[aria-label="crear-solicitudes"]').find('tbody tr').each(($fila,index,$lista)=>{

        cy.wrap($fila).find('td').eq(reg).find('input[type="radio"]').click();
       

      });

      cy.get('[data-pc-section="content"]').find('button[aria-label="Crear"]').click();


    });

Cypress.Commands.add('AcceTabSolic',(num:number)=>{

    cy.get('tbody tr').eq(0).find('td').eq(0).find('button[type="button"]').click(); //tb solicitudes de rati

    cy.get('tbody tr').eq(1).find('td').eq(0).within(()=>{ //tb servicios
        //hay que ver aqui
        cy.get('tbody tr').eq(num).find('td').eq(num).find('button[aria-label="Continuar"]').click(); //fila servicios
    });

    cy.get('div[role="dialog"]').find('button[aria-label="Close"]').click();


});

//#region selecion de %ipc -exclusivo modulo2

Cypress.Commands.add('ComboxIpc',(num:number,ser:number)=>{

    //selecion de %ipc exclusivo de modo ipc - calles,residuos,parques y serenazgo
    

    //cy.get('[role="combobox"]').contains('span','Seleccione').invoke('text','Febrero - 0.58 %');
    
    cy.get('[data-pc-name="dropdown"]').click();
    cy.wait(3000);
    cy.get('[data-pc-section="panel"]').find('div ul').find('li[aria-label="Enero - 0.09 %"]').click();


    cy.get('button[aria-label="Guardar"').click();
    cy.wait(2000);
    cy.get('button[aria-label="Close"]').click();
    cy.wait(3000);
    cy.get('button[aria-label="Continuar"]').click();
    cy.wait(2000);

    if(num === 2 && (ser === 2 || ser ===3)  )
    {
      //paso exclusivo de servicios de recoleccion de residuos solidos - ventana modal de comencio anbulatorio
      cy.wait(1000);
      cy.get('#confirmacion1').click();
      cy.get('#confirmacion2').click();
      cy.wait(1000);
      cy.get('[role="dialog"]').within(()=>{

          cy.get('button[aria-label="Continuar"]').click();

      });

    } 
     
});

//#region generar tb costos - regimen prorroga 
Cypress.Commands.add('GenTabCost',()=>{

    //paso 3 generacion tb de costos - prorroga -serenazgos
    cy.get('button[aria-label="Generar costos"]').click();
    cy.get('button[aria-label="Guardar"').click();
    cy.wait(2000);
    cy.get('button[aria-label="Close"]').click();
    cy.wait(3000);
    cy.get('button[aria-label="Continuar"]').click();
    cy.wait(2000);

});

//#region generar tasas -exclusivo modulo2
Cypress.Commands.add('GenTasasMod2',()=>{

    //paso 4 generacion tb de tasas - prorroga -serenazgos 
    cy.contains('GENERAR TASA ESTIMADA 2026').click();
    cy.get('button[aria-label="Guardar"').click();
    cy.wait(2000);
    cy.get('button[aria-label="Close"]').click();
    cy.wait(3000);
    cy.get('button[aria-label="Continuar"]').click();
    cy.wait(2000);
    cy.get('button[aria-label="CERRAR"]').click();
    cy.wait(2000);
    cy.get('button[aria-label="ESTOY DE ACUERDO"]').click();
    cy.wait(2000);
    cy.get('button[aria-label="CERRAR"]').click();
});


//#region declaracion de funciones
declare global {
    namespace Cypress {
     interface Chainable {
       SitioWeb(web:string):Chainable<void>;
       CrearSolic():Chainable<void>;
       AccederSolic(fila:number):Chainable<void>;
       TestElimSolic(fila:number):Chainable<void>;
       AgregarRepret(dni: string, mon: string): Chainable<void>;
       AgrDatRep(correo:string, cargo:string, celular:string): Chainable<void>;
       TestBtnElim(): Chainable<void>;
       RecTab(filepdf:string, filedoc:string, coment:string): Chainable<void>;
       DescPlant(fileexcel:string): Chainable<void>;
       TestTasas(mod:number):Chainable<void>;
       SubiDesArch(filexcel:string,mod:number):Chainable<void>;
       ModalConfFin():Chainable<void>;
       AceptModalDiasFaltantes(mod:number):Chainable<void>;
      //Modulo 2
       CreSolMod(reg:number):Chainable<void>;
       AcceTabSolic(num:number):Chainable<void>;
       ComboxIpc(num:number,ser:number):Chainable<void>;
       GenTasasMod2():Chainable<void>;
       GenTabCost():Chainable<void>;
     }
   }
 }

 export{};
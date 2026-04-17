describe('Tests de l\'application bibli', () => {
  
    beforeEach(() => {
      // On considère que l'app tourne sur le port par défaut de Vite
      cy.visit('http://127.0.0.1:8000/');
      
    })
    
    // Créer une catégorie
    // it('Se connecter ', () => {
    //   cy.get('input[name="email"]').type('Ed.snowden@gmail.ru');
    //   cy.get('input[name="password"]').type('123');
    //   cy.get('button').click();
      
    //   cy.visit('https://library.mithridatem.fr/category/all')
    //   cy.get("a").eq(8).should("have.text", "Ajouter une categorie").click();
    //   cy.get('input[name="name"]').type('categorie');
    //   cy.get('button').click();
    //   cy.visit('https://library.mithridatem.fr/category/all')
      
    // })


    // Ajouter un livre
    // it('Ajouter un livre ', () => {
    //   cy.get('input[name="email"]').type('Ed.snowden@gmail.ru');
    //   cy.get('input[name="password"]').type('123');
    //   cy.get('button').click();
      
    //   cy.get("summary").should("have.text", "Livres").click();
    //   cy.get("a").eq(3).should("have.text", "Ajouter un livre").click();
    //   cy.get('input[name="title"]').type('Arbre au Cœur de Cristal');
    //   cy.get('input[name="author"]').type('Éléonore Moreau');
    //   cy.get('textarea').type('Entre magie, aventure et découverte de soi, Arbre au Cœur de Cristal est un conte captivant qui célèbre la puissance de la nature, la force de espoir et limportance de préserver les secrets du monde.');
    //   cy.get('input[name="publish_at"]').type('2026-04-16');
    //   cy.get('input[name="cover"]').selectFile("/Users/Quentin/Documents/adrar/test/test-center/test-center-app/cypress/fixtures/livre.webp");
    //   cy.get('option').eq(0).click();
    //   cy.get('button').click();
    // })

    // Se déconnecter
    it('Se déconnecter ', () => {
      cy.get('input[name="email"]').type('Ed.snowden@gmail.ru');
      cy.get('input[name="password"]').type('123');
      cy.get('button').click();
      
      cy.get("a").eq(7).should("have.text", "Deconnexion").click();

      
    })

    
})
    

    
  
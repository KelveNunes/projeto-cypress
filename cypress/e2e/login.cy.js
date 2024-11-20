describe('Teste de Login no Site', () => {
    beforeEach(() => {
      cy.visit('/'); 
    });
  
    it('Deve fazer login com credenciais válidas', () => {
      cy.get('#username').type('usuario_exemplo');
      cy.get('#password').type('senha_secreta');
      cy.get('button[type="submit"]').click();
  
      
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Login bem-sucedido!');
      });
    });
  
    it('Deve mostrar erro com credenciais inválidas', () => {
      cy.get('#username').type('usuario_errado');
      cy.get('#password').type('senha_errada');
      cy.get('button[type="submit"]').click();
  
      
      cy.get('#message').should('be.visible').and('contain', 'Credenciais inválidas');
    });
  
    it('Deve validar campos obrigatórios', () => {
      cy.get('button[type="submit"]').click();
  
      
      cy.get('#username:invalid').should('exist');
      cy.get('#password:invalid').should('exist');
    });
  });
  
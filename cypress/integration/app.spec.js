describe('App', () => {
    it('Can access site', () => {
        cy.visit('http://localhost:3000');
    });

    it('Contains all relevant sentences', () => {
        cy.contains('Hola, Soy Pablo ;)');
        cy.contains('Soy Diseñador / FullStack Web Developer.');
        cy.contains('Conocimientos');
        cy.contains('Proyectos');
        cy.contains('Contactame');
        cy.contains('Teléfono');
        cy.contains('261-335-2786');
        cy.contains('E-mail');
        cy.contains('pablofretes.balzarelli@gmail.com');
        cy.contains('Mas cosas que saber sobre mi');
        cy.contains('Ingles bilingüe.');
        cy.contains('Curso completo de FullStack Open 2021');
        cy.contains('Perfil de Codewars');
    });

    it('Contains all sections and buttons', () => {
        cy.get('[data-cy=home-section]');
        cy.get('[data-cy=skills-section]');
        cy.get('[data-cy=projects-section]');
        cy.get('[data-cy=contact-section]');
        cy.get('[data-cy=home-button]');
        cy.get('[data-cy=skills-button]');
        cy.get('[data-cy=contact-button]');
        cy.get('[data-cy=projects-button]');
        cy.get('[data-cy=github-button]');
    });

    it('Scrolls correctly', () => {
        cy.get('[data-cy=contact-button]').click();
        cy.window().its('scrollY').should('not.equal', 0);
        cy.get('[data-cy=home-button]').click();
        cy.window().its('scrollY').should('not.equal', 0);
        cy.get('[data-cy=projects-button]').click();
        cy.window().its('scrollY').should('not.equal', 0);
        cy.get('[data-cy=skills-button]').click();
        cy.window().its('scrollY').should('not.equal', 0);
    });
})
/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]').eq(3).click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 5

        cy.get('[class="product-block grid"]').eq(3).click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear()
        cy.get('.input-text').type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')
    });
    
    it('Deve adicionar produtos ao carrinho usando comando customizado', () => {
        cy.addProdutos(3, 'XS', 'Blue', 5)
    });

});
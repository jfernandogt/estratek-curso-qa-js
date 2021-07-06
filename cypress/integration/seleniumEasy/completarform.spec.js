/// <reference types="cypress" />

context('Selenium Easy: Completar Formulario', () => {
  Cypress.on('uncaught:exception', () => {
    return false
  })

  before(() => {
    cy.fixture('usuario').then((usuario) => {
      // "this" is still the test context object
      this.usuario = usuario
    })
  })

  beforeEach(() => {
    cy.visit('https://www.seleniumeasy.com/test/input-form-demo.html')
  })

  it('completar formulario', () => {
    cy.get("input[name='first_name']").type(this.usuario.nombre)
    cy.get("input[name='last_name']").type(this.usuario.apellido)
    cy.get("input[name='email']").type(this.usuario.correo)
    cy.get("input[name='phone']").type(this.usuario.numero)
    cy.get("input[name='address']").type(this.usuario.direccion)
    cy.get("input[name='city']").type(this.usuario.city)
    cy.get("select[name='state']").select(this.usuario.estado)
    cy.get("input[name='zip']").type(this.usuario.zip)
    cy.get("input[name='website']").type(this.usuario.sitioweb)
    cy.get(`input[type="radio"][value="${this.usuario.tieneHosting}"]`).check()
    cy.get("textarea[name='comment']").type(this.usuario.comentario)
    cy.get("button[type='submit']").click()
  })
})

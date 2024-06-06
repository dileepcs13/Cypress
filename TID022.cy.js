/// <reference types="cypress" />

it('phoneplan', function(){
    cy.visit('https://staging.checkout.akko.app/us/dynamic-checkout/phone-plan?interval=annual')

    cy.get('input[placeholder="Cell Phone Number"]').type('6360003243')

    cy.get('input[placeholder="First Name"]').type('Dileep')

    cy.get('input[placeholder="Last Name"]').type('CS')

    cy.get('input[placeholder="Email Address"]').type('dileep.cs90@gmail.com')

    cy.get('input[placeholder="Postal Code"]').type('08717')

    cy.get('.__PrivateStripeElement > iframe').then(($element) => {
        const $body = $element.contents().find("body");
        
        let stripe = cy.wrap($body);
        stripe
            .find('[data-elements-stable-field-name="cardNumber"]')
            .eq(0)
            .click()
            .clear()
            .type('4242424242424242', {force: true});
        stripe = cy.wrap($body);
        stripe
            .find('[data-elements-stable-field-name="cardExpiry"]')
            .eq(0)
            .click()
            .clear()
            .type('1227', {force: true});
        stripe = cy.wrap($body);
        stripe
            .find('[data-elements-stable-field-name="cardCvc"]')
            .eq(0)
            .click()
            .clear()
            .type('987', {force: true});

      })

    cy.get(':nth-child(4) > .d-flex > div > input').click()

    cy.contains('button', 'Register Now').click()

    cy.contains('button', 'Skip for Now').click()
})
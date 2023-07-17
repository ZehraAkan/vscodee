
class EbebekPage {
    elements = {
        aramabutonu: () => cy.get('#txtSearchBox'),
        cikanIlkurUruneTiklar: () => cy.xpath("(//h2[@class='product-item__brand'])[1]"),
        sepeteEkle: () => cy.get('#addToCartBtn'),
        sepet: () => cy.get('#btnShowCart'),
    }

    anasayfayaGidilir(Anasayfa) {
        cy.visit(Anasayfa);
    }

    aramaKutusunaDegerGirilir() {
        cy.wait(2000);
        this.elements.aramabutonu().should('be.visible').type('biberon{enter}')
        
    }

    cikanIlkurUruneTiklar() {
        cy.wait(2000);
        this.elements.cikanIlkurUruneTiklar().click()
    }

    ilgiliUrunSepeteEklenir() {
        cy.wait(2000);
        this.elements.sepeteEkle().click({ force : true})
    }

    sepetKontrol() {
        cy.wait(2000);
        this.elements.sepet().should('be.visible')

        
    }
}

module.exports = new EbebekPage();
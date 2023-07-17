
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const ebebekPage = require('../../pages/EbebekPage'); 

    Given("E-bebek ana sayfasına gidilir {string}", (Anasayfa) => {
        ebebekPage.anasayfayaGidilir(Anasayfa)
    });

    Then("Arama çubuğuna biberon yazılır ve aratılır", () => {

        ebebekPage.aramaKutusunaDegerGirilir() 
    });

    Then("Çıkan ilk ürüne tıklanır", () => {
        ebebekPage.cikanIlkurUruneTiklar()
        
    });

    Then("İlgili ürün sepete eklenir", () => {
        ebebekPage.ilgiliUrunSepeteEklenir()
        
    });

    Then("Sepete eklendiği kontrol edilir", () => {
        ebebekPage.sepetKontrol()
        
    });

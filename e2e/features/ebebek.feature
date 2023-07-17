Feature: ebebek

    Scenario Outline: Sepet Kontrolü
       Given E-bebek ana sayfasına gidilir "<Anasayfa>"
       Then Arama çubuğuna biberon yazılır ve aratılır
       And Çıkan ilk ürüne tıklanır 
       And İlgili ürün sepete eklenir
       And Sepete eklendiği kontrol edilir

    Examples:
        | Anasayfa                 | 
        | https://www.e-bebek.com/ | 



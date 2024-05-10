---
layout: post
category: teknik
---


Kod yazarken yardıma ihtiyacı olmayan yok, bu İngilizce, Türkçe her blogta, forumda, videoda bahsedilen bir gerçek. Yeni başlayan ya da uzman herkesin bir noktada birine ya da bir şeye danışması gerekiyor. 

Hem yardım alan hem de yardımcı olan tarafta sık sık bulunan biri olarak, bu sürecin iki taraf için de kolaylaşmasını ve hızlanmasını sağlayacak olan bazı tecrüblerim var.

### Hatanın anlaşılması ve analiz edilmesi

İkinci bir kişiye başvurmadan önce yapabileceğimiz çok fazla şey var ve bunlar herkesten önce bize zaman kazandıran adımlar. En önemlisi karşılaştığımız hatanın aslında ne olduğunu bilmeliyiz.

**Hata ayıklama (debugging)**

Hata ayıklama, programlamanın bir parçası. Hatta bir parçası bile değil ya direkt kendisi diyeceğim. Hataya sebep olan kodu da programlayan kişi yazdı sonuçta. En kolay düzeltebilecek kişi de o. 

Bu adım hatanın çözülebileceği en kolay adım aslında. Özellikle yeni programlama öğrenenler doğru debuglamayı da öğrenirlerse hataların %90’ından stackoverflow’a gitmezler bile. IDE’lerin özel debug araçları var ve bunlar kullanışlı ama ondan önce çok basit print, log ifadelerini doğru yerlere koymak ve çıktılarını görmek baş ağrılarını baştan önleyebilir. *“Loop çalışmıyor”* geçerli bir hata tarifi değildir. Loop başına, sonuna, işlemin yapıldığı noktalara birer log atarız. Bunun sonucunda hatayı, *“loopa girmiyor, looptan çıkmıyor ya da loopta işlem yapılmıyor”* diye küçültebiliriz. Uğraşacağımız kısım çok daha dar bir alan oldu artık. 

**Kod tekrarları**

Aynı kodu başka bir yerde yazdınız, oradaki çalışıyor ama bu çalışmıyor. Demek ki burada bir problem var. Orayla burası arasında ne fark var? Aynı dosyalar mı import ediliyor, aynı değişkenler tanımlanmış mı, aynı noktaya varıyorlar mı? Orada çalışan kodun burada çalışmamasının tek sebebi farklı bir şeylerin olmasıdır. O farkı bulmalı ve hatayla ilişkilendirmeliyiz.

**Hata mesajları**

IDE veya editorler eğer bariz bir hata yapıldıysa mutlaka hata mesajı veriyor. Onları boşuna vermiyor. Bazen *"missing }"* hatası yardım platformlarında  soruluyor. Bilgisayar aslında açık ve net bir şekilde x. satıra bir tane " } " koy diyor. Yani nereye ne koyacağına kadar söylüyor bunlara dikkat edebiliriz.

Hata mesajlarını anlamak bazen çok kolay olmuyor. Özellikle geliştirme platformu Türkçe ise benim kafamı çok karıştırıyor, sebebi de teknik terimlerin çevrilmesi. *Uç arabirim beklenmedik şekilde sonlandırıldı* cümlesi beynimde okuduğum anda bir anlam ifade etmiyor. Bu tür yardımcı araçları anlamak için ekstra efor sarfetmemize gerek olmamalı diye düşünüyorum.

### Araştırma adımı

Programcının en EN büyük becerisi arama motoru kullanabilme becerisidir. Benim 4 yıllık öğrenciliğim boyunca internette aratıp da bulamadığım birkaç tane problem olmuştur. Bunların belki bir iki tanesi gerçekten spesifik sorular olduğu için bulunmamıştır, diğerlerinde eminim ki ben doğru anahtar kelimelerle araştırmamışımdır. Eğer  ***gerçekten*** internette çözümü olmayan bir şey bulduysanız ***gerçekten iyi bir şeyler*** bulmuş olabilirsiniz. <span class="emoji">😶‍🌫️</span>

**Anafikre odaklanmak**

Diyelim ki basit bir “todo list” mobil uygulaması yapıyoruz. Görevleri bir liste yapısında tutuyoruz. Listelere ögeleri ekleyecek kodu yazdık ama kaldırmayı yapamadık. İnternette araştırdığımız cümle *“yapılacaklar listesinden öge kaldırma”* olursa herhalde üretkenlik içerikleri falan çıkar. *“x programlama dilinde yapılacaklar listesinden öge kaldırma”* dersek evet biraz daha amaca uygun ama yine de başkalarının implementasyonlarına dayalı, dinamiği bizim programımıza uymayacak çözümler buluyoruz. 

Bizim ihtiyacımız *“listeden öge silmek, x dili”* şeklinde bir arama. Anafikir yapılacaklar listesi değil, anafikir liste yapısı. 

>İngilizce konusunda çok tutucuyum, her lafımda geçer bu muhtemelen. Araştırmaları da İngilizce yapmak nokta atışı çözümlere ulaştıracaktır. Bana güvenin ve tüm ortamlarınızı İngilizce’ye geçirin.
> 

**ChatGPT**

Yapay zeka destekli yardımcıların kullanılmasına ben karşı değilim. Yeni başlayanların her sıkıştığında oraya gitmesinin ya da direkt kodu istemesinin tabii ki sakıncalı olduğunu düşünüyorum. Herkes kendi bilgi ve yetkinliği doğrultusunda yapay zeka dozunu ayarlayabilir. Yine de oraya başvurmadan önce gerçek insanların yazılı ya da sözlü fikir alışverişi yapması birçok açıdan bana daha doğru ve daha faydalı geliyor.

### Yardım isteme adımı

Hata analiz edildi, ne olduğu az çok anlaşıldı. Hata mesajı yok ya da çözüm sunmadı, problem internette de aranamayacak kadar spesifik ya da karmaşık. Sonuçta sadece programlama hataları konusunda değil algoritma ve mantık konusunda da yardıma ihtiyacımız oluyor. Tam olarak ihtiyacımızı belirtmek zorunda kalabiliriz.

Bu adımlar belirli bir kişiye soru sorarken iki taraf için de kullanışlı olacak ama daha da güzeli, toplu bir platforma sorarken cevap alma olasılığını kat kat arttıracak. Çünkü yardımcı olacak kişi hatayı anlamak için ekstra efor harcamayacak, çözüm odaklı yaklaşabilecek.

**Girebildiğin kadar detaya gir**

*"xx yaparken kod hata veriyor"* cümlesi eksik. Gereksiz yere süreci uzatacak derecede eksik. Ne hatası veriyor? Çalışmıyor mu, çalışıp duruyor mu, hiç tepki vermiyor mu, kapanıyor mu, hata fırlatıyor mu? Problem açık ve net tarif edilmeli. Yine (o bağlamda mümkünse) anafikre odaklanarak sorulmalı.

Probleme dair mümkün olduğunca çok detay verilmeli. Hangi işletim sistemi, hangi platform, hangi dil, hangi framework, hangi modüller her şey önemli.

Hata mesajlarını varsa paylaşılmalı. Siz anlamamış olabilirsiniz ama başkası anlayabilir. İşe yaramıyor diye düşünmemek lazım. 

Kodların ekran görüntüsünü ya da daha da kötüsü fotoğrafını atmak yerine direkt yazılı olarak kod paylaşılmalı. Hem okuması hem de gerekirse kopyalayıp denemesi kolay oluyor. 

Eğer analiz etme kısmında problemi doğru bir şekilde daralttığınızdan eminseniz sadece hatalı olan kısmın kodunu paylaşın. Değilseniz ve tüm kodu paylaşıyorsanız da hatanın nerede olabileceğini belirtin.

**Fikir isterken**

"Yapılacaklar listesi programı nasıl yapılıır?" sorusu da eksik. Kimse oturup sıfırdan bunu anlatmaz, anlatmamalı da zaten. Hangi platforma, hangi araçlar kullanarak yapılacağı gibi detaylar verildikten sonra programın ana yapısı ve nereden başlayacağınıza dair fikir istemek çok daha verimli olacaktır. 

### Bonuslar *(last but not least)*

Bu maddelere bonus dedim ama diyecek daha iyi bir kelime aklıma gelmediği için. Yoksa olmasa da olur maddeler değil bunlar. Olmazsa olmazlar. 

**Kibarlık**

Belirtmeme gerek olması çok üzücü ama var. Kaba biri olmanın alemi yok. Kimse kimseye yardım etmeye mecbur değil, iyilik olsun diye yapılıyor bu işler. Sorunun tartışması boyunca net, temiz cümleler kurup karşımızdakinin bize vakit ayırdığını aklımızdan çıkarmamalıyız. Sorun çözüldükten sonra bir teşekkürü çok görmemeliyiz. Yarın öbür gün aynı kişiye yine danışacağız, yüzümüz olmalı bunu yapmaya.

**Topluluğa geri verme**

Programlama serüveninde bence en önemli şeylerden biri topluluk. Bu topluluk sayesinde öğrenip bu topluluk sayesinde gelişiyoruz. Yazılım/teknoloji topluluğuna her anlamda borçluyuz ve bunu geri ödeyerek döngüyü devam ettirmeliyiz.


>Bütün bunları yardım eden tarafta olmaktan büyük keyif alan biri olarak yazdım. Bu da benzer konularda her zaman sorulara ve yardıma açık olduğuma dair bir hatırlatmadır.
>

---
layout: post
category:
---

Merhaba, <a>şurada</a> staj sürecimle ilgili yazdığım ilk yazının devamı için toplandık burada. Stajı nasıl bulduğum, neler yapacağıma karar verirken geçen birtakım karışık süreçleri anlattığım bu yazıyı geride bıraktığıma göre ilk iki ayın biraz daha teknik detaylarla süslenmiş raporunu yazmanın vakti gelmiştir. İçeriğin veya başlığın yanıltıcı olabilme ihtimalinden dolayı disclaimer’i şimdiden veriyorum: Bu bir tutorial yazısı değildir. Yaptığım çalışmaların en optimal çözümler olduğunu iddia etmiyorum ve öğretici bir kaynaktan ziyade ilham verici bir kaynak oluşturmayı hedefliyorum.


### Programa ve projeye dair

Dahil olduğum staj programına dair birkaç detayı hatırlatarak başlamak istiyorum. 10 ay boyunca uzaktan çalışarak staj yapacağım bu programda web geliştirme üzerine çalışan bir ekibiz.

Nisan ayında bizlere 2 ay sürecek olan bir görev verildi. Bu görevde şirketin kullandığı teknolojilere ve ortamlara adapte olmamız amaçlanıyordu ve görevin çıktısı kullanıcıların giriş yapabildiği, yazı yazıp, başkalarının yazdıklarına oy kullanabileceği basit bir blog sistemi olacaktı. Geçtiğimiz günlerde bu projeyi tamamladık ve sunumlarını yaptık. Süreç boyunca haftalık olarak ekip toplantıları yaparak projede yaptıklarımızı, yapamadıklarımızı tartıştık ve mentörümüzün nokta atışı yönlendirmeleriyle mümkün olduğunca en optimal çözümlere ulaşmaya çalıştık.

Proje front-end ve back-end ayrı geliştirilen bir proje. Yani birbirlerine bağımlılıklarının olmaması, ayrı ayrı çalıştırılabilir ve yayınlanabilir olmaları gerekiyordu. 2 ay boyunca bu planı gerçeklemeye çalıştık.

<br>
Şimdi kullandığımız araçlara biraz yakından bakalım:

#### Back-end

Blog sitesinin back-end kısmında Flask framework’ü ile Python kullandık. İlk denemem yazılı bir kaynak takip ederek çalışır (?) hale getirdiğim ve istekler sonucu html template döndüren versiyondu.

Bu versiyonda yazdığım metotlar şu şekilde görünüyordu:

```python
@app.route('/login', methods=['POST'])
def login():
    return render_template('login.html')
```

Jinja template engine’ini kullanmıştım ki ilk düşüncem _“e iyiymiş bu ya hallettim bile”_ şeklinde oldu. Aldığım ilk feedback ise _“template engine kullanma, RESTful json cevaplar döndürmen gerekiyor”_ oldu. :)

Buradan sonra olayların yönü değişti ve yeni hayatıma yeni kavramlar girdi. Önce REST ile başlayalım. Resmi tanımını her yerde bulabileceğimiz REST’i ben şöyle benimsedim: Bir yazılım geliştirme mimarisi. Standartları, kuralları ve kısıtları var; bunlara uyduğunuzda restful bir yazılım geliştirmiş oluyorsunuz.

Bir google aramasıyla hakkında daha fazla bilgi öğrenebileceğimiz REST mimarisini Flask ile çalışırken uygulamaya yarayan Flask-restful adlı eklentiyle de bu şekilde tanışmış oldum.
Bundan sonra yazdığım metotlar şöyle görünmeye başladı:

```python
class User(Resource):
    def get(self, user_id):
	    #metot içeriği
        return {"user_id":user_id },200
def post(self, user_id):
        #metot içeriği
        return {"msg":"success"},200
```


Artık metotlarım JSON sonuçlar ve HTTP durum kodları döndürüyordu ve bunları -henüz- nasıl kullanacağımı bilmesem de temel gereklilikleri tamamlamıştım.

Burada aslında bir web server’ın çalışma mantığı ortaya çıktı benim için. İstemci kaynağa get, post gibi istekler atıyor ve server bu isteklerin karşılığı olan metotları çalıştırıp sonuçları response mesajı içinde payload olarak gönderiyor. Kullanımı biraz zahmetli olsa da ve bir sunum sırasında beni çok zor durumda bıraksa da curl bu mantığı oturtmamda epey yardımcı bir araç oldu.

<hr>

Veritabanı konusunda yeni bir başlık açmayalım. Veritabanı olarak MongoDB kullandık. Açıkçası ilişkisel veritabanları en sevdiğim alanlardandır ve bunları verimli kullanabildiğime inanırım fakat ilişkisel olmayan — nosql veritabanlarıyla daha önce çalışmamıştım. Yine de ikisi arasında bağlantı kurduktan sonra (document — row ve collection — table gibi) alışmak çok zor olmadı. Bu noktada da CRUD işlemlerini yapmak ya da veritabanını sorgulamak için kullanılan bir ODM, spesifik olarak belirtmek gerekirse mongoengine kullandım.
Bütün bunla bittikten sonra proje akışına göre front-end kısmına geçtim. Başta da dediğim gibi bu front-end ve back-end birbirinden bağımısız olsa da, front-end verileri kullanıcıya sunmak için sunucudan talepte bulunacak. Bunun için back-end geliştiricinin _(ben)_ hangi endpoint’te hangi parametrelerin kullanılarak hangi sonuçların döndüğüne dair bir dokümantasyon yazarak front-end geliştiriciye _(bana)_ bir tür kaynak oluşturması gerekiyor. Bunlar herhangi bir formatta olabileceği gibi OpenAPI standartlarını kullanmamız tavsiye edildi. Bununla ilgili de metot içine yazılan docstring’lerden bu standart formatında dokümantasyon üreten ve flask-restful ile uyumlu çalışabilen Flasgger isimli bir eklenti kullandım.

Bir önceki yazımda da ***“son kullanıcı için geliştirilen değil, geliştirme sürecini kolaylaştıran yazılımlar”*** derken bunu kastediyordum. Proje boyunca birçok üçüncü parti eklenti kullandım ve süreç benim için oldukça kolaylaştı. Bu tür araçlar geliştirmek için neler yapabileceğime vakit ayırmak istiyorum. Linus Torvalds’ın birinci büyük projesi olan Linux üzerinde çalışırken kendisine kolaylık sağlasın diye ikinci büyük projesi olan Git sistemini yazması bu konudaki en büyük ilham kaynağım.


#### Front-end

Sıra geldi kullanıcın etkileşime gireceği, sitenin elle tutulur gözle görülür bir hal aldığı kısma. Başka bir deyişle _raison d’être_. Front-end geliştirirken Vue.js kullandık. Proje boyunca ilk defa kullanmadığım tek araç buydu sanırım. :) Bu yüzden component oluşturma veya Vue projesi oluşturma gibi şeyler büyük problemler olmadı.

Yine de şu olay kafamda oturmuyordu: _“Front-end ile back-end’i nasıl birbirine bağlayacağız?”_

Sanki bu ikisinin birbirine bağlanması için bir şeylere ihtiyaç vardı. Bir ortak nokta ya da dilin geliştiricileri tarafından sağlanan bir özellik. Halbuki cevabı daha önce bulmuştum. Cevap önümdeydi. Cevap bana _gücü kullan, Luke_ diyordu. HTTP istekleri. curl kullanarak yaptığımdan bir farkı yoktu, istek gönderen fonksiyonlar yazacaktım ve yazdığım api bunlara cevap verecekti. Yine yardımcı bir eklenti, axios devreye girdi. Başlangıçta tercih etmemim tek sebebi araştırma yaparken en çok karşıma çıkanın bu olmasıydı fakat sonradan JavaScript’in fetch adlı bir metodunun da olduğunu ve aynı amaçla kullanılabildiğini öğrendim. Yine de tutarlı bir adım atmıştım çünkü axios’un fetch’in önüne geçtiği nokta olan interceptor’ler yardımıyla HTTP isteklerini araya girip manipule ederek, üzerinde çok uzun süre uğraştığım bir hatayı çözdüm.


İstekler gönderilince gelen cevapları alıp yorumlamak ve bunlara göre içerik göstermek nispeten kolay işlemlerdi. CORS policy gibi (server’ınıza hangi origin’lerden istek gönderebileceğinizi kısıtlayan) hatalar aldım fakat bunlar kısa araştırmalar sonucu çözdüğüm şeylerdi.

Üye olmak söz konusu olduğu için bir auth sistemi gerekiyordu, bunun için JWT kullandım. Yine güzel bir üçüncü parti eklenti, flask-jwt-extended bu konuda çok işimi gördü. JWT ile çalışırken HTTP mesajları, bu mesajların header’ları konusunda çok detaylı araştırmalar yaptım ve çalışma mantıklarını çözdüm.

Son olarak ufak bir stil çalışmasıyla projemi renklendirdim ve hata ayıklamalarla, refactorlerle geçen son haftanın ardından sunum gününü getirdim.

<hr>

Özet geçince birkaç paragrafta bitmiş olan bu süreç tam iki ay sürdü. Hatalar alındı ve problemler çözüldü. Görevler tamamlandı. Projeye başladığımda elimde hiçbir şey yoktu. Bilgisayarımı iki ekrana bölmüştüm. Bir tarafta boş bir VS Code sayfası, diğer tarafta nispeten yabancı olan kelimelerle dolu bir proje dokümantasyonu. İki ayın sonunda bir tarafta dolu VS Code sayfaları diğer tarafta projemin çalışır hali vardı. Evet ortaya bir ürün çıkardım ve programlama tarafına dair yüzlerce şey öğrendim fakat bir ekibe dahil olarak proje geliştirme sürecine dair öğrendiklerim de beni çok tatmin etti. Sonuçta bireysel olarak kendime göre büyük / küçük çeşitli projeler geliştirmiştim fakat süreç hiçbirinde bu şekilde değildi. Hem teknik hem de sosyal birtakım beceriler devreye girdi bu noktada. Biraz bunları inceleyelim.

#### Misc

Öncelikle iletişim çok önemli. Detaylı, saygılı ve yoğun iletişim daha önemli. Burada ne denmek istediğini tanıdık olabilecek bir senaryoyla açıklayayım. Ben çok düzenli olmasa da bir forum kullanıcısıyım. Forum kültürünü seviyorum hala, 2007 yılındaymışım gibi. Forumlarda sorunlara çözüm bulmak ise hobilerimden. _(Çok fazla hobim olduğu söylenemez)_

Stack Overflow buna karşı önlemler alsa da Türk teknoloji forumlarında ya da reddit’te de denk gelmiş olabileceğiniz üzere “Visual Studio yazdığım kod çalışmıyor” minvalinde konular açılır. “Sağlık olsun, inşallah başka kodların çalışır.” demekten başka çare yoktur bu sorulara. Çünkü hangi kod, hangi programlama dili, hangi hata, çalışmamak ne demek, tepki mi vermiyor, istediğin gibi mi çalışmıyor? Zihin okuyucu olmayan kimse bunları bilemez. Zihin okuyucular bile online çalışabilir mi emin değilim. Bunları bilmeden de yardımcı olunamaz. Sonra bunlar tek tek sorulur, mesajlar saatler sonra cevaplanır ve bu böyle gider. Bir noktalı virgül unutma vakası ertesi gün anca çözülmüş olur. 

Yani uzun lafın kısası soru sorarken mümkün olduğunca fazla detay vermek gerekiyor. Forum örneği genellemesini ekibimize uyarlayacak olursak; bir problemi anlatırken, ne yaptığını raporlarken, genel olarak konuşurken de detay vermek gerekiyor. _“Daha önce bahsetmiştim"_ işe yarar bir argüman değil maalesef. Daha önce bahsedilen şeyler unutuluyor, gözden kaçırılıyor ya da yanlış anlaşılıyor. Bunlara dikkat etmek gerekiyor. Açıkçası beni iletişimden geri tutan şey genelde insanları rahatsız etmeyeyim, kim okuyacak bu kadar yazıyı, kendim uğraşayım biraz daha düşüncesiydi fakat bunu mentörüm çok güzel bir şekilde çözümledi: _“Kendi başına altı saat kaybedeceğin bir problemi beraber çözersek senin iki saatin gider, benim iki saatim gider ama ekibe iki saat kazandırmış oluruz.”_ Beklenen çıktı budur. Güçlü iletişim ve ekip çalışması önemli ve öncelikli.

İletişimin alt başlığı olarak yaptıklarını anlatabilmenin de önemli olduğunu söyleyebilirim. Biz her hafta hem toplantı yaptık hem de rapor yazarak neler üzerine çalıştığımızı anlattık. Sunumun da kod kadar önemli olduğuna, “burayı neden, nasıl, ne düşünerek böyle yaptın?” sorusunu mutlaka alacağınıza ve kendi kodunuzu çok iyi biliyor olsanız da kelimelere dökemediğinizde kötü hissedebileceğinize garanti verebilirim.

Versiyon kontrolü yapmanın önemini şuraya kadar yazdığım programlama kavramlarına aşina olan herkes biliyordur. Birinci sınıftayken yaptığım bir konsol projesinin klasörünü aleme ibret olsun diye tutuyorum. Klasörün içinde “calisan_hali.c”, “son_hali.c” , “hatasiz_kod.c”, “25mart_yedek.c” gibi 10–15 tane C dosyası var. :D Ne demek istediğimi anlatabiliyorumdur diye düşünüyorum. Versiyon kontrolü bireysel projelerde olduğu gibi, ekip projelerinde de kullanılması kaçınılmaz bir araç. İkinci sınıfta Git kullanmayı bilmeyen bir arkadaşımla ödev hazırılıyordum uzaktan çalışarak. Birkaç ay boyunca birbirimize klasör atıp kod kopyaladık arkadaşlar. Gerçekten utanıyorum bunu yazmaya. İkna edemedim kendisini birkaç saatte git öğrenmeye. Conflict olunca zaman kaybı oluyormuş öyle demişti. Git önemli. Önemli olmasaydı Linus Torvalds da “Linux_calisan_hali.c” diye yayınlardı işletim sistemini.

Git’in de kendince standartları ve kullanım türleri var. Biz projede özellikle conventional commits standart’ına uyduk. ***“this should fix it”*** gibi commitler sevimli görünüyor ama buraya nereden geldim, en son ne yapmıştım, takım arkadaşım en son ne yapmış sorularına cevap bulabilmek için özellikle ekiplerin bir standarta uyması gerekiyor. Ayrıca conventional commits ile semantic versioning denilen versiyonlama sistemi de otomatize edilebiliyor.

Proje sürecinde bir yol haritasının olması, software development cycle konseptiyle ilerlenmesi ve plana sadık kalabilmek aslında önemli şeyler. Tabii yazılım mühendisliği dersinde öğrendik bunları, agile development dedik, planlama, analiz, geliştirme, sunum ve bakım dedik fakat teorik bilgiyi, hele ki sabit olmayan ve subjektif olabilen bilgiyi pratiğe dökmek birkaç deneme alıyor. Planlama için bireysel olarak bir tür canban board kullandım ve verim aldığımı da söyleyebilirim. Her hafta başında neleri yapacağımı planlamak ve yapmak projeyi zamanında bitirmeme yardımcı oldu. Fakat başlangıçtan itibaren sona doğru nasıl ilerleyeceğimi belirleseydim en azından okul tarafında çok yoğun olduğum haftalar daha stressiz geçerdi.

Biraz kervan yolda düzülür mantığıyla ilerlememin bir sebebi belki de şuydu, tam olarak ne yapacağımı, başıma nelerin geleceğini bilmiyordum. Evet son üç hafta kala bir roadmap oluşturdum ve işleri düzene soktum fakat başlangıçta ne yapacağıma ve hangi işin ne kadar süreceğine dair bir fikir yürütmem biraz zorlayıcı olacaktı. Yine de planlama aşaması ilerdeki çalışmalarımda dikkat edeceğim bir konu olacak.


<hr>

Sanırım bu kadar özet yeterli. Süreç boyunca aldığım notlara ve yapılacaklar listeme bakarak hatırladığım şeylerden bahsettim. Başlangıçta da dediğim gibi bir ‘nasıl yapılır’ kaynağı olmayı hedeflemediğim için isimler haricinde çok detaya girmedim. 10 ay sürecek stajımın ilk iki ayı benim için verimli ve başarılı geçti. İlk tecrübemde anlayışlı ve alanında çok başarılı insanlarla çalışma imkanı bulduğum için çok şanslı hissediyorum. Takım arkadaşlarımla da ortak çalışmalar yapmaya başlamak ve bunları da sizlere anlatmak için sabırsızlanıyorum.
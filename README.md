# Aden — kişisel portföy

Sites iş akışıyla hazırlanmış, tamamen statik ve Türkçe bir portföy. HTML5, CSS3 ve yalın JavaScript kullanır. Derleme, npm, Node.js, API anahtarı, veritabanı veya sunucu tarafı kod gerekmez. Yazı tipleri ve görseller yereldir; ziyaret sırasında üçüncü taraf kaynağı çağrılmaz.

## Çalıştırma ve GitHub Pages

1. ZIP dosyasını çıkarın.
2. ZIP’ten çıkan dosyaları ve `assets` klasörünü GitHub deponuzun köküne kopyalayın. `index.html` depo kökünde olmalı.
3. GitHub'da **Settings → Pages → Build and deployment → Deploy from a branch** yolunu açın.
4. Dosyaların bulunduğu dalı (genellikle `main`) ve **/(root)** klasörünü seçip kaydedin.
5. GitHub'ın verdiği adresi açın. `https://username.github.io/repository-name/` gibi alt dizinli adresler desteklenir.

Yerel olarak `index.html` dosyasını tarayıcıda açmanız da yeterlidir. JavaScript kapalıyken içerik ve bağlantılar çalışır; mobil gezinme açık bir bağlantı listesi olarak kalır.

## Dosyalar

- `index.html`: Tüm içerik, gezinme, proje ve iletişim bağlantıları; gömülü SVG favicon.
- `style.css`: Renkler, yerel yazı tipleri, duyarlı düzen, etkileşimler ve azaltılmış hareket desteği.
- `main.js`: Mobil menü, Escape ile kapatma ve geçerli bölüm göstergesi.
- `assets/images/`: Üç yerel WebP proje görseli.
- `assets/fonts/`: Manrope fontları ile SIL Open Font License metinleri.
- `.nojekyll`: GitHub Pages üzerinde statik dosyaların doğrudan sunulması için.

## Gerçek içerikle değiştirilecek alanlar

Gerçek ekran görüntüleri, proje adresleri ve iletişim bilgileri paylaşılmadığı için aşağıdaki alanlar açıkça yer tutucu olarak işaretlenmiştir. Site dosyaları değiştirilmeden açılır; bu bağlantılar gerçek müşteri projelerine veya Aden'in iletişim kanallarına ait değildir.

### Projeler

| Proje | Yerel görsel | Geçici bağlantı |
| --- | --- | --- |
| Ares Mimarlık | `assets/images/ares-preview.webp` | `https://example.com/ares` |
| Flowdesk AI | `assets/images/flowdesk-preview.webp` | `https://example.com/flowdesk` |
| Techinova | `assets/images/techinova-preview.webp` | `https://example.com/techinova` |

Görseller basit tipografik yer tutuculardır; gerçek web sitesi ekran görüntüsü değildir. Flowdesk AI görseli 1800 × 1000, Ares Mimarlık ve Techinova görselleri 1200 × 1380 pikseldir. Aynı dosya adlarıyla gerçek görselleri koyabilirsiniz. Farklı boyutlarda görsel kullanırsanız HTML içindeki `width`, `height` ve açıklayıcı `alt` değerlerini de güncelleyin. Proje görselleri mobilde ortadan kırpılır; gerekiyorsa CSS ile `object-position` ayarlayın.

`index.html` içinde her proje adresi iki kez geçer: görsel bağlantısında ve “Projeyi Gör” bağlantısında. İkisini de değiştirin. Bu bağlantılar `data-placeholder="project"` ile bulunabilir. Gerçek içerik eklendiğinde ilgili `data-placeholder` niteliğini, `preview-tag` ve bağlantı içindeki geçici bağlantı etiketlerini kaldırın; `aria-label` ve `alt` metinlerindeki yer tutucu açıklamalarını düzenleyin.

### İletişim

- `mailto:your@email.com` adresini **üç yerde**, görünür `your@email.com` metnini **bir yerde** değiştirin.
- Instagram: `https://example.com/instagram`
- LinkedIn: `https://example.com/linkedin`
- Gerçek bilgiler eklendiğinde e-posta ve sosyal bağlantıların yanındaki yer tutucu notlarını kaldırın; `aria-label` metinlerini ve `data-placeholder` niteliklerini güncelleyin.

Sitede iletişim formu veya arka uç yoktur. E-posta bağlantısı ziyaretçinin e-posta uygulamasını açar.

## Düzenleme

Renkler `style.css` başındaki `:root` değişkenlerinden yönetilir. Yerel kaynak yolları görecelidir: `./style.css`, `./main.js`, `./assets/`. Başlarına `/` eklemeyin; bu değişiklik GitHub Pages depo alt dizinini bozabilir. Telif yılı bilerek 2026 olarak sabittir.

## Erişilebilirlik

Anlamsal bölüm yapısı, tek ana başlık, içeriğe geç bağlantısı, görünür klavye odağı, açıklayıcı bağlantılar ve görsel metinleri bulunur. Mobil menü klavye ile kullanılabilir ve Escape ile kapanır. `prefers-reduced-motion` etkin olduğunda yumuşak kaydırma ve geçişler devre dışıdır.

Proje sırası: Flowdesk AI, Ares Mimarlık, Techinova. Hizmet açıklamaları yerel HTML details/summary öğeleri ile açılır ve kapanır.

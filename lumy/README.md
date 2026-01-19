# OtelCiro — 2026 Ciro Hedefleri (Yatırımcı Dashboard)

Tek sayfalık, **statik** (HTML/CSS/JS) ve **interaktif** yatırımcı dashboard.

## Amaç
- **Bodrum Eskicesme**, **Bodrum Gumbet**, **Bodrum Gundogan** otelleri için **2026 aylık hedef** metriklerini (EUR) yorum eklemeden görselleştirmek.
- Kurumsal/modern (enterprise) tasarım dili: **Booking.com renk paleti (inspired)** + tipografi standardı (Inter).

## Tamamlanan Özellikler
- Filtreler: Otel (çoklu), metrik, başlangıç/bitiş ayı, trend normalize
- KPI kartları: yalnızca **değer + kısa tanım**
  - Toplam Ciro (EUR)
  - Ortalama Doluluk (Occ)
  - Toplam Satılan Geceleme
  - ADR Ortalama (EUR)
- Grafikler:
  - Aylık trend (line chart)
  - Otel dağılımı (doughnut, ciro payı)
  - **A/B/C gelir kompozisyonu** (ay bazında **stacked bar**, seçili otel(ler) toplamı)
  - **Occ heatmap** (otel × ay)
- Detay tablo: ay–otel kırılımında metrikler, arama/sıralama
- Export:
  - Tabloyu CSV indir
  - Trend grafiğini PNG indir

## Giriş (Entry URI)
- `index.html` (tek sayfa)

## Veri Modeli
Veri gömülü (embedded) olarak `js/app.js` içinde tutulur.

Alanlar:
- `hotel` (text)
- `month` (text, TR ay anahtarı)
- `revenue` (number, EUR)
- `aRevenue`, `bRevenue`, `cRevenue` (number, EUR)
- `occ` (number, %)
- `soldNights` (number)
- `adr` (number, EUR)

## Public URLs
- Website: Publish edildikten sonra **Publish tab** size canlı URL verir.
- API: Bu proje backend/API kullanmaz.

## Henüz Eklenmeyenler
- 2025/2024 gibi tarihsel veri olmadığı için YoY karşılaştırmaları
- Gerçek kurumsal guideline (logo dosyası, resmi renk kodları) ile birebir eşleme

## Önerilen Sonraki Adımlar
- OtelCiro brand guideline (hex renkler, logo, spacing) paylaşılıp UI birebir uyarlanabilir.
- Veri kaynağı CSV/REST olarak dışarı alınırsa güncel veriyle otomatik besleme yapılabilir.
- Heatmap için tooltip’li mini popover ve legend ölçeği eklenebilir.

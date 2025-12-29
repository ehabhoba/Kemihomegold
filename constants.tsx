
import { Product } from './types';

// تحديث الشعار بناءً على طلب المستخدم
export const STORE_LOGO = "https://i.ibb.co/fN7W97D/logo-kemi.png"; // رابط مباشر تقريبي من ibb
export const WHATSAPP_NUMBER = "201004376059"; 
export const STORE_NAME = "كيمي هوم جولد - Kemi Home Gold";
export const CONTACT_EMAIL = "info@kemihomegold.com";
export const CONTACT_ADDRESS = "6 درب الكتاب، حارة اليهود، دا سنتر، الموسكي – القاهرة، مصر";
export const STORE_HOURS = "يومياً من 10 صباحاً حتى 10 مساءً";

const createSlug = (text: string, id: string) => {
  const cleanText = text.toLowerCase()
    .replace(/[^\u0600-\u06FFa-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
  return `${cleanText}-${id.toLowerCase()}`;
};

const rawProducts = [
  { "id": "KEM-1910-ORG", "title": "ماكينه حلاقه كيمي KM-1910", "price": 499, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-1910-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-8809889.jpg" },
  { "id": "KEM-1510-LCD", "title": "ماكينه حلاقه كيمي KM-1510", "price": 510, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-1510-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-2749870.jpg" },
  { "id": "KEM-908B-5IN1", "title": "ماكينه كيمي ازاله حريمي KM-908B", "price": 770, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-kymy-azalh-hrymy-km-908b-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-5103061.jpg" },
  { "id": "KEM-1740-SAFE", "title": "ماكينه حلاقه كيمي KM-1740", "price": 815, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-1740-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-3580299.png" },
  { "id": "KEM-1911-PRO", "title": "ماكينه حلاقه كيمي KM-1911", "price": 999, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-1911-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-6533912.jpg" },
  { "id": "KEM-6714-PINK", "title": "ماكينه كيمي حريمي ازاله KM-6714", "price": 615, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-kymy-hrymy-azalh-km-6714-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-2713219.jpg" },
  { "id": "KEM-3155-STR", "title": "مكوه شعر كيمي KM-3155", "price": 710, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/mkoh-shaar-kymy-km-3155-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-1002109.jpg" },
  { "id": "KEM-6813-IPL", "title": "جهاز ازاله ليزر حريمي KM-6813", "price": 2150, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/jhaz-azalh-lyzr-hrymy-km-6813-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-3274904.jpg" },
  { "id": "km-373-991", "title": "ماكينه كيمي حريمي ازاله KM-373", "price": 690, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-kymy-hrymy-azalh-km-373-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-7395827.jpg" },
  { "id": "km-1207-992", "title": "ماكينه كيمي حريمي ازاله KM-1207", "price": 645, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-kymy-hrymy-azalh-km-1207-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-1460054.jpg" },
  { "id": "km-3523-993", "title": "ماكينه كيمي حريمي ازاله KM-3523", "price": 800, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-kymy-hrymy-azalh-km-3523-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-3134439.jpg" },
  { "id": "km-1900-994", "title": "ماكينه كيمي حريمي ازاله KM-1900", "price": 515, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-kymy-hrymy-azalh-km-1900-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-5147127.jpg" },
  { "id": "km-7202-995", "title": "ماكينه كيمي حريمي ازاله KM-7202", "price": 799, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-kymy-hrymy-azalh-km-7202-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-2652541.jpg" },
  { "id": "km-965-996", "title": "ماكينه حلاقه كيمي للأطفال KM-965", "price": 455, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-llatfal-km-965-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-4412241.jpg" },
  { "id": "km-313-997", "title": "ماكينه حلاقه كيمي KM-313", "price": 590, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-313-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-4559608.jpg" },
  { "id": "km-315-998", "title": "ماكينه حلاقه كيمي KM-315", "price": 550, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-315-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-2419458.jpg" },
  { "id": "prod_hg_380", "title": "مكواة شعر هوم جولد HG-380", "price": 499, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/mkoh-shaar-hom-jold-hg-380-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-6823850.jpg" },
  { "id": "prod_hg_108", "title": "فرشاة تمليس الشعر البخارية هوم جولد HG-108", "price": 450, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/frshh-shaar-hom-jold-hg-108-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-2889789.jpg" },
  { "id": "prod_hg_1915", "title": "مشط الهواء الساخن هوم جولد HG-1915", "price": 800, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/frshh-shaar-hom-jold-hg-1915-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-6948911.jpg" },
  { "id": "prod_km_3115p", "title": "مكواة شعر كيمي KM-3115p", "price": 770, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/mkoh-shaar-kymy-km-3115p-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-5022649.jpg" },
  { "id": "prod_km_7114", "title": "ماكينة حلاقة كيمي حريمي 7 في 1 KM-7114", "price": 700, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-kymy-hrymy-azalh-km-7114-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-5882489.png" },
  { "id": "prod_km_276", "title": "ماكينة إزالة الشعر كيمي حريمي KM-276", "price": 570, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-kymy-azalh-hrymy-km-276-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-9508527.jpg" },
  { "id": "prod_km_569", "title": "ماكينة حلاقة كيمي للأطفال KM-569", "price": 499, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-llatfal-km-569-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-7169500.jpg" },
  { "id": "prod_km_7106", "title": "جهاز إزالة الشعر بالليزر كيمي KM-7106", "price": 2100, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/jhaz-azalh-lyzr-hrymy-km-7106-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-5064935.jpg" },
  { "id": "prod_hg_3370", "title": "ماكينة هوم جولد لإزالة الشعر HG-3370", "price": 770, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hom-jold-azalh-hrymy-hg-3370-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-4638433.jpg" },
  { "id": "prod_hg_382", "title": "مكواة شعر هوم جولد HG-382 احترافية", "price": 530, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/mkoh-shaar-hom-jold-hg-382-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-8129287.jpg" },
  { "id": "prod_hg_381", "title": "مكواة فرد الشعر هوم جولد HG-381", "price": 470, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/mkoh-shaar-hom-jold-hg-381-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-9685204.jpg" },
  { "id": "prod_hg_700", "title": "مجفف شعر هوم جولد HG-700", "price": 850, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/astshoar-hom-jold-hg-700-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-7900547.jpg" },
  { "id": "prod_hg_666", "title": "مجفف شعر هوم جولد HG-666", "price": 900, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/astshoar-hom-jold-hg-666-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-5179110.jpg" },
  { "id": "prod_km_6907", "title": "استشوار كيمي KM-6907 الأيوني", "price": 1950, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/astshoar-kymy-km-6907-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-2937485.png" },
  { "id": "prod_km_6906", "title": "استشوار كيمي KM-6906 شاشة رقمية", "price": 2000, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/astshoar-kymy-km-6906-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-8681960.png" },
  { "id": "prod_km_7936", "title": "ماكينة كيمي 5 في 1 لإزالة الشعر KM-7936", "price": 955, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-kymy-hrymy-azalh-km-7936-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-8659373.jpg" },
  { "id": "KEM-2195-WM", "title": "ماكينه كيمي حريمي ازاله KM-2195", "price": 1000, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-kymy-hrymy-azalh-km-2195-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-6920874.jpg" },
  { "id": "HG-2059-SM", "title": "ماكينه حلاقه تنعيم هوم جولد HG-2059", "price": 460, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-tnaaym-hom-jold-hg-2059-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-6533367.jpg" },
  { "id": "HG-2024-LED", "title": "ماكينه حلاقه تنعيم هوم جولد HG-2024", "price": 475, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-tnaaym-hom-jold-hg-2024-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-3903971.jpg" },
  { "id": "HG-221-GOLD", "title": "ماكينه حلاقه هوم جولد HG-221", "price": 785, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-hom-jold-hg-221-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-7934790.png" },
  { "id": "HG-922-SKULL", "title": "ماكينه حلاقه هوم جولد HG-922", "price": 445, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-hom-jold-hg-922-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-3885584.jpg" },
  { "id": "HG-2600-FADE", "title": "ماكينه حلاقه هوم جولد HG-2600", "price": 560, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-hom-jold-hg-2600-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-8271034.jpg" },
  { "id": "HG-134-PRO", "title": "ماكينه حلاقه هوم جولد HG-134", "price": 1100, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-hom-jold-hg-134-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-8948143.jpg" },
  { "id": "HG-013-3IN1", "title": "ماكينه حلاقه هوم جولد HG-013", "price": 915, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-hom-jold-hg-013-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-4347645.png" },
  { "id": "hg-011", "title": "ماكينة حلاقة هوم جولد HG-011", "price": 1200, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-hom-jold-hg-011-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-2710430.jpg" },
  { "id": "hg-012", "title": "ماكينة حلاقة هوم جولد HG-012", "price": 1065, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-hom-jold-hg-012-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-8732062.png" },
  { "id": "hg-809a", "title": "ماكينة حلاقة هوم جولد HG-809A", "price": 565, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-hom-jold-hg-809a-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-7759243.jpg" },
  { "id": "hg-809", "title": "ماكينة حلاقة هوم جولد HG-809", "price": 535, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-hom-jold-hg-809-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-8005711.webp" },
  { "id": "hg-210a", "title": "ماكينة حلاقة هوم جولد HG-210A", "price": 950, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-hom-jold-hg-210a-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-6498650.jpg" },
  { "id": "hg-220", "title": "ماكينة حلاقة هوم جولد HG-220", "price": 780, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-hom-jold-hg-220-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-3515932.jpg" },
  { "id": "hg-521", "title": "ماكينة حلاقة هوم جولد HG-521", "price": 460, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-hom-jold-hg-521-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-2360197.jpg" },
  { "id": "hg-901", "title": "ماكينة حلاقة هوم جولد HG-901", "price": 450, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-hom-jold-hg-901-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-7812146.jpg" },
  { "id": "hg-902", "title": "ماكينه هوم جولد HG-902", "price": 485, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hom-jold-hg-902-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-5365440.jpg" },
  { "id": "hg-905", "title": "ماكينه حلاقه هوم جولد HG-905", "price": 485, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-hom-jold-hg-905-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-2006722.jpg" },
  { "id": "hg-903", "title": "ماكينه حلاقه هوم جولد HG-903", "price": 490, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-hom-jold-hg-903-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-3430343.jpg" },
  { "id": "hg-5017", "title": "ماكينه حلاقه هوم جولد HG-5017", "price": 450, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-hom-jold-hg-5017-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-8232239.jpg" },
  { "id": "km-2600", "title": "ماكينه حلاقه كيمي KM-2600", "price": 745, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-2600-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-6681269.jpg" },
  { "id": "km-2137", "title": "ماكينه حلاقه كيمي KM-2137", "price": 720, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-2137-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-5961155.jpg" },
  { "id": "km-802", "title": "ماكينه حلاقه كيمي KM-802", "price": 750, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-802-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-8231106.jpg" },
  { "id": "km-802pg", "title": "ماكينه حلاقه كيمي KM-802PG", "price": 665, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-802pg-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-5735727.jpg" },
  { "id": "prod_1761", "title": "ماكينة حلاقة كيمي KM-1761", "price": 760, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-1761-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-6800305.jpg" },
  { "id": "prod_1071a", "title": "ماكينة حلاقة كيمي KM-1071A", "price": 495, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-1071a-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-3703419.jpg" },
  { "id": "prod_2292", "title": "ماكينة حلاقة كيمي KM-2292", "price": 1210, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-2292-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-4856612.jpg" },
  { "id": "prod_2244", "title": "ماكينة حلاقة كيمي KM-2244", "price": 810, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-2244-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-4371522.jpg" },
  { "id": "prod_2372", "title": "ماكينة حلاقة كيمي KM-2372", "price": 710, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-2372-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-2266844.jpg" },
  { "id": "prod_1576", "title": "ماكينة حلاقة كيمي KM-1576", "price": 590, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-1576-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-3388082.jpg" },
  { "id": "prod_1773", "title": "ماكينة حلاقة كيمي KM-1773", "price": 965, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-1773-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-7082676.jpg" },
  { "id": "prod_1136", "title": "ماكينة حلاقة كيمي KM-1136", "price": 700, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-1136-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-5217258.jpg" },
  { "id": "prod_9551", "title": "ماكينه حلاقه كيمي KM-9551", "price": 715, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-9551-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-6166124.jpg" },
  { "id": "prod_2353", "title": "ماكينه حلاقه كيمي KM-2353", "price": 1200, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-2353-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-4983279.jpg" },
  { "id": "prod_2290d", "title": "ماكينه حلاقه كيمي KM-2290D", "price": 770, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-2290d-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-7874763.jpg" },
  { "id": "prod_2380", "title": "ماكينه حلاقه كيمي KM-2380", "price": 750, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-2380-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-1188212.jpg" },
  { "id": "prod_2351", "title": "ماكينه حلاقه كيمي KM-2351", "price": 915, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-2351-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-4183783.jpg" },
  { "id": "prod_2625", "title": "ماكينه حلاقه كيمي KM-2625", "price": 515, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-2625-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-9729177.jpg" },
  { "id": "prod_1947", "title": "ماكينه حلاقه كيمي KM-1947", "price": 640, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-1947-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-9906989.jpg" },
  { "id": "prod_2273", "title": "ماكينه حلاقه كيمي KM-2273", "price": 710, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-2273-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-4057012.jpg" },
  { "id": "KEM-1937-SIL", "title": "ماكينه حلاقه كيمي KM-1937", "price": 665, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-1937-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-2131697.jpg" },
  { "id": "KEM-2283-MTL", "title": "ماكينه حلاقه كيمي KM-2283", "price": 800, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-2283-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-4876310.jpg" },
  { "id": "KEM-2606-DAY", "title": "ماكينه حلاقه كيمي KM-2606", "price": 650, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-2606-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-5614137.jpg" },
  { "id": "KEM-1742-T", "title": "ماكينه حلاقه كيمي KM-1742", "price": 460, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-1742-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-7528077.png" },
  { "id": "KEM-1866-TUR", "title": "ماكينه حلاقه كيمي KM-1866", "price": 630, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-1866-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-6842125.png" },
  { "id": "KEM-1987-A1", "title": "ماكينه حلاقه كيمي KM-1987", "price": 1000, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-1987-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-1195775.jpg" },
  { "id": "KEM-1986-GLD", "title": "ماكينه حلاقه كيمي KM-1986", "price": 1060, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-1986-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-8733751.jpg" },
  { "id": "KEM-290-USB", "title": "ماكينه حلاقه كيمي KM-290", "price": 499, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-290-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-5162662.webp" },
  { "id": "km-071", "title": "ماكينة حلاقة كيمي KM-071", "price": 460, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-071-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-4459336.jpg" },
  { "id": "km-1575", "title": "ماكينة حلاقة كيمي KM-1575", "price": 590, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-1575-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-5518050.jpg" },
  { "id": "km-1784", "title": "ماكينة حلاقة كيمي KM-1784", "price": 545, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-1784-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-9978509.jpg" },
  { "id": "km-1859", "title": "ماكينة حلاقة كيمي KM-1859", "price": 1050, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-1859-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-6388197.jpg" },
  { "id": "km-4640", "title": "ماكينة حلاقة كيمي KM-4640", "price": 370, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-4640-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-4162730.jpg" },
  { "id": "km-1563", "title": "ماكينة كيمي KM-1563", "price": 510, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-kymy-km-1563-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-3309669.jpg" },
  { "id": "km-1681", "title": "ماكينة كيمي KM-1681", "price": 560, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-kymy-km-1681-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-8136889.jpg" },
  { "id": "km-1903", "title": "ماكينة حلاقة كيمي KM-1903", "price": 650, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-1903-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-8212868.jpg" },
  { "id": "km-2293-001", "title": "ماكينه حلاقه كيمي KM-2293", "price": 760, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-2293-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-3291198.jpg" },
  { "id": "km-2299-002", "title": "ماكينه حلاقه كيمي KM-2299", "price": 640, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-2299-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-2073739.jpg" },
  { "id": "km-1711-003", "title": "ماكينه حلاقه كيمي KM-1711", "price": 520, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-1711-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-6657123.jpg" },
  { "id": "km-t377-004", "title": "ماكينه حلاقه كيمي KM-t377", "price": 600, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-t377-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-7211693.jpg" },
  { "id": "km-2028-005", "title": "ماكينه حلاقه كيمي KM-2028", "price": 1080, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-2028-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-2801015.webp" },
  { "id": "km-2026-006", "title": "ماكينه حلاقه كيمي KM-2026", "price": 840, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-2026-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-6508299.jpg" },
  { "id": "km-2027-007", "title": "ماكينه حلاقه كيمي KM2027", "price": 880, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km2027-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-3119154.jpg" },
  { "id": "km-2024-008", "title": "ماكينه حلاقه كيمي KM-2024", "price": 510, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-2024-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-5832051.jpg" },
  { "id": "km-t98-001", "title": "ماكينة حلاقة كيمي KM-T98 الاحترافية", "price": 499, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-t98-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-3652047.jpg" },
  { "id": "km-8866b-002", "title": "ماكينة حلاقة كيمي KM-8866B للرجال", "price": 345, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-8866b-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-6151167.jpg" },
  { "id": "km-289-003", "title": "ماكينة حلاقة كيمي KM-289", "price": 480, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-289-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-4789412.jpg" },
  { "id": "km-1804-004", "title": "ماكينة حلاقة كيمي KM-1804", "price": 540, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-1804-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-7134400.jpg" },
  { "id": "km-1551-005", "title": "ماكينة حلاقة كيمي KM-1551 لاسلكية", "price": 680, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-1551-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-1207184.jpg" },
  { "id": "km-1550-006", "title": "ماكينة حلاقة كيمي KM-1550 متعددة الأمشاط", "price": 680, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-1550-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-6935057.jpg" },
  { "id": "km-1801-007", "title": "ماكينة حلاقة كيمي KM-1801 الاحترافية", "price": 560, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-1801-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-4656372.jpg" },
  { "id": "km-1800-008", "title": "ماكينة حلاقة كيمي KM-1800 الذهبية", "price": 640, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-1800-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-9416645.jpg" },
  { "id": "KEM-263-DIGI", "title": "ماكينه حلاقه كيمي KM-263", "price": 520, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-263-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-3503185.jpg" },
  { "id": "KEM-037-LCD", "title": "ماكينه حلاقه كيمي KM-037", "price": 460, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-037-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-8347862.jpg" },
  { "id": "KEM-1598-TB", "title": "ماكينه حلاقه كيمي KM-1598", "price": 680, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-1598-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-1253564.jpg" },
  { "id": "KEM-1728-PRO", "title": "ماكينه حلاقه كيمي KM-1728", "price": 610, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-1728-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-9492970.jpg" },
  { "id": "KEM-1670-BASE", "title": "ماكينه حلاقه كيمي KM-1670", "price": 1800, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-1670-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-8385316.jpg" },
  { "id": "KEM-5081-METAL", "title": "ماكينه حلاقه كيمي KM-5081", "price": 630, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-5081-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-3683683.jpg" },
  { "id": "KEM-2797-KIT", "title": "ماكينه حلاقه كيمي KM-2797", "price": 1960, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-2797-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-8762017.jpg" },
  { "id": "KEM-2796-PRO", "title": "ماكينه حلاقه كيمي KM-2796", "price": 1750, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-2796-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-8651692.jpg" },
  { "id": "km-t10", "title": "ماكينه حلاقه كيمي KM-T10", "price": 360, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-t10-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-3428191.jpg" },
  { "id": "km-t9", "title": "ماكينه حلاقه كيمي KM-T9", "price": 305, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-t9-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-3820737.jpg" },
  { "id": "km-t9-v2", "title": "ماكينه كيمي KM-T9 المطورة", "price": 305, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-kymy-km-t9-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-1880888.jpg" },
  { "id": "km-t99", "title": "ماكينه حلاقه كيمي KM-T99", "price": 312, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-t99-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-7941251.jpg" },
  { "id": "km-2242", "title": "ماكينه حلاقه كيمي KM-2242", "price": 1500, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-2242-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-6593730.png" },
  { "id": "km-1669", "title": "ماكينه حلاقه كيمي KM-1669", "price": 1399, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-1669-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-2062206.jpg" },
  { "id": "km-8536", "title": "ماكينه حلاقه كيمي KM-8536", "price": 2950, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-8536-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-5262810.jpg" },
  { "id": "km-2365", "title": "ماكينه حلاقه كيمي KM-2365", "price": 2450, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-hlakh-kymy-km-2365-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-6947940.jpg" },
  { "id": "KEM-302B-TH", "title": "مقص فتله كهربائي كيمي KM-302B", "price": 399, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/osh-astshoar-hom-jold-hg-01-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-2058340.jpg" },
  { "id": "KEM-2199-5IN1", "title": "ماكينه ازالة حريمي كيمي KM-2199", "price": 699, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-azal-hrymy-kymy-km-2199-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-8659373.jpg" },
  { "id": "KEM-189-EPIL", "title": "ماكينه ازالة حريمي كيمي KM-189", "price": 450, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-azal-hrymy-kymy-km-189-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-9508527.jpg" },
  { "id": "KEM-1307-GLOW", "title": "ماكينه ازالة حريمي كيمي KM-1307", "price": 640, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-azal-hrymy-kymy-km-1307-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-1460054.jpg" },
  { "id": "KEM-1888-USB", "title": "ماكينه ازالة حريمي كيمي KM-1888", "price": 670, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-azal-hrymy-kymy-km-1888-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-2713219.jpg" },
  { "id": "KEM-2078-4WK", "title": "ماكينه ازالة حريمي كيمي KM-2078", "price": 570, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-azal-hrymy-kymy-km-2078-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-2652541.jpg" },
  { "id": "KEM-2068-SOFT", "title": "ماكينه azala حريمي كيمي KM-2068", "price": 560, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-azal-hrymy-kymy-km-2068-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-5103061.jpg" },
  { "id": "KEM-3024-WASH", "title": "ماكينه azala حريمي كيمي KM-3024", "price": 420, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/makynh-azal-hrymy-kymy-km-3024-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-7395827.jpg" },
  { "id": "hg699-prod", "title": "استشوار هوم جولد HG-699", "price": 435, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/astshoar-hom-jold-hg-699-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-4677664.jpg" },
  { "id": "hg3000-prod", "title": "استشوار هوم جولد HG-3000", "price": 530, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/astshoar-hom-jold-hg-3000-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-8392948.jpg" },
  { "id": "hg3800-prod", "title": "استشوار هوم جولد HG-3800", "price": 630, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/astshoar-hom-jold-hg-3800-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-9928649.jpg" },
  { "id": "hg687-prod", "title": "استشوار هوم جولد HG-687", "price": 425, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/astshoar-hom-jold-hg-687-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-1077185.jpg" },
  { "id": "hg683-prod", "title": "استشوار هوم جولد HG-683", "price": 430, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/astshoar-hom-jold-hg-683-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-9146038.jpg" },
  { "id": "hg803-prod", "title": "استشوار هوم جولد HG-803", "price": 550, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/astshoar-hom-jold-hg-803-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-9187350.jpg" },
  { "id": "hg684-prod", "title": "استشوار هوم جولد HG-684", "price": 440, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/astshoar-hom-jold-hg-684-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-5244620.jpg" },
  { "id": "hg682-prod", "title": "استشوار هوم جولد HG-682", "price": 490, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/astshoar-hom-jold-hg-682-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-5573759.jpg" },
  { "id": "hg-9933", "title": "استشوار هوم جولد HG-9933", "price": 590, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/astshoar-hom-jold-hg-9933-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-2059673.jpg" },
  { "id": "hg-686", "title": "استشوار هوم جولد HG-686", "price": 390, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/astshoar-hom-jold-hg-686-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-9881970.jpg" },
  { "id": "hg-685", "title": "استشوار هوم جولد HG-685", "price": 390, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/astshoar-hom-jold-hg-685-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-7865839.jpg" },
  { "id": "hg-8800", "title": "استشوار هوم جولد HG-8800", "price": 800, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/astshoar-hom-jold-hg-8800-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-4108628.jpg" },
  { "id": "hg-2288", "title": "استشوار هوم جولد HG-2288", "price": 340, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/astshoar-hom-jold-hg-2288-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-4727268.jpg" },
  { "id": "hg-01-nozzle", "title": "وش استشوار هوم جولد HG-01", "price": 180, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/osh-astshoar-hom-jold-hg-01-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-2058340.jpg" },
  { "id": "hg-02-comb", "title": "مشط استشوار هوم جولد HG-02", "price": 185, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/msht-astshoar-hom-jold-hg-02-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-9527814.jpg" },
  { "id": "hg-216-straightener", "title": "مكوه شعر هوم جولد HG-216", "price": 515, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/mkoh-shaar-hom-jold-hg-216-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-6791567.jpg" },
  { "id": "HG-215-PRO", "title": "مكوه شعر هوم جولد HG-215", "price": 545, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/mkoh-shaar-hom-jold-hg-215-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-9396260.jpg" },
  { "id": "HG-213-STYL", "title": "مكوه شعر هوم جولد HG-213", "price": 580, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/mkoh-shaar-hom-jold-hg-213-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-5580205.jpg" },
  { "id": "HG-650-NANO", "title": "مكوه شعر هوم جولد HG-650", "price": 375, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/mkoh-shaar-hom-jold-hg-650-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-1786370.jpg" },
  { "id": "HG-219-SMOOTH", "title": "مكوه شعر هوم جولد HG-219", "price": 485, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/mkoh-shaar-hom-jold-hg-219-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-5575410.jpg" },
  { "id": "KEM-3165-WIDE", "title": "مكوه شعر كيمي KM-3165", "price": 520, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/mkoh-shaar-kymy-km-3165-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-8891796.jpg" },
  { "id": "KEM-328-FAST", "title": "مكوه شعر كيمي KM-328", "price": 335, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/mkoh-shaar-kymy-km-328-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-2982379.jpg" },
  { "id": "KEM-531-TRAVEL", "title": "مكوه شعر كيمي KM-531", "price": 399, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/mkoh-shaar-kymy-km-531-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-4774685.jpg" },
  { "id": "HG-803-ST-PR", "title": "مكوه شعر هوم جولد HG-803", "price": 1050, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/mkoh-shaar-hom-jold-hg-803-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-8778498.jpg" },
  { "id": "km-1320-001", "title": "فرشه شعر كيمي KM-1320", "price": 570, "brand": "Kemei", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/frshh-shaar-kymy-km-1320-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-4560590.jpg" },
  { "id": "hg-1006-gold", "title": "فرشه هوم جولد HG-1006 ذهبي", "price": 660, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/frshh-hom-jold-hg-1006thhby-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-5687545.jpg" },
  { "id": "hg-103-001", "title": "فرشه هوم جولد HG-103", "price": 750, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/frshh-hom-jold-hg-103-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-6760501.jpg" },
  { "id": "hg-904a-001", "title": "فرشه هوم جولد HG-904A", "price": 650, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/frshh-hom-jold-hg-904a-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-1284078.jpg" },
  { "id": "hg-5250-001", "title": "فرشه هوم جولد HG-5250", "price": 470, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/frshh-hom-jold-hg-5250-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-6573820.jpg" },
  { "id": "hg-1916-001", "title": "فرشه هوم جولد HG-1916", "price": 580, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/frshh-hom-jold-hg-1916-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-1304746.jpg" },
  { "id": "hg-1917-001", "title": "فرشه هوم جولد HG-1917", "price": 570, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/frshh-hom-jold-hg-1917-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-5018116.jpg" },
  { "id": "hg-1914-001", "title": "فرشه هوم جولد HG-1914", "price": 669, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/frshh-hom-jold-hg-1914-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-2487804.jpg" },
  { "id": "HG-1918-GOLD-BRUSH", "title": "فرشاة هوم جولد HG-1918", "price": 599, "brand": "Home Gold", "image": "https://cdn.shopify.com/s/files/1/0797/5357/6684/files/frshh-hom-jold-hg-1918-kemi-home-gold-kemi-home-gold-astshar-mko-makyn-hlak-1633000.jpg" }
];

export const PRODUCTS: Product[] = rawProducts.map(p => {
  let cat = "أخرى";
  const title = p.title.toLowerCase();
  if (title.includes("حلاقه") || title.includes("حلاقة")) cat = "ماكينات حلاقة";
  else if (title.includes("استشوار") || title.includes("مجفف")) cat = "مجففات الشعر";
  else if (title.includes("مكوه") || title.includes("مكواة")) cat = "مكواة الشعر";
  else if (title.includes("فرشه") || title.includes("فرشاة") || title.includes("مشط")) cat = "فرش الشعر";
  else if (title.includes("ازاله") || title.includes("ليزر") || title.includes("ازالة") || title.includes("فتله")) cat = "أدوات نسائية";
  else if (title.includes("أطفال") || title.includes("اطفال")) cat = "أدوات للأطفال";

  return {
    id: p.id,
    name: p.title,
    price: p.price,
    description: `• منتج أصلي ومضمون من ${p.brand}. • مصمم بأحدث التقنيات الاحترافية لضمان أفضل النتائج. • خامات عالية الجودة ومقاومة للاستخدام الشاق. • ضمان حقيقي من الوكيل في مصر "كيمي هوم جولد". • شحن سريع لجميع المحافظات والدفع عند الاستلام بعد المعاينة. • محرك قوي وأداء مستقر يدوم طويلاً.`,
    categories: cat,
    sku: p.id,
    slug: createSlug(p.title, p.id),
    thumb: p.image,
    images: p.image,
    is_free_shipping: p.price > 700
  };
});

export const CATEGORIES = [
  "الكل",
  "ماكينات حلاقة",
  "مجففات الشعر",
  "مكواة الشعر",
  "فرش الشعر",
  "أدوات نسائية",
  "أدوات للأطفال"
];

export const TESTIMONIALS = [
  { id: 1, name: "إيمان خليل", comment: "بجد جودة الاستشوار هوم جولد فوق الوصف، شعري مبيتحرقش وبيفرد بسرعة جداً. أحسن استثمار عملته لجمالي.", rating: 5, city: "المنصورة" },
  { id: 2, name: "أحمد السقا", comment: "ماكينة كيمي VGR اللي اشتريتها احترافية أوي، بتحدد الدقن بالملي والبطارية بتقعد معايا فترة طويلة.", rating: 5, city: "القاهرة" },
  { id: 3, name: "منى فهمي", comment: "فرشاة الفرد وفرت عليا مشوار الكوافير كل يوم. سهلة جداً والنتيجة مبهرة في 5 دقايق.", rating: 5, city: "الإسكندرية" },
  { id: 4, name: "ياسر محمود", comment: "المصداقية في التعامل وسرعة الشحن أهم حاجة، استلمت الماكينة في يومين بس وعاينتها قبل ما أدفع.", rating: 4, city: "الجيزة" }
];

export const BLOG_POSTS = [
  {
    id: "post-1",
    title: "دليلك الشامل لاختيار ماكينة الحلاقة المثالية لبشرتك",
    slug: "guide-choosing-shaver",
    excerpt: "تعرف على الفروق بين ماكينات الحلاقة الدوارة والترددية وكيف تختار الأنسب لنوع لحيتك.",
    content: "الحلاقة اليومية قد تكون عبئاً على البشرة إذا لم تختار الأداة الصحيحة. ماكينات كيمي (Kemei) تقدم تنوعاً كبيراً يناسب البشرة الحساسة والشعر الكثيف. ننصح دائماً باختيار الماكينات ذات الشفرات التيتانيوم أو السيراميك لمنع التهيج.",
    image: "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "post-2",
    title: "أسرار تصفيف الشعر في المنزل بنتائج الصالونات الاحترافية",
    slug: "hair-styling-at-home-secrets",
    excerpt: "كيف تستخدمين الاستشوار والمكواة بدون إتلاف شعرك؟ نصائح من خبراء هوم جولد.",
    content: "استخدام الحرارة العالية بدون حماية قد يؤدي لتقصف الشعر. مكواة هوم جولد (Home Gold) مزودة بتقنية الأيونات التي تحافظ على رطوبة الشعر. تأكدي دائماً من تجفيف شعرك بنسبة 80% قبل استخدام المكواة للحصول على لمعان فائق.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop"
  }
];

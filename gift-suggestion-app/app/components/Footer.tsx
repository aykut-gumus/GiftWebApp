export default function Footer() {
  return (
    <footer className="bg-black/80 backdrop-blur-md text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                Hediye Bulucu
              </h3>
              <p className="text-gray-300 text-base sm:text-lg">
                Sevdiklerin için en uygun hediyeyi yapay zekâ ile bul!
              </p>
            </div>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-xl sm:text-2xl">📱</a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-xl sm:text-2xl">💬</a>
              <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-xl sm:text-2xl">📧</a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-xl sm:text-2xl">🌐</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white">Hızlı Linkler</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-sm sm:text-base">Nasıl Çalışır?</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base">Hediye Kategorileri</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-sm sm:text-base">SSS</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">İletişim</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white">Destek</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-sm sm:text-base">Yardım Merkezi</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base">Gizlilik Politikası</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-sm sm:text-base">Kullanım Şartları</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">Geri Bildirim</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2024 Hediye Bulucu. Tüm hakları saklıdır.
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <span className="text-gray-400 text-xs sm:text-sm">🤖 Yapay Zekâ Destekli</span>
              <span className="text-gray-400 text-xs sm:text-sm">💝 Güvenilir Hediye Önerileri</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 
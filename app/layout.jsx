import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Електрик у Кам\'янці-Подільському | Швидко та надійно',
  description: 'Професійні електромонтажні роботи, аварійний виїзд 24/7, заміна проводки, розумний дім. Гарантія 5 років.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

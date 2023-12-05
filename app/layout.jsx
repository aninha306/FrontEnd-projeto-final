import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Arte Alem da Tela',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

//esse código parece configurar a fonte "Inter" do Google Fonts e define algumas informações de metadados para
// uma aplicação web usando Next.js. Ele também cria um layout base para a página web em português do Brasil, 
//aplicando estilos globais e definindo a fonte para o corpo da página.

import { Inter, Lusitana ,Hanken_Grotesk } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
})
export const grotesk = Hanken_Grotesk({ subsets: ['latin'],
    weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ]
})


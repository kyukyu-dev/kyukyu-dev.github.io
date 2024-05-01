import createMDX from '@next/mdx'
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'
const withVanillExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
}

const withMDX = createMDX({})

export default withVanillExtract(withMDX(nextConfig))

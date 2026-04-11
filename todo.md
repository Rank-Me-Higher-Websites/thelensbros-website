# Performance Optimization TODO

## Baseline: Mobile 54, LCP 47.2s, CLS 0, TBT 140ms

### Critical Issues
- [ ] Images are massive (5-7.5 MB each!) — total payload ~92 MB. Need to resize/compress all CDN images
- [ ] Minify JavaScript — 1,305 KiB savings possible
- [ ] Reduce unused JavaScript — 991 KiB savings (react-dom, radix, sonner, lucide)
- [ ] Render blocking resources — 1,350ms savings
- [ ] No cache headers on images — 88,653 KiB could be cached

### Image Optimizations
- [ ] Add explicit width/height to all img tags to prevent CLS
- [ ] Add loading="lazy" to all below-fold images
- [ ] Add fetchpriority="high" to hero/LCP image
- [ ] Preload the hero LCP image in HTML head
- [ ] Use smaller image sizes — resize originals or use CDN transforms

### JS/CSS Optimizations
- [ ] Code-split routes with React.lazy + Suspense
- [ ] Remove unused icon imports from lucide-react (tree-shake)
- [ ] Defer Google Fonts loading with display=swap
- [ ] Add font preconnect hints

### Build Optimizations
- [ ] Configure Vite for optimal chunking and minification
- [ ] Enable CSS minification
- [ ] Add compression plugin for gzip/brotli
